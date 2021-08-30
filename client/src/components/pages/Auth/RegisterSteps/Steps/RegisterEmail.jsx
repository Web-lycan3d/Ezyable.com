/** @format */

import React, { useState } from "react";
import validator from "validator";

import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Tooltip from "@material-ui/core/Tooltip";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import ApiUrl from "../../../../../ApiUrl";
const RegisterEmail = ({ formData, navigation, setForm }) => {
  const { username, email } = formData;
  var { phone_number } = formData;
  const url = ApiUrl();
  const [errorState, setErrorState] = useState(false);
  const [movbileError, setMobileError] = useState(false);
  const [userExists, setUserExists] = useState(null);
  const [emailExists, setEmailExists] = useState(null);

  // console.log(val.match(/^\d{10}$/));
  // console.log(validator.isMobilePhone(phone_number, ["en-IN"]));

  async function handleEmailSubmit(e) {
    e.preventDefault();

    try {
      const checkUser = await axios.get(
        url + "/user/checkUser?user=" + username + "&email=" + email
      );

      if (checkUser.data.userExists) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
      if (checkUser.data.emailExists) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
      const res = await checkPhone();

      if (!res) {
        if (userExists === false && emailExists === false) navigation.next();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const checkPhone = () => {
    const exp = new RegExp("[+9][1][1-9][0-9]{9}");
    if (!exp.test(phone_number)) {
      setMobileError(true);
      return true;
    } else {
      setMobileError(false);
      return false;
    }
  };
  const checkEmail = () => {
    if (!validator.isEmail(email)) {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: "20px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-20px" }}
      transition={{ duration: 1.2 }}
      className="auth-form-details">
      <h2>Sign Up</h2>
      <form onSubmit={handleEmailSubmit}>
        <label>Username</label>
        {userExists && <span>Username already exists</span>}

        <input
          type="text"
          name="username"
          placeholder="Name"
          value={username}
          onChange={setForm}
          autoComplete="name"
          pattern=".{3,}"
          required
          title="3 characters minimum"
        />

        <label>Enter your email</label>
        {emailExists && <span>Email already exists try diffrent email</span>}

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onBlur={checkEmail}
          onChange={setForm}
          required
        />

        {errorState && <span>Not Valid</span>}
        <label>Mobile No.</label>

        <input
          type="number"
          name="phone_number"
          placeholder="Mobile No."
          value={phone_number}
          onBlur={checkPhone}
          onChange={setForm}
          required
        />

        {movbileError && <span>Not valid include +91</span>}
        <div className="step-navigate-btns">
          <Tooltip title="Press 2 times" placement="right">
            <button type="submit" data-tip="Press 2 times">
              Next
            </button>
          </Tooltip>
        </div>
      </form>
      <div className="login-link">
        <p>
          Already have an Account?
          <Link to="/user/login" className="nav-links">
            Login
          </Link>
        </p>
      </div>{" "}
      <div className="social-login-btn">
        <a href={url + "/user/google/main"}>
          <button className="google-btn">
            <FcGoogle className="google-icon" /> Register with Google
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default RegisterEmail;
