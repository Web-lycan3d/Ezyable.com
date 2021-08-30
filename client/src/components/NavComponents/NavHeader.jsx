/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import ApiUrl from "../../ApiUrl";
import { RiContactsBookLine } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import classNames from "classnames";
import { motion } from "framer-motion";
const NavHeader = ({ state }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [userData, setUserData] = useState("");
  const url = ApiUrl();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const authToken = localStorage.getItem("authToken");

    const userData2 = await axios.get(url + "/services", {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    if (userData2.data.auth) {
      setAuthStatus(true);
    }
    if (userData2.data.userData) {
      setUserData(userData2.data.userData);
    }
  };

  const [navState, setNavState] = useState(false);
  const [hoverState, setHoverState] = useState(true);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("authToken");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-header">
      <div className="nav-bar">
        <motion.div
          initial={{ opacity: 0, x: "-5rem" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ x: "-5rem" }}
          transition={{ duration: 0.9, easings: "anticipate" }}
          className={navState ? "menu menu-active" : "menu"}
          onClick={() => setNavState(!navState)}>
          <span
            className={classNames({
              "menu-green": !state,
              "menu-white": state,
            })}></span>
          <span className={!state ? "menu-green" : "menu-white"}></span>
          <span className={!state ? "menu-green" : "menu-white"}></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: "-20rem" }}
          className={
            navState
              ? "nav-bar-details nav-bar-details-active "
              : "nav-bar-details"
          }>
          <ul className="nav-bar-ul">
            <li className="menu-li-flex">
              <Link to="/" className="nav-links">
                <AiOutlineHome className="menu-li-icon" /> Home
              </Link>
            </li>
            <li className="menu-li-flex">
              <Link to="/about" className="nav-links">
                <BiDetail className="menu-li-icon" /> About
              </Link>
            </li>
            <li className="menu-li-flex">
              <Link to="/contact" className="nav-links">
                <RiContactsBookLine className="menu-li-icon" /> Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-tems-service">
            <span>
              <Link to="/termsofservice" className="nav-links">
                Terms of use
              </Link>
            </span>
            <span>
              <Link to="/privacy" className="nav-links">
                Privacy policy
              </Link>
            </span>
          </div>
        </motion.div>
      </div>
      <div className="brand-logo">
        <Link to="/">
          <img
            src={state ? "../images/logo.png" : "../images/greenlogomain.png"}
            alt="error"
          />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: "15rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: "15rem" }}
        transition={{ duration: 0.9, easings: "anticipate" }}
        className="profile-user">
        {/* <div className="profile-name">
          <p
            className={classNames({
              "profile-white": state,
              "profile-black": !state,
            })}>
            {authStatus
              ? userData.username && userData.username.substring(0, 7)
              : "Hi Guest"}
          </p>
        </div> */}
        <div className="profile-img" onClick={() => setHoverState(!hoverState)}>
          <img
            src={authStatus ? userData.profileUrl : "../images/pp.jpg"}
            alt="err"
          />
        </div>
        <div
          className={hoverState ? "drop-down" : "drop-down drop-down-active"}>
          <ul>
            <li>
              {/* <AiOutlineInfoCircle className="drop-icons" /> */}
              {/* <Link
                to="/faq"
                onClick={() => setHoverState(true)}
                className="nav-links-menu">
                FAQ
              </Link> */}
            </li>
            <li onClick={() => setHoverState(true)}>
              {/* <AiOutlineUser className="drop-icons" />{" "} */}
              <Link to="/account" className="nav-links-menu">
                My Profile
              </Link>
            </li>
            <li onClick={() => setHoverState(true)}>
              {/* <AiOutlineUser className="drop-icons" />{" "} */}
              <Link to="/myorders" className="nav-links-menu">
                My Orders
              </Link>
            </li>
            {authStatus ? (
              <li onClick={handleLogout} className="nav-links-login">
                Logout
              </li>
            ) : (
              <li>
                {/* <BiLogIn className="drop-icons" />{" "} */}
                <Link
                  to="/user/login"
                  onClick={() => setHoverState(!hoverState)}
                  className="nav-links-login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default NavHeader;
