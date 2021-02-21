import React from "react";
import ReactDOM from "react-dom";
import { Provider, Loading, Spinner } from "@shopify/app-bridge-react";

function MyApp() {
  const config = { apiKey: "12345", shopOrigin: shopOrigin };

  const loading = isTheAppLoading();
  const loadingComponent = loading ? <Loading /> : null;

  return (
    <Provider config={config}>
      {loadingComponent}
      <Frame>
        <Loading />
      </Frame>
    </Provider>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<MyApp />, root);
