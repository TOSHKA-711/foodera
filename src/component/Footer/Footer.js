/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="foot">
      <div className="container foot-cont">
        <div className="parent">
          <ul className="list1">
            <li>Register</li>
            <li>Forum</li>
            <li>Affiliate</li>
            <li>FAQ</li>
          </ul>
          <ul className="list-icons">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsLinkedin />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
          <p> ©2021 All rights reserved. Created by T0SHKA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
