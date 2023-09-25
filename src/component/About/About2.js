/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./About2.css";
import { Fragment } from "react";
const About2 = () => {
  return (
    <Fragment>
      <div className=" container about2">
        <div className="parent2">
          <div className="child about-text2">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <div className="checks">
              <p>
                <span> ✓ </span> Etiam sed dolor ac diam volutpat.
              </p>
              <p>
                <span> ✓ </span>Erat volutpat aliquet imperdiet.
              </p>
              <p>
                <span> ✓ </span> purus a odio finibus bibendum.
              </p>
            </div>

            <button className="btn about-btn">Learn More</button>
          </div>
          <div className="child about-img2">
            <img src="http://demo.tutsflow.com/foodera/images/features/2.png"></img>
          </div>
        </div>
      </div>
      <div className=" about3">
        <div className="text3">
          <h3>
            When a man's stomach is full it makes no difference whether he is
            rich or poor.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio <br></br> finibus bibendum in sit amet leo. Mauris
            feugiat erat tellus.
          </p>
          <div className="you-link">
          <a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"> Watch Video</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About2;
