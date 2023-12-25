import React from "react";
import "./ProductItem.css";
import { Button } from "./Button";

function ProductItem() {
  return (
    <>
      <div className="header-pic"></div>
      <div className="product-item-container">
        <h1>Dog Walking Service</h1>
        <div class="product">
          <h2>Standard Walk</h2>
          <p>
            Our standard walk is a 30-minute stroll around your neighborhood.
            Perfect for dogs of all ages and sizes.
          </p>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Book Now!
          </Button>
        </div>
        <div class="product">
          <h2>Extended Walk</h2>
          <p>
            Our extended walk is a 1-hour adventure for your dog. Great for dogs
            with lots of energy.
          </p>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Book Now!
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
