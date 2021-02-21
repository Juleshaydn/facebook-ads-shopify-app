import {
  Card,
  Layout,
  Page,
  Heading,
  TextStyle,
  Button,
} from "@shopify/polaris";
import React from "react";
import styles from "./pagestyles.css";
import { populateFields, targetCalculator } from "../server/population";
import { Upload } from "../server/upload";

class Correlation extends React.Component {
  render() {
    return (
      <>
        <div className="average-order-style">
          <Heading>Average Order Value</Heading>
          <tb id="average-order-value" type="number"></tb>
        </div>
        <div className="table_overviews">
          <div className="table_style">
            <table id="table1">
              <tbody>
                <tr>
                  <Heading className="s0">Correlations</Heading>
                  <td className="s0" dir="ltr">
                    CPA
                  </td>
                  <td className="s0" dir="ltr">
                    ROAS
                  </td>
                </tr>

                <div className="correlations_overview_results">
                  <tr>
                    <TextStyle className="s2">Click Through Rate</TextStyle>
                    <td id="testi"></td>
                    <td id="roas-ctr"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2">Cost Per Click</TextStyle>
                    <td className="s3"></td>
                    <td id="roas-clicks"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2">Cost Per Add To Cart</TextStyle>
                    <td className="s3"></td>
                    <td id="roas-carts"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2">
                      Cost Per Initiate Checkout
                    </TextStyle>
                    <td className="s3"></td>
                    <td id="roas-checkout"></td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>

          <div className="table_style">
            <table id="conversion_rate_overview">
              <tbody>
                <tr>
                  <Heading className="s13" dir="ltr">
                    Conversion Rate
                  </Heading>
                </tr>

                <div className="conversion_rate_results">
                  <tr>
                    <TextStyle className="s4">
                      Click -&gt; Add To Cart
                    </TextStyle>
                    <td id="Clicks-to-add-to-cart"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s4" dir="ltr">
                      Click -&gt; Initiate Checkout
                    </TextStyle>
                    <td id="click-to-check-result"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2" dir="ltr">
                      Click -&gt; Purchase
                    </TextStyle>
                    <td id="click-to-purch-result"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2" dir="ltr">
                      Add To Cart -&gt; Initiate Checkout
                    </TextStyle>
                    <td id="cart-to-check-result"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2" dir="ltr">
                      Add To Cart -&gt; Purchase
                    </TextStyle>
                    <td id="add-to-cart-to-purchase-value"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s9" dir="ltr">
                      Initiate Checkout -&gt; Purchase
                    </TextStyle>
                    <td id="initiate-checkout-to-purchase-value"></td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>

          <div className="table_style">
            <table id="target_calculator">
              <tbody>
                <tr>
                  <Heading className="s0">Target Calculator</Heading>
                </tr>

                <div className="target_calculator_results">
                  <tr>
                    <TextStyle className="s16" dir="ltr">
                      ROAS Target
                    </TextStyle>
                    <td inputtype="text" className="s17" dir="ltr">
                      <input
                        id="Roas_target_input"
                        type="number"
                        placeholder="4"
                      ></input>
                      <Button onClick={targetCalculator}>Calculate</Button>
                    </td>
                  </tr>
                  <tr>
                    <p className="s2">Cost Per Add To Cart</p>
                    <td id="s9"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2">
                      Cost Per Initiate Checkout
                    </TextStyle>
                    <td id="97"></td>
                  </tr>
                  <tr>
                    <TextStyle className="s2">CPA</TextStyle>
                    <td id="CPA-value"></td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>

          <div id="table_style">
            <table id="facebook_data">
              <tbody>
                <Heading>Facebook Data</Heading>
                <script src="/CSV_upload.js" type="text/javascript"></script>
                <input type="file" id="fileUpload" />
                <Button
                  type="button"
                  id="upload"
                  value="Upload"
                  onClick={Upload}
                >
                  Upload
                </Button>
                <Button
                  className="populate_correlation"
                  onClick={populateFields}
                >
                  Go
                </Button>
                <div id="dvCSV"></div>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Correlation;
