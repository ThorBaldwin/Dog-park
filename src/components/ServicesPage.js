import React from "react";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <>
      <div className="servicespage-container"></div>
      <div className="main-card">
        <h1>Services We Offer!</h1>
        <div>
          <h2 className="title">Phoenix Walks</h2>
        </div>
        <div className="main-details">
          <p>
            Our team consists of professional and thoroughly vetted dog walkers,
            ensuring the safety and well-being of your furry friend. We
            understand that every dog is unique, so we provide flexible
            scheduling options, including daily, weekly, or occasional walks
            tailored to your specific needs. Whether your dog thrives on
            one-on-one attention or enjoys the company of fellow canines, we
            offer solo and group walks of varying durations, from a quick
            15-minute stroll to an energetic 60-minute adventure.
          </p>
          <img src="/imagez/puppypeak.jpg" alt="" />
        </div>

        <div className="details-2">
          <h2 className="title">Scottsdale Luxury</h2>
        </div>
        <div className="main-details-2">
          <p>
            Scottsdale boasts a range of well-maintained dog parks, each
            providing a unique environment for dogs to socialize, exercise, and
            enjoy the great outdoors. From spacious grassy areas for fetch to
            agility courses that challenge and entertain, these parks cater to
            dogs of all sizes and energy levels. Join the vibrant Scottsdale
            dog-loving community by securing your spot in a neighborhood with
            easy access to these fantastic parks. Whether you're a pet owner
            looking for a home close to canine-friendly amenities or an investor
            interested in the pet-centric real estate market, our generic sale
            of dog park-rich Scottsdale promises a tail-wagging experience for
            everyone. Explore our listings today and find the perfect property
            to enhance both your and your dog's quality of life!
          </p>
          <img src="/imagez/doggy.jpg" alt="" className="last-img" />
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
