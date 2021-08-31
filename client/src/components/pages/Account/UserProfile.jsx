/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import NavHeader from "../../NavComponents/NavHeader";
import Footer from "../footer/Footer";
import Lotties from "../../LottieAnimation/Lotties";
import { IoIosArrowDropleftCircle, IoIosArrowDropleft } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

import Tooltip from "@material-ui/core/Tooltip";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import ApiUrl from "../../../ApiUrl";
const UserProfile = () => {
  const url = ApiUrl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const location = useLocation();
  const [userData, setUserData] = useState("");
  const [nameState, setNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [phoneState, setPhoneState] = useState(false);
  const [PinState, setPinState] = useState(false);
  const [cityState, setCityState] = useState(false);
  const [AddressState, setAddresseState] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [locationData, setLocationData] = useState();

  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  }, [
    id,
    nameState,
    emailState,
    phoneState,
    PinState,
    AddressState,
    cityState,
  ]);

  const fetchUser = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const userData = await axios.get(url + "/services", {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      if (userData.data) {
        setUserData(userData.data.userData);
      }
      if (!userData.data.auth) {
        history.push("/user/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (location.state) {
      let price = location.state;
      setLocationData(price);
    }
  }, [location]);

  const onSubmit = async (data) => {
    if (nameState) {
      data.username = data.newname;
    } else {
      data.username = userData.username;
    }
    if (emailState) {
      data.email = data.newemail;
    } else {
      data.email = userData.email;
    }
    if (phoneState) {
      data.phone_number = data.new_phone_number;
    } else {
      if (userData.PhoneNo) {
        data.phone_number = userData.PhoneNo;
      }
    }
    if (PinState) {
      data.pincode = data.newpincode;
    } else {
      if (userData.Pincode) {
        data.pincode = userData.Pincode;
      }
    }
    if (cityState) {
      data.city = data.newcity;
    } else {
      if (userData.city) {
        data.city = userData.city;
      }
    }
    if (AddressState) {
      data.address = data.newaddress;
    } else {
      if (userData.address) {
        data.address = userData.address;
      }
    }

    try {
      const updateUser = await axios.post(url + "/update?user=" + id, data, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (updateUser.data.updateStatus) {
        setAlertState(true);
        setTimeout(() => {
          setAlertState(false);
          if (locationData) {
            history.push(
              `/services/${locationData.name}?keyword=${locationData.keywords}&price=${locationData.price}`
            );
          } else {
            history.push("/account");
          }
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-padding">
          <div className="image-overlay">
            <img src="../images/imgo.png" alt="error" className="white-logo" />
          </div>
          <NavHeader state={true} />

          <motion.div
            initial={{ opacity: 1, y: "-100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "+100%" }}
            transition={{ duration: 1, easings: "anticipate" }}
            className="profile-box">
            {alertState && (
              <>
                <Lotties />
              </>
            )}
            <div
              className={
                alertState
                  ? "profile-contents profile-active"
                  : "profile-contents"
              }>
              <div className="userprofile-img">
                <div className="main-img">
                  <img
                    src={
                      userData
                        ? userData.profileUrl
                        : "https://www.w3schools.com/howto/img_avatar.png"
                    }
                    alt="error"
                  />
                </div>
                {/* <div className="image-update">
                  <span>Update Image</span>
                </div> */}
              </div>
              <div className="user-details">
                <div className="userdetails-form">
                  <form onSubmit={handleSubmit(onSubmit)} className="userform">
                    <div className="form-left">
                      {!nameState && (
                        <div className="input-details">
                          <div className="input-header">
                            <label>Username</label>
                            <Tooltip title="edit" placement="top">
                              <span>
                                <FiEdit
                                  className="profile-edit-icon"
                                  onClick={() => {
                                    setNameState(true);
                                  }}
                                />
                              </span>
                            </Tooltip>
                          </div>

                          <input
                            type="text"
                            value={userData && userData.username}
                            readOnly
                            {...register("username")}
                          />
                        </div>
                      )}
                      {nameState && (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>Username</label>
                              <IoIosArrowDropleft
                                className="profile-edit-icon"
                                onClick={() => setNameState(false)}
                              />
                            </div>

                            <input
                              type="text"
                              placeholder="Name"
                              required
                              {...register("newname", {
                                required: true,
                                minLength: {
                                  value: 3,
                                  message: "must contain atleast 3 charcters",
                                },
                              })}
                            />
                          </div>
                          {errors.newname && (
                            <span className="user-profile-error">
                              {errors.newname.message}
                            </span>
                          )}
                        </>
                      )}
                      {!emailState && (
                        <div className="input-details">
                          <div className="input-header">
                            <label>Email</label>
                            <FiEdit
                              className="profile-edit-icon"
                              onClick={() => setEmailState(true)}
                            />
                          </div>

                          <input
                            type="text"
                            name="email"
                            value={userData && userData.email}
                            readOnly
                            {...register("email")}
                          />
                        </div>
                      )}
                      {emailState && (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>Email</label>
                              <IoIosArrowDropleft
                                className="profile-edit-icon"
                                onClick={() => setEmailState(false)}
                              />
                            </div>

                            <input
                              type="email"
                              placeholder="New Email Address"
                              required
                              {...register("newemail", {
                                required: true,
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "invalid Email Address",
                                },
                              })}
                            />
                          </div>
                          {errors.newemail && (
                            <span className="user-profile-error">
                              {errors.newemail.message}
                            </span>
                          )}
                        </>
                      )}
                      {userData.PhoneNo ? (
                        <>
                          {!phoneState && (
                            <div className="input-details">
                              <div className="input-header">
                                <label>Phone Number</label>
                                <FiEdit
                                  className="profile-edit-icon"
                                  onClick={() => setPhoneState(true)}
                                />
                              </div>

                              <input
                                type="text"
                                name="phone_number"
                                value={userData && userData.PhoneNo}
                                readOnly
                                {...register("phone_number")}
                              />
                            </div>
                          )}
                          {phoneState && (
                            <>
                              <div className="input-details">
                                <div className="input-header">
                                  <label>Phone Number</label>
                                  <IoIosArrowDropleft
                                    className="profile-edit-icon"
                                    onClick={() => setPhoneState(false)}
                                  />
                                </div>

                                <input
                                  type="number"
                                  placeholder="Phone Number"
                                  required
                                  {...register("new_phone_number", {
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
                              </div>

                              {errors.new_phone_number && (
                                <span className="user-profile-error">
                                  {errors.new_phone_number.message}
                                </span>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>Phone Number</label>
                            </div>

                            <input
                              type="number"
                              placeholder="Phone Number"
                              required
                              {...register("phone_number", {
                                pattern: {
                                  value: /[+91][1-9][0-9]{9}/g,
                                  message: "must include +91",
                                },
                                maxLength: {
                                  value: 12,
                                  message: "Not Valid",
                                },
                              })}
                            />
                          </div>
                          {errors.phone_number && (
                            <span className="user-profile-error">
                              {errors.phone_number.message}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <div className="form-right">
                      {userData.Pincode ? (
                        <>
                          {!PinState && (
                            <div className="input-details">
                              <div className="input-header">
                                <label>Pincode</label>
                                <FiEdit
                                  className="profile-edit-icon"
                                  onClick={() => setPinState(true)}
                                />
                              </div>

                              <input
                                type="text"
                                name="pincode"
                                value={userData && userData.Pincode}
                                readOnly
                                {...register("Pincode")}
                              />
                            </div>
                          )}
                          {PinState && (
                            <>
                              <div className="input-details">
                                <div className="input-header">
                                  <label>Pincode</label>
                                  <IoIosArrowDropleft
                                    className="profile-edit-icon"
                                    onClick={() => setPinState(false)}
                                  />
                                </div>

                                <input
                                  type="number"
                                  placeholder="Pincode"
                                  required
                                  {...register("newpincode", {
                                    required: true,
                                    pattern: {
                                      value: /^\d{4}$|^\d{6}$/,
                                      message: "Invalid Pincode",
                                    },
                                  })}
                                />
                              </div>

                              {errors.newpincode && (
                                <span className="user-profile-error">
                                  {errors.newpincode.message}
                                </span>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>Pincode</label>
                            </div>

                            <input
                              type="number"
                              placeholder="Pincode"
                              required
                              {...register("pincode", {
                                required: true,
                                pattern: {
                                  value: /^\d{4}$|^\d{6}$/,
                                  message: "Invalid Pincode",
                                },
                              })}
                            />
                          </div>
                          {errors.pincode && (
                            <span className="user-profile-error">
                              {errors.pincode.message}
                            </span>
                          )}
                        </>
                      )}
                      {userData.city ? (
                        <>
                          {!cityState && (
                            <div className="input-details">
                              <div className="input-header">
                                <label>City</label>
                                <FiEdit
                                  className="profile-edit-icon"
                                  onClick={() => setCityState(true)}
                                />
                              </div>

                              <input
                                type="text"
                                name="City"
                                value={userData.city}
                                readOnly
                                {...register("city")}
                              />
                            </div>
                          )}
                          {cityState && (
                            <>
                              <div className="input-details">
                                <div className="input-header">
                                  <label>City</label>
                                  <IoIosArrowDropleft
                                    className="profile-edit-icon"
                                    onClick={() => setCityState(false)}
                                  />
                                </div>

                                <input
                                  type="text"
                                  placeholder="City"
                                  required
                                  {...register("newcity")}
                                />
                              </div>

                              {errors.newcity && (
                                <span className="user-profile-error">
                                  {errors.newcity.message}
                                </span>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>City</label>
                            </div>

                            <input
                              type="text"
                              placeholder="City"
                              required
                              {...register("city")}
                            />
                          </div>
                          {errors.city && (
                            <span className="user-profile-error">
                              {errors.city.message}
                            </span>
                          )}
                        </>
                      )}
                      {userData.address ? (
                        <>
                          {!AddressState && (
                            <div className="input-details">
                              <div className="input-header">
                                <label>Address</label>
                                <FiEdit
                                  className="profile-edit-icon"
                                  onClick={() => setAddresseState(true)}
                                />
                              </div>

                              <textarea
                                cols="30"
                                rows="3"
                                placeholder="address"
                                required
                                value={userData && userData.address}
                                {...register("address")}></textarea>
                            </div>
                          )}
                          {AddressState && (
                            <>
                              <div className="input-details">
                                <div className="input-header">
                                  <label>Address</label>
                                  <IoIosArrowDropleft
                                    className="profile-edit-icon"
                                    onClick={() => setAddresseState(false)}
                                  />
                                </div>

                                <textarea
                                  cols="30"
                                  rows="3"
                                  placeholder="address"
                                  required
                                  {...register("newaddress", {
                                    required: true,
                                    minLength: {
                                      value: 15,
                                      message:
                                        "Must contain at least 15 characters",
                                    },
                                    maxLength: {
                                      value: 200,
                                      message:
                                        "Must contain only 200 charcters",
                                    },
                                  })}></textarea>
                              </div>

                              {errors.newaddress && (
                                <span className="user-profile-error">
                                  {errors.newaddress.message}
                                </span>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="input-details">
                            <div className="input-header">
                              <label>Address</label>
                            </div>

                            <textarea
                              cols="30"
                              rows="3"
                              placeholder="Address"
                              required
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
                              })}></textarea>
                          </div>
                          {errors.address && (
                            <span className="user-profile-error">
                              {errors.address.message}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <div className="profile-btn">
                      <button>Submit</button>
                    </div>
                  </form>
                  <div className="profile-back-btn">
                    <span>
                      <Tooltip title="Back" placement="top">
                        <Link
                          to={
                            locationData
                              ? `/services/${locationData.name}?keyword=${locationData.keywords}&price=${locationData.price}`
                              : "/account"
                          }
                          className="nav-links">
                          <IoIosArrowDropleftCircle className="profile-back-icon" />
                        </Link>
                      </Tooltip>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <Footer colorState={false} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
