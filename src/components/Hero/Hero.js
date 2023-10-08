import React from "react";
import "./Hero.css";
import { PrimaryButtons } from "../Buttons/Buttons";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <p>Welcome To Cyborg</p>
        <h1>
          <span>BROWSE</span> OUR POPULAR GAMES HERE
        </h1>
        <PrimaryButtons>Browse Now</PrimaryButtons>

        {/* <div className="main-button">
          <a href="browse.html">Browse Now</a>
          <button>Browse Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
