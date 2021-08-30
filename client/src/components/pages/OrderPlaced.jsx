/** @format */

import React from "react";
import { Link } from "react-router-dom";
import OrdersDone from "../LottieAnimation/OrdersDone";
import NavHeader from "../NavComponents/NavHeader";
import Footer from "./footer/Footer";

const OrderPlaced = () => {
  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="orders-animation">
          <OrdersDone />
        </div>
        <div className="home-padding">
          <div className="image-overlay">
            <img src="../images/imgo.png" alt="error" className="white-logo" />
          </div>
          <NavHeader state={true} />
          <div className="order-placed-box">
            <div className="order-placed-container">
              <h2>
                An <strong>Ezyable executive </strong>will shortly contact you
              </h2>
              <img src="../images/final.svg" alt="error" />
              <p>
                A <strong>payment link</strong> will be sent to your mobile
                number once the service is finished please complete the payment
                and share your experience by rating us and giving us your
                valuable feedback
              </p>
              <button>
                <Link to="/myorders" className="nav-links-account-page">
                  My Orders
                </Link>
              </button>
            </div>
          </div>
          <Footer colorState={false} />
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
