import { Card, Layout, Page, Heading } from "@shopify/polaris";
import React from "react";
import styles from "./pagestyles.css";
import {
  populateRoas,
  spendUp,
  spendDown,
  roasDown,
  roasUp,
} from "../server/roas-forecast";

class Forecast extends React.Component {
  render() {
    return (
      <Page>
        <h1>ROAS Forecast</h1>
        <div className="container">
          <div className="cost-inputs">
            <p>Average Order Value (£)</p>
            <input
              type="number"
              placeholder="405"
              id="average-order-value"
            ></input>

            <p>Credit Card Fees (%)</p>
            <input
              type="number"
              placeholder="2.50"
              id="credit-card-fee"
            ></input>

            <p>Merchant Processing Fees (%)</p>
            <input type="number" placeholder="2.50" id="merchant-fee"></input>

            <p>Shipping Costs (£)</p>
            <input type="number" placeholder="5.00" id="shipping-fee"></input>

            <p>Fulfilment Cost Per Unit (£)</p>
            <input type="number" placeholder="5.00" id="fulfilment-fee"></input>

            <p>Product Cost (singular) (£)</p>
            <input type="number" placeholder="10.00" id="product-fee"></input>

            <p>Other costs (£)</p>
            <input type="number" placeholder="80.00" id="other-fee"></input>

            <button onClick={populateRoas}>Go!</button>
          </div>
        </div>
        <div>
          <div className="roas-forcast">
            <div className="roas-numbers">
              <button onClick={roasDown}>⬅</button>
              <p id="roas-1">1</p>
              <p id="roas-2">1.1</p>
              <p id="roas-3">1.2</p>
              <p id="roas-4">1.3</p>
              <p id="roas-5">1.4</p>
              <p id="roas-6">1.5</p>
              <p id="roas-7">1.6</p>
              <p id="roas-8">1.7</p>
              <p id="roas-9">1.8</p>
              <p id="roas-10">1.9</p>
              <p id="roas-11">2.0</p>
              <p id="roas-12">2.1</p>
              <button onClick={roasUp}>➡</button>
            </div>
            <div className="main">
              <div className="cost-array">
                <button onClick={spendUp}>⬆</button>

                <p id="spend-1">300</p>
                <p id="spend-2">350</p>
                <p id="spend-3">400</p>
                <p id="spend-4">450</p>
                <p id="spend-5">500</p>
                <button onClick={spendDown}>⬇</button>
              </div>

              <div className="cost-values">
                <p id="a1">0</p>
                <p id="a2">0</p>
                <p id="a3">0</p>
                <p id="a4">0</p>
                <p id="a5">0</p>
              </div>
              <div className="cost-values">
                <p id="b1">0</p>
                <p id="b2">0</p>
                <p id="b3">0</p>
                <p id="b4">0</p>
                <p id="b5">0</p>
              </div>
              <div className="cost-values">
                <p id="c1">0</p>
                <p id="c2">0</p>
                <p id="c3">0</p>
                <p id="c4">0</p>
                <p id="c5">0</p>
              </div>
              <div className="cost-values">
                <p id="d1">0</p>
                <p id="d2">0</p>
                <p id="d3">0</p>
                <p id="d4">0</p>
                <p id="d5">0</p>
              </div>
              <div className="cost-values">
                <p id="e1">0</p>
                <p id="e2">0</p>
                <p id="e3">0</p>
                <p id="e4">0</p>
                <p id="e5">0</p>
              </div>
              <div className="cost-values">
                <p id="f1">0</p>
                <p id="f2">0</p>
                <p id="f3">0</p>
                <p id="f4">0</p>
                <p id="f5">0</p>
              </div>
              <div className="cost-values">
                <p id="g1">0</p>
                <p id="g2">0</p>
                <p id="g3">0</p>
                <p id="g4">0</p>
                <p id="g5">0</p>
              </div>
              <div className="cost-values">
                <p id="h1">0</p>
                <p id="h2">0</p>
                <p id="h3">0</p>
                <p id="h4">0</p>
                <p id="h5">0</p>
              </div>
              <div className="cost-values">
                <p id="i1">0</p>
                <p id="i2">0</p>
                <p id="i3">0</p>
                <p id="i4">0</p>
                <p id="i5">0</p>
              </div>
              <div className="cost-values">
                <p id="j1">0</p>
                <p id="j2">0</p>
                <p id="j3">0</p>
                <p id="j4">0</p>
                <p id="j5">0</p>
              </div>
              <div className="cost-values">
                <p id="k1">0</p>
                <p id="k2">0</p>
                <p id="k3">0</p>
                <p id="k4">0</p>
                <p id="k5">0</p>
              </div>
              <div className="cost-values">
                <p id="l1">0</p>
                <p id="l2">0</p>
                <p id="l3">0</p>
                <p id="l4">0</p>
                <p id="l5">0</p>
              </div>
              <div className="cost-array">
                <button onClick={spendUp}>⬆</button>
                <p id="spend-1">300</p>
                <p id="spend-2">350</p>
                <p id="spend-3">400</p>
                <p id="spend-4">450</p>
                <p id="spend-5">500</p>
                <button onClick={spendDown}>⬇</button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Forecast;
