/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { useHistory } from "react-router-dom";
import NavHeader from "../../NavComponents/NavHeader";
import Footer from "../footer/Footer";
import OrderAcordation from "./OrderAcordation";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import empty from "./16656-empty-state.json";
import ApiUrl from "../../../ApiUrl";

const MyOrders = () => {
  const history = useHistory();
  const url = ApiUrl();
  const [userData, setUserData] = useState("");
  const [loaderState, setLoaderState] = useState(true);
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
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
                  src="../images/imgo.png"
                  alt="error"
                  className="white-logo"
                />
              </div>
              <NavHeader />

              <div className="order-container">
                <h2 className="order-h2">
                  {userData && userData.orders.length === 0 ? "" : "My Orders"}
                </h2>
                <div className="order-contents">
                  <Accordion allowZeroExpanded className="order-contents-2">
                    {userData && userData.orders.length === 0 ? (
                      <div className="no-orders">
                        <Lottie
                          options={defaultOptions}
                          height={120}
                          width={220}
                        />
                        <p>No orders available</p>
                        <button>
                          <Link to="/" className="nav-links">
                            Order Now
                          </Link>
                        </button>
                      </div>
                    ) : (
                      userData &&
                      userData.orders.map((order, index) => (
                        <OrderAcordation
                          order={order}
                          key={index}
                          value={index + 1}
                        />
                      ))
                    )}
                  </Accordion>
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

export default MyOrders;
