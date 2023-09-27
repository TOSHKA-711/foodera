/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./About.css"
import aboutImg from "../imgs/1.png"
const About = () => {
  return (
    <div className=" container about" id="about-us">
      <div className="parent">
        <div className="child1 about-img">
          <img src={aboutImg}></img>
        </div>
        <div className="child2 about-text">
          <h2>
            We pride ourselves on making real food from the best ingredients.
          </h2>
      
          <button className="btn about-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
