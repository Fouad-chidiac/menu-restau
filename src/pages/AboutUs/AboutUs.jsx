import React from "react";
import "./AboutUs.css";
import mapLogo from "../AboutUs/location_icon.png"; 
import insta_icon from "../AboutUs/insta_icon.png"
import whatsapp_icon from "../AboutUs/whatsapp_icon.png"

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <h2>About Us</h2>
      <p>Welcome to [Your Restaurant Name], where our passion for flavors and hospitality converge to create a memorable dining experience. Located in the vibrant heart of [Your Location], our cozy restaurant is a haven for those who appreciate good food and a warm atmosphere.</p>
      <p>At [Your Restaurant Name], we believe in the power of simplicity and quality. Our menu is curated with love, featuring a delightful array of crepes, refreshing drinks, and our signature Cupschrista – a dessert that blends tradition with a touch of innovation.</p>
      <p>We invite you to join us and indulge in our carefully crafted dishes, made from the freshest ingredients. Whether you're here for a quick bite, a leisurely meal, or to celebrate a special occasion, we promise to make your visit truly enjoyable. Thank you for being a part of our culinary journey!</p>
      <div className="AboutUs_icons">
      <a href="https://www.google.com/maps/search/?api=1&query=[Your+Restaurant+Address]" target="_blank" rel="noopener noreferrer">
      <div>
        <img src={mapLogo} alt="Map Logo" className="map-logo" />
        {/* <span>Find Us</span> */}
      <p className="AboutUs_location">Location</p>
      </div>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <div>
        <img src={insta_icon} alt="insta Logo" className="map-logo" />
        {/* <span>Find Us</span> */}
      <p className="AboutUs_insta">Instagram</p>
      </div>
      </a>
      </div>
    </div>
  );
};

export default AboutUs;
