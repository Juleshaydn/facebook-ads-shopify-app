import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card, Loading } from "@shopify/polaris";
import styles from "./pagestyles.css";

const GET_SHOP_DATA = gql`
  query Shop {
    shop {
      name
      contactEmail
    }
  }
`;

class ShopData extends React.Component {
  render() {
    return (
      <>
        <Query query={GET_SHOP_DATA}>
          {({ data, loading, error }) => {
            if (loading)
              return (
                <>
                  <Loading />
                </>
              );
            if (error)
              return (
                <>
                  <p>{error.message}</p>
                </>
              );

            console.log(data);
            return (
              <>
                <p className="shoptitle">{data.shop.name}</p>
                <p className="shopemail">{data.shop.contactEmail}</p>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default ShopData;
