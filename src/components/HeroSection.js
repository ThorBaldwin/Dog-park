import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Rent Safe & Private Dog Parks Hosted by Professionals</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Explore Parks
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
