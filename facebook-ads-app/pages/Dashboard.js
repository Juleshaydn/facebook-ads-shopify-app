import { Card, Layout, Page, Heading, Spinner, Button } from "@shopify/polaris";
import React from "react";
import ReactDOM from "react-dom";
import { generateCreative, newAdCopy } from "../server/creatives";
import styles from "./pagestyles.css";
import ShopData from "./ShopData";

class Dashboard extends React.Component {
  render() {
    return <Page title="Welcome back!"></Page>;
  }
}
export default Dashboard;
