import { Card, Layout, Page, Heading, Spinner, Button } from "@shopify/polaris";
import React from "react";
import ReactDOM from "react-dom";
import { generateCreative, newAdCopy } from "../server/creatives";
import styles from "./pagestyles.css";

class Creative extends React.Component {
  render() {
    return (
      <Page title="Ad Copy">
        <div className="main-container">
          <label htmlFor="catagories">Store catagory</label>
          <select name="catagories" id="select_id" onChange={generateCreative}>
            <option value="Womens-Fashion">Womens Fashion</option>
            <option value="Technology">Technology</option>
            <option value="Phone-Accessories">Phone Accessories</option>
            <option value="Toys">Toys</option>
          </select>
          <p id="creative-text"></p>
          <button onClick={newAdCopy}>Generate</button>
          <div className="card2">
            <p id="primarytext"></p>
            <p id="headline"></p>
            <p id="description"></p>
          </div>
        </div>
      </Page>
    );
  }
}
export default Creative;
