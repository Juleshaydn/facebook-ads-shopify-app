import { Card, Layout, Page, Heading, Spinner } from "@shopify/polaris";
import React from "react";
import { generateCreative, newAdCopy } from "../server/creatives";
import styles from "./pagestyles.css";

class Creative extends React.Component {
  render() {
    return (
      <Page>
        <div className="main-container">
          <Heading>Creative</Heading>
          <label for="catagories">Store catagory</label>
          <select name="catagories" id="select_id" onChange={generateCreative}>
            <option value="Womens-Fashion">Womens Fashion</option>
            <option value="Technology">Technology</option>
            <option value="Phone-Accessories">Phone Accessories</option>
            <option value="Toys">Toys</option>
          </select>
          <p id="creative-text"></p>
          <button onClick={newAdCopy}>Generate</button>

          <div className="ad-mockup">
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
