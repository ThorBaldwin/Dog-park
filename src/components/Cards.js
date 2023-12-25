import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Here Are Some Local Dog Parks in Your Area!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="Dog-park/imagez/minidog.webp"
              text="Seek Happiness Near Phoenix, Arizona"
              path="/services"
            />
            <CardItem
              src="Dog-park/imagez/family-dog.webp"
              text="Tired of the City? Try the Suburbs! Scottsdale, Arizona is a Great Place to Start!"
              path="/services"
            />
          </ul>
        </div>
      </div>
      <div className="rating-container">
        <div className="test-1">
          <h1>Here Are Some Testimonials From Our Users!</h1>
          <div className="sidebyside">
            <img src="Dog-park/imagez/doctor.webp" alt="Logo" />
            <p>
              "The modern pet environment and lifestyle is seriously difficult
              for most dogs, given their natures, instincts, and heritage.
              Sniffspot is the greatest current solution to make a difference
              for dogs today."
            </p>
          </div>
          <p className="exception">
            -Dr. Ian Dunbar, Founder of the Association of Professional Dog
            Trainers
          </p>
        </div>
        <div className="test-1">
          <div className="sidebyside">
            <img src="Dog-park/imagez/girl-doctor.webp" alt="Logo" />
            <p>
              "I think Sniffspot is a great idea! Dogs really need exercise in a
              safe space. Public exercise areas have a lot of risks for dogs
              with reactivity issues, so I'm excited to see this
              stress-relieving option."
            </p>
          </div>
          <p className="exception">
            -Dr. Olivia Montgomery, MD, PhD, Doctor of Dog Medicine (MD)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
