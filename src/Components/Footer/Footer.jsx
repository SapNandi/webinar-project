import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <div className="copyright-area">
        <div className="foot-wrapper">
          <div className="left">
            <p>Copyright © 2018, All Right Reserved</p>
          </div>
          <div className="right">
            <FaFacebook className="icons facebook"/>
            {/* <AiFillTwitterCircle className="icons twitter"/> */}
            <FcGoogle className="icons google"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
