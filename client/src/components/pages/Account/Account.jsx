/** @format */

import React, { useEffect, useState } from "react";
import NavHeader from "../../NavComponents/NavHeader";
import { Link, useHistory } from "react-router-dom";
import { GoSettings } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import Footer from "../footer/Footer";
import axios from "axios";
import ApiUrl from "../../../ApiUrl";

const Account = () => {
  const history = useHistory();
  const [userData, setUserData] = useState("");
  const [loaderState, setLoaderState] = useState(true);
  const url = ApiUrl();
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    const authToken = localStorage.getItem("authToken");

    try {
      const details = await axios.get(url + "/services", {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      if (details.data.auth === false) {
        history.push("/user/login");
      }

      if (details.data) {
        setLoaderState(false);
        setUserData(details.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loaderState ? (
        <div className="cssload-spin-box"></div>
      ) : (
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
              <NavHeader />{" "}
              <div className="mobile-profile">
                <div className="mobile-profile-img">
                  <img src={userData.profileUrl} alt="error" />
                </div>
                <div className="mobile-profile-details">
                  <h3>{userData.username}</h3>
                  <p>{userData.email}</p>
                </div>
              </div>
              <div className="account-container">
                <div className="account-contents">
                  <div className="account-details-box">
                    <div className="account-details">
                      <p className="account-header">
                        <GoSettings className="account-icon" /> Account Settings
                      </p>
                      <div className="account-details-contents">
                        {/* <div className="account-1">
                          <span>Name</span>
                          <p>{userData.username}</p>
                        </div> */}
                        <div className="account-1">
                          <span>Email</span>
                          <p>{userData.email}</p>
                        </div>
                        <div className="account-1">
                          <span>Phone No</span>
                          <p>{userData.PhoneNo}</p>
                        </div>
                        <div className="account-1">
                          <span>Address</span>
                          <p>{userData.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="account-btn">
                      <button>
                        <Link
                          className="nav-links-account-page"
                          to={"/profile/" + userData.userId}>
                          Update
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="account-details-box">
                    <div className="account-details">
                      <div className="feedback-header">
                        <VscFeedback className="account-icon" /> Help and
                        Support
                      </div>
                      <div className="feeback-details-content">
                        {/* <div className="fb">
                          <p>
                            <Link to="/faq" className="nav-links">
                              FAQs
                            </Link>
                          </p>
                        </div> */}
                        <div className="fb">
                          <p>
                            <Link to="/contact" className="nav-links">
                              Contact US
                            </Link>
                          </p>
                        </div>
                        <div className="fb">
                          <p>
                            {" "}
                            <Link
                              to={"/privacy/?state=" + true}
                              className="nav-links">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer colorState={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
