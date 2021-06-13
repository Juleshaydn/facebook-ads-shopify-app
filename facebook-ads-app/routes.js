import { Page } from "@shopify/polaris";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./pagestyles.css";
import Creative from "./Creative";
import ShopData from "./ShopData";
import Correlation from "./Correlation";
import ROAS_Forecast from "./ROAS_Forecast";
import Dashboard from "./Dashboard";

const routes = {
  path: "app",
  element: <Page />,
  children: [
    { path: "account", element: <Dashboard /> },
    { path: "customers", element: <Correlation /> },
    { path: "dashboard", element: <ROAS_Forecast /> },
  ],
};
export default routes;
