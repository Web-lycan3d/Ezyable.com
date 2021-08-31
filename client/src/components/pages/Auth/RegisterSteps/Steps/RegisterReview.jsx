/** @format */

import React, { useState } from "react";
import Accoradation from "./Accoradation";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ApiUrl from "../../../../../ApiUrl";

const RegisterReview = ({ formData, navigation }) => {
  const [optState, setOtpState] = useState(true);
  const [otpValue, setOtpValue] = useState(null);
  const [otpUserValue, setOtpUserValue] = useState("");
  const [otpError, setOtpError] = useState(false);

  const history = useHistory();
  const url = ApiUrl();

  const { username, email, phone_number, address, pincode, city } = formData;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const generateOtp = await axios.post(
        url + "/user/generate/otp",
        formData
      );
      console.log(generateOtp.data.otp);
      setOtpValue(generateOtp.data.otp);
      setOtpState(false);
      setOtpError(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOTP = async (e) => {
    e.preventDefault();

    if (otpValue === otpUserValue) {
      setOtpError(false);
      const dataSubmit = await axios.post(url + "/user/register", formData);

      if (dataSubmit.data.auth) {
        if (dataSubmit.data.isAdmin) {
          history.push(
            "/?auth=" + dataSubmit.data.authToken + "&isAdmin=" + true
          );
        } else {
          history.push("/?auth=" + dataSubmit.data.authToken);
        }
      } else {
        history.push("/user/register");
      }
    } else {
      setOtpError(true);
    }
  };
  return (
    <>
      {optState ? (
        <div className="auth-review-container">
          <div className="accordation">
            <div className="accordion-main">
              <Accoradation
                summary="Details"
                details={[
                  { Username: username },
                  { Email: email },
                  { Phone_number: phone_number },
                ]}
                navigation={navigation}
              />
            </div>
            <Accoradation
              summary="Password"
              details={[{ Password: "Hidden" }]}
              navigation={navigation}
            />

            <Accoradation
              summary="Address"
              details={[
                { Landmark: address },
                { Pincode: pincode },
                { City: city },
              ]}
              navigation={navigation}
            />
          </div>
          <button className="register-review-btn" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="otp-form">
          <h1>OTP sent to </h1>
          <span>{email ? email : ""}</span>
          {otpError && (
            <>
              <span className="otp-error">Not a valid OTP</span>
              <span className="otp-error">
                Submit the form once again to generate a new OTP
                <span onClick={() => setOtpState(true)}>click here</span>
              </span>
            </>
          )}
          <form onSubmit={handleOTP}>
            <input
              type="text"
              placeholder="Enter OTP"
              name="otp"
              onChange={(e) => setOtpUserValue(e.target.value)}
            />
            <button type="submit">Verify</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterReview;
