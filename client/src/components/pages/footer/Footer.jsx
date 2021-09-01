/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillYoutube,
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
              to={{ pathname: "https://goo.gl/maps/phJq31qsXeJigBEc8" }}
              target="_blank"
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
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/company/ezyable/about/?viewAsMember=true",
            }}
            target="_blank">
            <AiFillLinkedin
              className={
                colorState
                  ? "nav-links link-color-1 socail-icons"
                  : "nav-links link-color-2 socail-icons"
              }
            />
          </Link>
          <Link
            to={{
              pathname:
                "https://www.youtube.com/channel/UCUDxlMVMoS-ASIWVBXDIYwA",
            }}
            target="_blank">
            <AiFillYoutube
              className={
                colorState
                  ? "nav-links link-color-1 socail-icons "
                  : "nav-links link-color-2 socail-icons"
              }
            />
          </Link>
          <Link
            to={{ pathname: "https://twitter.com/Ezyable1" }}
            target="_blank">
            <AiOutlineTwitter
              className={
                colorState
                  ? "nav-links link-color-1 socail-icons "
                  : "nav-links link-color-2 socail-icons"
              }
            />
          </Link>
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
