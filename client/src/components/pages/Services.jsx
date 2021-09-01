/** @format */

import React, { useEffect, useState } from "react";

import { useParams, Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IoIosArrowDropup } from "react-icons/io";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";

import Footer from "./footer/Footer";
import NavHeader from "../NavComponents/NavHeader";
import queryString from "query-string";
import SweetAlert from "react-bootstrap-sweetalert";

import { motion } from "framer-motion";
import ApiUrl from "../../ApiUrl";

const Services = () => {
  const ids = useParams();
  const history = useHistory();
  const location = useLocation();
  const url = ApiUrl();

  const [otpState, setOtpState] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [BtnLoader, setBtnLoader] = useState(false);

  const [addressLen, setaddressLen] = useState("");
  const [referenceId, setrefrenceId] = useState("");
  const [alertState, setAlertState] = useState(false);
  const [userData2, setUserData2] = useState("");
  const [loaderState, setLoaderState] = useState(true);
  const [servicePrice, setServicePrice] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [callState, setCallState] = useState(false);
  const [mobileScrollState, setMobileScrollState] = useState(false);

  const [userData, setUserData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const keywords = queryString.parse(location.search).keyword;

  useEffect(() => {
    authStatus();
    const price = queryString.parse(location.search).price;
    setServicePrice(price);
    setServiceName(ids.id);
  }, []);
  useEffect(() => {
    mobileScrollState &&
      setTimeout(() => {
        setMobileScrollState(false);
      }, 3000);
  }, [mobileScrollState]);
  const authStatus = async () => {
    const authToken = localStorage.getItem("authToken");

    try {
      const authSt = await axios.get(url + "/services", {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      if (!authSt.data.auth) {
        history.push("/user/login", {
          state: "Login first",
        });
      }

      if (authSt.data.userData) {
        setLoaderState(false);
        setUserData(authSt.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    const userId = userData && userData.userId;
    data.userId = userId;

    data.service = serviceName;

    setUserData2(data);
    setBtnLoader(true);
    setOtpState(false);
    setCallState(false);

    setTimeout(() => {
      setBtnLoader(false);
      setOtpState(true);
      setMobileScrollState(true);
    }, 2000);

    try {
      const serviceResp = await axios.post(url + "/services", data, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (serviceResp.data) {
        setrefrenceId(serviceResp.data.referenceId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCall = async (e) => {
    e.preventDefault();
    setCallState(true);
    const data = {
      type: e.target.sms.value,
      phone_number: e.target.phone_number.value,
    };

    // const data ={};
    try {
      const serviceResp = await axios.post(url + "/verify/call", data, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (serviceResp.data) {
        setrefrenceId(serviceResp.data.referenceId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  async function handleOTP(e) {
    e.preventDefault();
    let otpData = {
      otpValue,
      messageToken: referenceId,
    };

    try {
      const verifyOTP = await axios.post(url + "/verify", otpData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (verifyOTP.data.verification) {
        const serviceResp = await axios.post(
          url + "/services/update",
          userData2,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        history.push("/final");
      } else {
        setAlertState(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="home-container">
        <div className="home-contents">
          <div className="home-padding">
            <div className="image-overlay">
              <img
                src="../images/imgo.png"
                alt="error"
                className="white-logo"
              />
            </div>
            <NavHeader state={true} />
            {alertState && (
              <div className="alert-box">
                <SweetAlert
                  danger
                  title="Oops! OTP not verfied"
                  confirmBtnStyle={{
                    padding: "0.3rem 0.8rem",
                    textDecoration: "none",
                    color: "black",
                  }}
                  onConfirm={() => setAlertState(false)}>
                  Submit Once Again
                </SweetAlert>
              </div>
            )}

            {loaderState ? (
              <div className="cssload-spin-box"></div>
            ) : (
              <motion.div
                initial={{ opacity: 1, y: "+100%" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 1, easings: "anticipate" }}
                className="service-item">
                <div className="service-box">
                  <div className="service-header">
                    <h2>
                      {ids.id[0].toUpperCase() + ids.id.slice(1)}
                      {userData && (
                        <span>
                          <Link
                            to={"/?user=" + userData.userId}
                            className="change-text">
                            Change
                          </Link>
                        </span>
                      )}
                    </h2>
                    <div className="edit-state">
                      <span className="price-visibility">
                        Rs {servicePrice}
                      </span>
                      <Tooltip title="Update Fields">
                        <Link
                          to={{
                            pathname: userData && "/profile/" + userData.userId,
                            state: {
                              price: servicePrice,
                              keywords: keywords,
                              name: ids.id,
                            },
                          }}
                          className="nav-links-service">
                          <span className="update-service">Update Fields?</span>
                          <IoIosArrowDropup className="addnew-icon" />
                        </Link>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="service-form">
                    {userData && (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="service-details">
                          <label>Name</label>
                          <input
                            type="text"
                            placeholder="Name"
                            value={userData.username}
                            readOnly
                            {...register("username")}
                          />

                          <label>Phone No.</label>
                          {userData.PhoneNo ? (
                            <input
                              type="number"
                              placeholder="Phone number"
                              value={userData.PhoneNo}
                              readOnly
                              {...register("phone_number")}
                            />
                          ) : (
                            <>
                              <input
                                type="number"
                                placeholder="Phone number"
                                required
                                autoComplete
                                {...register("phone_number", {
                                  required: true,
                                  pattern: {
                                    value: /[+91][1-9][0-9]{9}/g,
                                    message: "must include +91",
                                  },
                                  maxLength: {
                                    value: 12,
                                    message: "Not valid",
                                  },
                                })}
                              />
                              {errors.phone_number && (
                                <span className="service-errors">
                                  {errors.phone_number.message}
                                </span>
                              )}
                            </>
                          )}
                          <label>Email ID</label>
                          <input
                            type="email"
                            placeholder="Email Id"
                            value={userData.email}
                            readOnly
                            {...register("email")}
                          />
                        </div>
                        <div className="service-details-2">
                          <label>Pin Code</label>
                          {userData.Pincode ? (
                            <input
                              type="number"
                              placeholder="pincode"
                              value={userData.Pincode}
                              readOnly
                              {...register("pincode")}
                            />
                          ) : (
                            <>
                              <input
                                type="number"
                                placeholder="pincode"
                                required
                                {...register("pincode", {
                                  required: true,
                                  pattern: {
                                    value: /^\d{4}$|^\d{6}$/,
                                    message: "Invalid Pincode",
                                  },
                                })}
                              />
                              {errors.pincode && (
                                <span className="service-errors">
                                  {errors.pincode.message}
                                </span>
                              )}
                            </>
                          )}
                          <label>City</label>
                          {userData.city ? (
                            <input
                              type="text"
                              placeholder="City"
                              value={userData.city}
                              readOnly
                              {...register("city")}
                            />
                          ) : (
                            <>
                              <input
                                type="text"
                                placeholder="City"
                                required
                                {...register("city")}
                              />
                              {errors.city && (
                                <span className="service-errors">
                                  {errors.city.message}
                                </span>
                              )}
                            </>
                          )}
                          <label>Address </label>
                          {userData.address ? (
                            <>
                              <textarea
                                cols="30"
                                rows="3"
                                placeholder="Address"
                                required
                                value={userData.address}
                                {...register("address", {
                                  required: true,
                                  minLength: {
                                    value: 15,
                                    message:
                                      "must contain at least 15 characters",
                                  },
                                  maxLength: {
                                    value: 200,
                                    message: "must contain only 200 charcters",
                                  },
                                })}
                                onChange={(e) =>
                                  setaddressLen(e.target.value)
                                }></textarea>
                              <p className="service-p-tag">
                                {userData.address.length}/200
                              </p>{" "}
                              {errors.address && (
                                <span className="service-errors">
                                  {errors.address.message}
                                </span>
                              )}
                            </>
                          ) : (
                            <>
                              <textarea
                                cols="30"
                                rows="3"
                                placeholder="address"
                                {...register("address", {
                                  required: true,
                                  minLength: {
                                    value: 15,
                                    message:
                                      "Must contain at least 15 characters",
                                  },
                                  maxLength: {
                                    value: 200,
                                    message: "Must contain only 200 charcters",
                                  },
                                })}
                                onChange={(e) =>
                                  setaddressLen(e.target.value)
                                }></textarea>
                              <p className="service-p-tag">
                                {addressLen.length}/200
                              </p>
                              {errors.address && (
                                <span className="service-errors">
                                  {errors.address.message}
                                </span>
                              )}
                            </>
                          )}

                          {/* <div className="service-details-3">
                        <p>
                          <strong> On Submit</strong> An OTP will be sent to
                          your Register Mobile Number
                        </p>
                      </div> */}
                          {mobileScrollState && (
                            <motion.div
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 0 }}
                              transition={{ duration: 2, delay: 1 }}
                              className="mobile-scroll">
                              Scroll Down
                            </motion.div>
                          )}
                          {!BtnLoader ? (
                            <button type="submit" className="btn-service">
                              Submit
                            </button>
                          ) : (
                            <p className="btn-loading"></p>
                          )}
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {otpState && (
                  <div className="verfiy-otp">
                    <h2>
                      OTP Sent to{" "}
                      {userData?.PhoneNo
                        ? userData.PhoneNo
                        : userData2?.phone_number}
                    </h2>
                    <div className="otp-details">
                      <input
                        type="hidden"
                        name="refrenceId"
                        value={referenceId}
                      />
                      <form onSubmit={handleOTP}>
                        <input type="hidden" value="sms" name="sms" />
                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter otp"
                          pattern=".{3,}"
                          required
                          title="3 characters minimum"
                          onChange={(e) => setOtpValue(e.target.value)}
                        />
                        <button type="submit">Verify</button>
                      </form>
                      <div className="no-otp">
                        <form onSubmit={handleCall}>
                          <input type="hidden" value="call" name="sms" />
                          <input
                            type="hidden"
                            name="phone_number"
                            value={userData2.phone_number}
                          />
                          {callState ? (
                            <button>Initiaited</button>
                          ) : (
                            <button type="submit">Didn't recieve OTP?</button>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
            <Footer colorState={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
