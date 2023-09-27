/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import homeImg from "../imgs/home.jpg"
const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="parent">
        <div className="text coll">
          <h2>Good food choices are good investments.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <div className="buttons">
            <button className="btn order"> Order Now </button>
            <button className="btn learn"> Learn More </button>
          </div>
        </div>
        <div className="image coll">
          <img
            className="home-img"
            src={homeImg}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
