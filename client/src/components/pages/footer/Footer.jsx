/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = ({ colorState }) => {
  return (
    <>
      <div className="home-footer">
        <div className="footer-contents">
          <h3>
            <Link
              to={"/about"}
              className={
                colorState
                  ? "nav-links link-color-1 "
                  : "nav-links link-color-2"
              }>
              About
            </Link>
          </h3>
          <h3>
            <Link
              to="/contact"
              className={
                colorState
                  ? "nav-links link-color-1 "
                  : "nav-links link-color-2"
              }>
              Contact
            </Link>
          </h3>
          <h3>
            <Link
              to="/contact"
              className={
                colorState
                  ? "nav-links link-color-1 "
                  : "nav-links link-color-2"
              }>
              Locate us
            </Link>
          </h3>
        </div>
        <div className="socail-media-icons">
          <AiOutlineFacebook
            className={
              colorState
                ? "nav-links link-color-1 socail-icons"
                : "nav-links link-color-2 socail-icons"
            }
          />
          <AiOutlineInstagram
            className={
              colorState
                ? "nav-links link-color-1 socail-icons "
                : "nav-links link-color-2 socail-icons"
            }
          />
          <AiOutlineTwitter
            className={
              colorState
                ? "nav-links link-color-1 socail-icons "
                : "nav-links link-color-2 socail-icons"
            }
          />
        </div>
      </div>
      <div className="terms-service">
        <p>
          <Link
            to="/termsofservice"
            className={
              colorState ? "nav-links link-color-3 " : "nav-links link-color-4"
            }>
            Terms of Services
          </Link>
        </p>
        <p>
          <Link
            to="/privacy"
            className={
              colorState ? "nav-links link-color-3" : "nav-links link-color-4"
            }>
            Privacy Policy
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
