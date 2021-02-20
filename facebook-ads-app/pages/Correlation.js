import { Card, Layout, Page, Heading, TextStyle } from "@shopify/polaris";
import React from "react";
import styles from "./pagestyles.css";
import { populateFields, targetCalculator } from "../server/population";
import { Upload } from "../server/upload";

class Correlation extends React.Component {
  render() {
    return (
      <>
        <div className="average-order-style">
          <h2>Average Order Value</h2>
          <tb id="average-order-value" type="number"></tb>
        </div>
        <div className="table_overviews">
          <div className="table_style">
            <table id="table1">
              <tbody>
                <tr>
                  <td className="s0">Correlations</td>
                  <td className="s0" dir="ltr">
                    CPA
                  </td>
                  <td className="s0" dir="ltr">
                    ROAS
                  </td>
                </tr>

                <div className="correlations_overview_results">
                  <tr>
                    <td className="s2">Click Through Rate</td>
                    <td id="testi"></td>
                    <td id="roas-ctr"></td>
                  </tr>
                  <tr>
                    <td className="s2">Cost Per Click</td>
                    <td className="s3"></td>
                    <td id="roas-clicks"></td>
                  </tr>
                  <tr>
                    <td className="s2">Cost Per Add To Cart</td>
                    <td className="s3"></td>
                    <td id="roas-carts"></td>
                  </tr>
                  <tr>
                    <td className="s2">Cost Per Initiate Checkout</td>
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
                  <td className="s13" dir="ltr">
                    Conversion Rate
                  </td>
                </tr>

                <div className="conversion_rate_results">
                  <tr>
                    <td className="s4">Click -&gt; Add To Cart</td>
                    <td id="Clicks-to-add-to-cart"></td>
                  </tr>
                  <tr>
                    <td className="s4" dir="ltr">
                      Click -&gt; Initiate Checkout
                    </td>
                    <td id="click-to-check-result"></td>
                  </tr>
                  <tr>
                    <td className="s2" dir="ltr">
                      Click -&gt; Purchase
                    </td>
                    <td id="click-to-purch-result"></td>
                  </tr>
                  <tr>
                    <td className="s2" dir="ltr">
                      Add To Cart -&gt; Initiate Checkout
                    </td>
                    <td id="cart-to-check-result"></td>
                  </tr>
                  <tr>
                    <td className="s2" dir="ltr">
                      Add To Cart -&gt; Purchase
                    </td>
                    <td id="add-to-cart-to-purchase-value"></td>
                  </tr>
                  <tr>
                    <td className="s9" dir="ltr">
                      Initiate Checkout -&gt; Purchase
                    </td>
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
                  <td className="s0">Target Calculator</td>
                </tr>

                <div className="target_calculator_results">
                  <tr>
                    <td className="s16" dir="ltr">
                      ROAS Target
                    </td>
                    <td inputtype="text" className="s17" dir="ltr">
                      <input
                        id="Roas_target_input"
                        type="number"
                        placeholder="4"
                      ></input>
                      <button onClick={targetCalculator}>Calculate</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="s2">Cost Per Add To Cart</td>
                    <td id="s9"></td>
                  </tr>
                  <tr>
                    <td className="s2">Cost Per Initiate Checkout</td>
                    <td id="97"></td>
                  </tr>
                  <tr>
                    <td className="s2">CPA</td>
                    <td id="CPA-value"></td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>

          <div id="table_style">
            <table id="facebook_data">
              <tbody>
                <h2>Facebook Data</h2>
                <script src="/CSV_upload.js" type="text/javascript"></script>
                <input type="file" id="fileUpload" />
                <input
                  type="button"
                  id="upload"
                  value="Upload"
                  onClick={Upload}
                />
                <button
                  className="populate_correlation"
                  onClick={populateFields}
                >
                  go
                </button>
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
