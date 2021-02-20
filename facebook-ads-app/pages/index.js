import { Heading, Page, TextStyle, Spinner } from "@shopify/polaris";
import { populateFields, targetCalculator } from "../server/population";
import { Upload } from "../server/upload";
import styles from "./pagestyles.css";

const Index = () => (
  <Page>
    <div className="average-order-style">
      <h2>Dashboard</h2>
      <tb id="home" type="number"></tb>
    </div>
  </Page>
);

export default Index;
