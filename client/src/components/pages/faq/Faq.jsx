/** @format */

import React from "react";

import NavHeader from "../../NavComponents/NavHeader";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoPricetagOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className="home-container white-bg-main">
      <div className="home-contents">
        <div className="home-padding">
          <div className="image-overlay">
            <img
              src="../images/greenLogo.png"
              alt="error"
              className="green-logo"
            />
          </div>
          <NavHeader />
          <div className="faq-container">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}>
              Hi! How can we help you?
            </motion.h2>

            <div className="faq-contents">
              <Link to="/faq/payment" className="nav-links">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="faq-box">
                  <VscAccount className="faq-icon" />
                  <p>Managing your account</p>
                </motion.div>
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="faq-box">
                <img src="../images/b.png" className="faq-icon" alt="error" />
                <p>Payments</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="faq-box">
                <img src="../images/s.png" className="faq-icon" alt="error" />

                <p>Service</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="faq-box">
                <IoPricetagOutline className="faq-icon" />
                <p>Pricing</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="faq-box">
                <BiCheck className="faq-icon" />
                <p>Guranties and assurance</p>
              </motion.div>
            </div>
          </div>
          <Footer colorState={true} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
