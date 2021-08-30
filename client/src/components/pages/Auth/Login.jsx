/** @format */

import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { createBrowserHistory } from "history";
import { BiHomeAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import { motion } from "framer-motion";
import ApiUrl from "../../../ApiUrl";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const url = ApiUrl();

  const [emailExists, setEmailExists] = useState(null);
  const [LocationState, setLocationState] = useState(null);
  const [userCrendentails, setUserCrendtials] = useState(null);

  useEffect(() => {
    const history = createBrowserHistory();
    if (history.location.state && history.location.state.state) {
      let state = { ...history.location.state };
      delete state.state;

      history.replace({ ...history.location, state });
    }
  }, []);
  useEffect(() => {
    location.state && setLocationState(true);
  }, [location]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const LoginResp = await axios.post(
        url + "/user/login",
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!LoginResp.data.emailExists) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
      if (LoginResp.data.auth) {
        if (LoginResp.data.isAdmin) {
          history.push(
            "/?auth=" + LoginResp.data.authToken + "&isAdmin=" + true
          );
        } else {
          history.push("/?auth=" + LoginResp.data.authToken);
        }
      }
      if (!LoginResp.data.userCrendentials) {
        setUserCrendtials(true);
      } else {
        setUserCrendtials(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="login-navbar">
        {/* <NavHeader state={true} mobileState={true} /> */}
      </div>
      <div className="image-overlay">
        <img src="../images/greenLogo.png" alt="error" className="green-logo" />
      </div>
      <div className="auth-contents">
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
              <h2>Welcome Back!</h2>
              <p>You can Sign in to access your existing account</p>
            </motion.div>
          </motion.div>
          <div className="auth-right">
            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-20px" }}
              transition={{ duration: 1.2 }}
              className="auth-form-details">
              <h2>Sign In</h2>
              {LocationState && (
                <span>
                  {location.state.state} <br />
                </span>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Enter Your Email</label>
                {emailExists && <span>Email doesn't exists</span>}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <label>Password</label>
                <input
                  type="password"
                  name="passowrd"
                  placeholder="Password"
                  required
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "Must be at least 5 charc long",
                    },
                  })}
                />{" "}
                {userCrendentails && (
                  <span style={{ display: "block" }}>Password is wrong</span>
                )}
                {errors.password && <span>{errors.password.message}</span>}
                <div className="step-navigate-btns">
                  <button type="submit" data-tip="Press 2 times">
                    Login
                  </button>
                </div>
              </form>
              <div className="login-link">
                <p>
                  Don't have an account?
                  <Link to="/user/Register" className="nav-links">
                    Register
                  </Link>
                </p>
              </div>
              <div className="social-login-btn">
                <a href={url + "/user/google/main"}>
                  <button className="google-btn">
                    <FcGoogle className="google-icon" /> Login with Google{" "}
                  </button>
                </a>
              </div>
            </motion.div>
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

export default Login;
