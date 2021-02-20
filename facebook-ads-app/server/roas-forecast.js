import React from "react";
import ReactDOM from "react-dom";

function populateRoas() {
  var other_fee = document.getElementById("other-fee").value;
  var other_fee_val = parseFloat(other_fee, 10);

  var credit_card_fee = document.getElementById("credit-card-fee").value;
  var credit_card_fee_val = parseFloat(credit_card_fee, 10);

  var merchant_fee = document.getElementById("merchant-fee").value;
  var merchant_fee_val = parseFloat(merchant_fee, 10);

  var shipping_fee = document.getElementById("shipping-fee").value;
  var shipping_fee_val = parseFloat(shipping_fee, 10);

  var fulfilment_fee = document.getElementById("fulfilment-fee").value;
  var fulfilment_fee_val = parseFloat(fulfilment_fee, 10);

  var product_fee = document.getElementById("product-fee").value;
  var product_fee_val = parseFloat(product_fee, 10);

  var other_fee = document.getElementById("other-fee").value;
  var other_fee_val = parseFloat(other_fee, 10);

  var average_order_value = document.getElementById("average-order-value")
    .value;
  var average_order_value_val = parseFloat(average_order_value, 10);

  var total =
    shipping_fee_val + fulfilment_fee_val + product_fee_val + other_fee_val;

  var percSum = ((credit_card_fee_val + merchant_fee_val) * 100) / total;

  var profit =
    average_order_value_val -
    (shipping_fee_val + fulfilment_fee_val + product_fee_val + other_fee_val) -
    percSum;

  var cellArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
  var roasArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (var i = 0; i < cellArr.length; i++) {
    for (var j = 1; j < 6; j++) {
      var val = document.getElementById(cellArr[i] + j);
      var roas = document.getElementById("roas-" + roasArr[i]).innerHTML;
      var spend = document.getElementById("spend-" + j).innerHTML;
      var cellVal =
        roas * spend -
        ((spend * roas) / average_order_value_val) * total -
        spend;
      val.innerHTML = cellVal.toFixed(2);
    }
  }
}

function spendUp() {
  for (var i = 1; i != 6; i++) {
    var spend = document.getElementById("spend-" + i).innerHTML;
    var spendVal = parseInt(spend, 10);
    document.getElementById("spend-" + i).innerHTML = spendVal + 50;
  }
  populateRoas.call();
}

function spendDown() {
  for (var i = 1; i != 6; i++) {
    var spend = document.getElementById("spend-" + i).innerHTML;
    var spendVal = parseInt(spend, 10);
    document.getElementById("spend-" + i).innerHTML = spendVal - 50;
  }
  populateRoas.call();
}

function roasDown() {
  for (var i = 1; i != 13; i++) {
    var roas = document.getElementById("roas-" + i).innerHTML;
    var roasVal = parseFloat(roas, 10) - 0.1;
    document.getElementById("roas-" + i).innerHTML = roasVal.toFixed(1);
  }
  populateRoas.call();
}

function roasUp() {
  for (var i = 1; i != 13; i++) {
    var roas = document.getElementById("roas-" + i).innerHTML;
    var roasVal = parseFloat(roas, 10) + 0.1;
    document.getElementById("roas-" + i).innerHTML = roasVal.toFixed(1);
  }
  populateRoas.call();
}

export { populateRoas, spendUp, spendDown, roasDown, roasUp };
