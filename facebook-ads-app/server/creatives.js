import React from "react";
import ReactDOM from "react-dom";
import $ from "jQuery";

function generateCreative() {
  $("#select_id").change(function () {
    var cat = $(this).val();
    ReactDOM.render(cat, document.getElementById("creative-text"));
  });
}

function newAdCopy() {
  var catagory = document.getElementById("creative-text").innerHTML;
  if (catagory == "Womens-Fashion") {
    var womensFashion = {
      primarytext: [
        "The primary text 1!",
        "The primary text 2!",
        "The primary text 3!",
        "The primary text 4!",
        "The primary text 5!",
        "The primary text 6!",
        "The primary text 7!",
        "The primary text 8!",
        "The primary text 9!",
        "The primary text 10!",
      ],

      headline: [
        "The headline text 1!🤌🏻",
        "The headline text 2!❤️",
        "The headline text 3!",
        "The headline text 4!",
        "The headline text 5!",
        "The headline text 6!",
        "The headline text 7!",
        "The headline text 8!",
        "The headline text 9!",
        "The headline text 10!",
      ],

      description: [
        "The description text 1!",
        "The description text 2!",
        "The description text 3!",
        "The description text 4!",
        "The description text 5!",
        "The description text 6!",
        "The description text 7!",
        "The description text 8!",
        "The description text 9!",
        "The description text 10!",
      ],
    };

    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    var primarytext = womensFashion.primarytext[randomNum1];
    var headline = womensFashion.headline[randomNum2];
    var description = womensFashion.description[randomNum3];
    ReactDOM.render(primarytext, document.getElementById("primarytext"));
    ReactDOM.render(headline, document.getElementById("headline"));
    ReactDOM.render(description, document.getElementById("description"));
  } else if (catagory == "Technology") {
    var technology = {
      primarytext: [
        "The technology primary text 1!",
        "The technology primary text 2!",
        "The technology primary text 3!",
        "The technology primary text 4!",
        "The technology primary text 5!",
        "The technology primary text 6!",
        "The technology primary text 7!",
        "The technology primary text 8!",
        "The technology primary text 9!",
        "The technology primary text 10!",
      ],

      headline: [
        "The technology headline text 1!",
        "The technology headline text 2!",
        "The technology headline text 3!",
        "The technology headline text 4!",
        "The technology headline text 5!",
        "The technology headline text 6!",
        "The technology headline text 7!",
        "The technology headline text 8!",
        "The technology headline text 9!",
        "The technology headline text 10!",
      ],

      description: [
        "The technology description text 1!",
        "The technology description text 2!",
        "The technology description text 3!",
        "The technology description text 4!",
        "The technology description text 5!",
        "The technology description text 6!",
        "The technology description text 7!",
        "The technology description text 8!",
        "The technology description text 9!",
        "The technology description text 10!",
      ],
    };

    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    var primarytext = technology.primarytext[randomNum1];
    var headline = technology.headline[randomNum2];
    var description = technology.description[randomNum3];
    ReactDOM.render(primarytext, document.getElementById("primarytext"));
    ReactDOM.render(headline, document.getElementById("headline"));
    ReactDOM.render(description, document.getElementById("description"));
  } else if (catagory == "Phone-Accessories") {
    var phone_Accessories = {
      primarytext: [
        "The Phone Accessories primary text 1!",
        "The Phone Accessories primary text 2!",
        "The Phone Accessories primary text 3!",
        "The Phone Accessories primary text 4!",
        "The Phone Accessories primary text 5!",
        "The Phone Accessories primary text 6!",
        "The Phone Accessories primary text 7!",
        "The Phone Accessories primary text 8!",
        "The Phone Accessories primary text 9!",
        "The Phone Accessories primary text 10!",
      ],

      headline: [
        "The Phone Accessories headline text 1!",
        "The Phone Accessories headline text 2!",
        "The Phone Accessories headline text 3!",
        "The Phone Accessories headline text 4!",
        "The Phone Accessories headline text 5!",
        "The Phone Accessories headline text 6!",
        "The Phone Accessories headline text 7!",
        "The Phone Accessories headline text 8!",
        "The Phone Accessories headline text 9!",
        "The Phone Accessories headline text 10!",
      ],

      description: [
        "The Phone Accessories description text 1!",
        "The Phone Accessories description text 2!",
        "The Phone Accessories description text 3!",
        "The Phone Accessories description text 4!",
        "The Phone Accessories description text 5!",
        "The Phone Accessories description text 6!",
        "The Phone Accessories description text 7!",
        "The Phone Accessories description text 8!",
        "The Phone Accessories description text 9!",
        "The Phone Accessories description text 10!",
      ],
    };

    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    var primarytext = phone_Accessories.primarytext[randomNum1];
    var headline = phone_Accessories.headline[randomNum2];
    var description = phone_Accessories.description[randomNum3];
    ReactDOM.render(primarytext, document.getElementById("primarytext"));
    ReactDOM.render(headline, document.getElementById("headline"));
    ReactDOM.render(description, document.getElementById("description"));
  } else if (catagory == "Toys") {
    var toys = {
      primarytext: [
        "The toys primary text 1!",
        "The toys primary text 2!",
        "The toys primary text 3!",
        "The toys primary text 4!",
        "The toys primary text 5!",
        "The toys primary text 6!",
        "The toys primary text 7!",
        "The toys primary text 8!",
        "The toys primary text 9!",
        "The toys primary text 10!",
      ],

      headline: [
        "The toys headline text 1!",
        "The toys headline text 2!",
        "The toys headline text 3!",
        "The toys headline text 4!",
        "The toys headline text 5!",
        "The toys headline text 6!",
        "The toys headline text 7!",
        "The toys headline text 8!",
        "The toys headline text 9!",
        "The toys headline text 10!",
      ],

      description: [
        "The toys description text 1!",
        "The toys description text 2!",
        "The toys description text 3!",
        "The toys description text 4!",
        "The toys description text 5!",
        "The toys description text 6!",
        "The toys description text 7!",
        "The toys description text 8!",
        "The toys description text 9!",
        "The toys description text 10!",
      ],
    };

    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    var primarytext = toys.primarytext[randomNum1];
    var headline = toys.headline[randomNum2];
    var description = toys.description[randomNum3];
    ReactDOM.render(primarytext, document.getElementById("primarytext"));
    ReactDOM.render(headline, document.getElementById("headline"));
    ReactDOM.render(description, document.getElementById("description"));
  }
}

export { generateCreative, newAdCopy };
