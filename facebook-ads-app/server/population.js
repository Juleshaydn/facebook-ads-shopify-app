import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
var Statistics = require("statistics.js");

function populateFields() {
  var amountSpent = 0;
  let amountSpentArr = [];
  $(".cell-1").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      amountSpentArr.push(value);
      amountSpent += parseFloat(value, 10);
    }
  });

  // Total Purchases Conversion Value
  let purchasesConversionValue = 0;
  let purchasesConversionValueArr = [];
  $(".cell-2").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesConversionValueArr.push(Math.round(value));
      purchasesConversionValue += parseFloat(value, 10);
    }
  });

  // Total Purchases
  let purchases = 0;
  let purchasesArr = [];
  $(".cell-3").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesArr.push(value);
      purchases += parseFloat(value);
    }
  });

  let costPurchaseArr = [];
  for (i = 0; i < amountSpentArr.length; i++) {
    var costPur = amountSpentArr[i] / purchasesArr[i];
    costPurchaseArr.push(parseFloat(costPur));
    console.log(amountSpentArr[i]);
    if (purchasesArr[i] === null || 0 || NaN) {
      costPurchaseArr.push(amountSpentArr[i]);
    }
    // console.log(purchasesArr[i]);
  }
  console.log(costPurchaseArr);
  // Total Purchase ROAS (return on ad spend)
  let purchaseROAS = 0;
  let purchaseROASArr = [];
  $(".cell-4").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchaseROASArr.push(String(Math.round(value)));
      purchaseROAS += parseFloat(value, 10);
    }
  });

  // Total checkouts initiated
  var checkoutsInitiated = 0;
  let checkoutsInitiatedArr = [];
  $(".cell-5").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      checkoutsInitiatedArr.push(value);
      checkoutsInitiated += parseFloat(value);
    }
  });

  // Total Adds to cart
  var addsToCart = 0;
  let addsToCartArr = [];
  $(".cell-6").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      addsToCartArr.push(value);
      addsToCart += parseFloat(value);
    }
  });

  // Total Link clicks
  let linkClicks = 0;
  let linkClicksArr = [];
  $(".cell-7").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      linkClicksArr.push(value);
      linkClicks += parseInt(value, 10);
    }
  });

  // Total CTR (link click-through rate)
  let ctr = 0;
  let ctrArr = [];
  $(".cell-8").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      ctrArr.push(String(Math.round(value)));
      ctr += parseFloat(value, 10);
    }
  });

  // Updates Conversion rate
  var conversionTable = document.getElementById("conversion_rate_results");

  var clicksToCart = (addsToCart / linkClicks) * 100;
  var clicksToCartresult = clicksToCart.toFixed(2) + "%";

  ReactDOM.render(
    clicksToCartresult,
    document.getElementById("Clicks-to-add-to-cart")
  );

  var clicksToCheckout = (checkoutsInitiated / linkClicks) * 100;
  var clicksToCheckoutresult = clicksToCheckout.toFixed(2) + "%";

  ReactDOM.render(
    clicksToCheckoutresult,
    document.getElementById("click-to-check-result")
  );

  var clicksToPurchase = (purchases / linkClicks) * 100;
  var clicksToPurchaseresult = clicksToPurchase.toFixed(2) + "%";

  ReactDOM.render(
    clicksToPurchaseresult,
    document.getElementById("click-to-purch-result")
  );

  var cartToCheckout = (checkoutsInitiated / addsToCart) * 100;
  var cartToCheckoutresult = cartToCheckout.toFixed(2) + "%";

  ReactDOM.render(
    cartToCheckoutresult,
    document.getElementById("cart-to-check-result")
  );

  var cartToPurchase = (purchases / addsToCart) * 100;
  var cartToPurchaseresult = cartToPurchase.toFixed(2) + "%";

  ReactDOM.render(
    cartToPurchaseresult,
    document.getElementById("add-to-cart-to-purchase-value")
  );

  var checkoutToPurchase = (purchases / checkoutsInitiated) * 100;
  var checkoutToPurchaseresult = checkoutToPurchase.toFixed(2) + "%";

  ReactDOM.render(
    checkoutToPurchaseresult,
    document.getElementById("initiate-checkout-to-purchase-value")
  );

  // cpa array
  var cpa = amountSpent / purchases;
  var Aov = purchasesConversionValue / purchases;
  var AovVal = "£" + Aov.toFixed(2);
  var table1 = document.getElementById("table1");
  ReactDOM.render(AovVal, document.getElementById("average-order-value"));

  //====================================
  //    CORRELATIONS START
  //====================================

  var container = []; // main object
  // add 100 sub-object values
  for (var i = 0; i < addsToCartArr.length; ++i) {
    container[i] =
      /*property name or key of choice*/
      {
        roas: parseFloat(purchaseROASArr[i]),
        val: parseFloat(ctrArr[i]),
      };
  }

  var bodyVars = {
    roas: "metric",
    val: "metric",
  };
  var stats = new Statistics(container, bodyVars);
  var r = stats.correlationCoefficient("roas", "val");
  var answerVal = r.correlationCoefficient.toFixed(2);
  ReactDOM.render(answerVal, document.getElementById("roas-ctr"));

  // container2
  var container2 = []; // main object
  // add 100 sub-object values
  for (var i = 0; i < addsToCartArr.length; ++i) {
    container2[i] =
      /*property name or key of choice*/
      {
        roas: parseFloat(purchaseROASArr[i]),
        val: parseFloat(linkClicksArr[i]),
      };
  }

  var bodyVars = {
    roas: "metric",
    val: "metric",
  };
  var stats = new Statistics(container2, bodyVars);
  var r = stats.correlationCoefficient("roas", "val");
  var answerVal = r.correlationCoefficient.toFixed(2);
  ReactDOM.render(answerVal, document.getElementById("roas-clicks"));

  // container3
  var container3 = []; // main object
  // add 100 sub-object values
  for (var i = 0; i < addsToCartArr.length; ++i) {
    container3[i] =
      /*property name or key of choice*/
      {
        roas: parseFloat(purchaseROASArr[i]),
        val: parseFloat(addsToCartArr[i]),
      };
  }

  var bodyVars = {
    roas: "metric",
    val: "metric",
  };
  var stats = new Statistics(container3, bodyVars);
  var r = stats.correlationCoefficient("roas", "val");
  var answerVal = r.correlationCoefficient.toFixed(2);

  ReactDOM.render(answerVal, document.getElementById("roas-carts"));

  // container4
  var container4 = []; // main object
  // add 100 sub-object values
  for (var i = 0; i < addsToCartArr.length; ++i) {
    container4[i] =
      /*property name or key of choice*/
      {
        roas: parseFloat(purchaseROASArr[i]),
        val: parseFloat(checkoutsInitiatedArr[i]),
      };
  }

  var bodyVars = {
    roas: "metric",
    val: "metric",
  };
  var stats = new Statistics(container4, bodyVars);
  var r = stats.correlationCoefficient("roas", "val");
  var answerVal = r.correlationCoefficient.toFixed(2);
  ReactDOM.render(answerVal, document.getElementById("roas-checkout"));

  //====================================
  //    CORRELATIONS END
  //====================================
}

function targetCalculator() {
  var input = document.getElementById("Roas_target_input").value;
  var table = document.getElementById("target_calculator");

  // Total Adds to cart
  var addsToCart = 0;
  let addsToCartArr = [];
  $(".cell-6").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      addsToCartArr.push(value);
      addsToCart += parseFloat(value);
    }
  });

  // Total checkouts initiated
  var checkoutsInitiated = 0;
  let checkoutsInitiatedArr = [];
  $(".cell-5").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      checkoutsInitiatedArr.push(value);
      checkoutsInitiated += parseFloat(value);
    }
  });

  // Total Purchases
  let purchases = 0;
  let purchasesArr = [];
  $(".cell-3").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesArr.push(value);
      purchases += parseFloat(value);
    }
  });

  // Total Purchases Conversion Value
  let purchasesConversionValue = 0;
  let purchasesConversionValueArr = [];
  $(".cell-2").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesConversionValueArr.push(Math.round(value));
      purchasesConversionValue += parseFloat(value, 10);
    }
  });

  var checkoutToPurchase = (purchases / checkoutsInitiated) * 100;

  var cartToPurchase = (purchases / addsToCart) * 100;

  var Aov = purchasesConversionValue / purchases;
  var cpaTar = Aov / input;

  var cpaTarVal = "£" + cpaTar.toFixed(2);

  var addsToCartTar = (cpaTar * cartToPurchase) / 100;
  var addsToCartTarVal = "£" + addsToCartTar.toFixed(2);

  var checkoutsInitiatedTar = (cpaTar * checkoutToPurchase) / 100;
  var checkoutsInitiatedTarVal = "£" + checkoutsInitiatedTar.toFixed(2);

  ReactDOM.render(addsToCartTarVal, document.getElementById("s9"));
  ReactDOM.render(checkoutsInitiatedTarVal, document.getElementById("97"));
  ReactDOM.render(cpaTarVal, document.getElementById("CPA-value"));
}

export { populateFields, targetCalculator };
export { Statistics };
