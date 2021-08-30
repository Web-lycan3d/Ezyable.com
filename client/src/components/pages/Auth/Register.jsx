/** @format */

import React, { useState } from "react";

import Stepper from "./RegisterSteps/Stepper";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [progressBar, setProgressBar] = useState();

  const handleWidth = (p) => {
    setProgressBar(p);
  };

  return (
    <div className="auth-container">
      <div className="image-overlay">
        <img src="../images/greenLogo.png" alt="error" className="green-logo" />
      </div>
      <div className="auth-contents">
        <div
          className="progress-bar"
          style={{ width: progressBar + "%" }}></div>
        <div className="auth-box">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, easings: "easeInOut" }}
            className="auth-left">
            <motion.div
              initial={{ opacity: 0, y: "30px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-10px" }}
              transition={{ duration: 1.2, easings: "easeInOut" }}
              className="auth-left-img">
              <h2 className="register-h2">Hello There!</h2>
              <p>
                First step to an amazing Ezyable experience is getting to know
                each other
              </p>
            </motion.div>
          </motion.div>
          <div className="auth-right">
            <Stepper wid={handleWidth} />
          </div>
          <div className="home-page-btn">
            <p>
              <Link to="/" className="nav-links">
                <BiHomeAlt className="home-icon" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
