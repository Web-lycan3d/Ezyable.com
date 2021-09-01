/** @format */

import React, { useEffect } from "react";
import Footer from "../pages/footer/Footer";
import NavHeader from "../NavComponents/NavHeader";

import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    scroll.scrollTo(0, 0);
  }, []);
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
          <div className="about-container">
            <div className="about-contents">
              <motion.div
                initial={{ opacity: 0, y: "40px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "40px" }}
                transition={{ delay: 1, duration: 1 }}
                className="about-mobile-text">
                <h2>
                  {" "}
                  Isn't it practically impossible to find trustworthy providers, who can consistently deliver impeccable service on time for small but important everyday needs?
                  <br/>
                  We are a Bangalore based startup aiming to seamlessly connect the dots and flourish a network of skilled professionals for users across India seeking specific services.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-60px" }}
                animate={{ opacity: 1, x: "0px" }}
                exit={{ opacity: 0, x: "-60px" }}
                transition={{ duration: 1, easings: "easeIn" }}
                className="about-comp-img">
                <div className="about-grid-1">
                  <img
                    src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="error"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "40px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "40px" }}
                transition={{ delay: 1, duration: 1 }}
                className="about-text">
                <h2>
                  {" "}
                  Isn't it practically impossible to find trustworthy providers, who can consistently deliver impeccable service on time for small but important everyday needs?
                  <br />
                  We are a Bangalore based startup aiming to seamlessly connect the dots and flourish a network of skilled professionals for users across India seeking specific services.
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: "40px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  exit={{ opacity: 0, y: "40px" }}
                  transition={{ delay: 1.5, duration: 1 }}>
                  Our team believes every issue needs an easy solution, so here we are with Ezyable - to make your lives easier with every service accessible in no time.
                </motion.p>
              </motion.div>
            </div>
          </div>

          <Footer colorState={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
