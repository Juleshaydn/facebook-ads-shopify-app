import fetch from "node-fetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "next/app";
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "react-router-dom";
import { Provider } from "@shopify/app-bridge-react";
import { EnvironmentContext } from "twilio/lib/rest/serverless/v1/service/environment";

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: shopOrigin,
      forceRedirect: true,
    };
    const client = new ApolloClient({
      fetch: fetch,
      fetchOptions: {
        credentials: "include",
      },
    });

    return (
      <AppProvider i18n={translations}>
        <Provider config={config}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </AppProvider>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};

export default MyApp;
