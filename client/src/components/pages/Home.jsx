/** @format */

import React, { useEffect, useState } from "react";

import Select from "react-select";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import NavHeader from "../NavComponents/NavHeader";
import { animateScroll as scroll } from "react-scroll";
import queryString from "query-string";
import { motion } from "framer-motion";
import {
  CookingOptions,
  MaidOptions,
  CleaninOptons,
  washingOptions,
  laundaryOptions,
  TuitionOptions,
  ElectricianOptions,
  GroomingOptions,
  GymtrainerOptions,
  PlumberOptions,
  YogaOptions,
  DoctorOptions,
  PetServiceOptions,
  PanditOptions,
  PersonalAssistantOptions,
  LawyerOptions,
  DriverOptions,
} from "../services";

const groupedOptions = [
  {
    label: "Cooking",
    options: CookingOptions,
  },
  {
    label: "Maid",
    options: MaidOptions,
  },
  {
    label: "Cleaning",
    options: CleaninOptons,
  },
  {
    label: "Washing",
    options: washingOptions,
  },
  {
    label: "Laundry",
    options: laundaryOptions,
  },
  {
    label: "Tuition",
    options: TuitionOptions,
  },
  {
    label: "Electrician ",
    options: ElectricianOptions,
  },
  {
    label: "Grooming",
    options: GroomingOptions,
  },
  {
    label: "Gym trainer",
    options: GymtrainerOptions,
  },
  {
    label: "Plumber",
    options: PlumberOptions,
  },
  {
    label: "Yoga",
    options: YogaOptions,
  },
  {
    label: "Doctor",
    options: DoctorOptions,
  },
  {
    label: "Pet Service",
    options: PetServiceOptions,
  },
  {
    label: "Pandit",
    options: PanditOptions,
  },
  {
    label: "Personal Assistant",
    options: PersonalAssistantOptions,
  },
  {
    label: "Lawyer",
    options: LawyerOptions,
  },
  {
    label: "Driver",
    options: DriverOptions,
  },
];

const Home = () => {
  const history = useHistory();
  const location = useLocation();

  const [userChoice, setUserChoice] = useState();

  useEffect(() => {
    scroll.scrollTo(0, 0);
    const authToken = queryString.parse(location.search);

    if (authToken.auth) {
      localStorage.setItem("authToken", authToken.auth);

      setTimeout(() => {
        window.location.href = authToken.isAdmin ? "/admin_dashboard" : "/";

        history.push("/");
      }, 1000);
    }
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userChoice)
      history.push(
        "/services/" +
          userChoice.value.toLowerCase().trim() +
          "?keyword=" +
          userChoice.label.toLowerCase().trim()
      );
  };

  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-padding">
          <div className="langing-city">
            <img src="../images/mash.png" alt="err" />
          </div>
          <div className="image-overlay">
            <img src="../images/imgo.png" alt="error" className="white-logo" />
          </div>
          <NavHeader state={true} />
          <motion.div
            initial={{ opacity: 0, y: "+100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-100vh" }}
            transition={{ duration: 1.5, easings: "easeIn" }}
            className="home-main">
            <div className="home-search-box">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.5, easings: "easeIn" }}
                className="home-search-text">
                <h1>
                  <strong> Tell us what you need.</strong>
                </h1>
                <h6>
                  Quality service provided to you
                  <br /> within no time
                </h6>
              </motion.div>
              <form onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, easings: "easeIn" }}
                  className="home-search">
                  <div className="home-input">
                    <Select
                      placeholder="we'll get it done"
                      options={groupedOptions}
                      className="input"
                      isSearchable
                      isClearable
                      value={userChoice}
                      onChange={setUserChoice}
                    />
                  </div>
                  <button className="btn" type="submit"></button>
                </motion.div>
              </form>
            </div>

            <motion.div className="home-body">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="content-1">
                <img src="../images/c1.png" alt="error" />
                <div className="content-text">
                  <p className="pText">
                    Type in the service you need along with your details.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.3 }}
                className="content-2">
                <img src="../images/c2.png" alt="error" />
                <div className="content-text">
                  <p className="pText">
                    An Ezyable executive will contact you shortly to confirm
                    your service requirement.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.4 }}
                className="content-3">
                <img src="../images/c3.png" alt="error" />
                <div className="content-text">
                  <p className="pText">
                    Our Ezyable service will reach your location in no time.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.5 }}
                className="content-4">
                <img src="../images/c4.png" alt="error" />
                <div className="content-text">
                  <p className="pText">
                    Sit back and relax while Ezyable does a 5-star job.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <Footer state={false} />
        </div>
      </div>
    </div>
  );
};

export default Home;
