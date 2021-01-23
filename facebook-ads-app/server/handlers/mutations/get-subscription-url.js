const getSubscriptionUrl = async (
  accessToken,
  shop,
  returnUrl = process.env.HOST
) => {
  const SUBSCRIPTION_QUERY = JSON.stringify({
    query: `mutation {
      appSubscriptionCreate(
        name: "Facebook ads app"
        returnUrl: "${returnUrl}"
        test: true
        lineItems:
          {
            plan: {
              appRecurringPricingDetails: {
                price: { amount: 10, currencyCode: USD }
              }
            }
          }
      )
      {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
  });

  const response = await fetch(
    `https://${shop}/admin/api/2020-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: SUBSCRIPTION_QUERY,
    }
  );

  const responseJson = await response.json();
  return responseJson.data.appSubscriptionCreate.confirmationUrl;
};

module.exports = getSubscriptionUrl;
