/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Fragment } from "react";
import "./FAQ.css";
// import back2 from "../imgs/back2.jpg"
const FAQ = () => {
  return (
    <Fragment>
      <div className="container FAQ" id="faq">
        <h3>Frequently Asked Questions</h3>
        <div className="row FAQ-row">
          <div className="col col-6">
            <h4>~ Is Foodera Bread really baked fresh each day?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col col-6">
            <h4>~ Do you bake breads containing animal fats or products?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col col-6">
            <h4>~ Can I order your products online?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col col-6">
            <h4>~ When are you opening a shop near me?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="layer">
          <div className="container">
            <h3>Baked fresh daily by bakers with passion.</h3>
            <button className="btn"> Learn More</button>
          </div>
        </div>
      </div>
      <div className="input-area">
        <div className="container sign-cont">
          <div className="row">
            <div className="text">
              <h3>Hurry up! Subscribe our newsletter and get 25% Off</h3>
              <p>Limited time offer for this month. No credit card required.</p>
            </div>
            <div className="input">
              <input type="text" placeholder="Email Address Here"></input>
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ;
