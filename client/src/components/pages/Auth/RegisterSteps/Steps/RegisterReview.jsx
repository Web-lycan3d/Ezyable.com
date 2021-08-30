/** @format */

import React from "react";
import Accoradation from "./Accoradation";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ApiUrl from "../../../../../ApiUrl";

const RegisterReview = ({ formData, navigation }) => {
  const history = useHistory();
  const url = ApiUrl();

  const { username, email, phone_number, address, pincode, city } = formData;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
  );
};

export default RegisterReview;
