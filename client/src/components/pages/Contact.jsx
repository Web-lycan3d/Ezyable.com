/** @format */

import React from "react";
import Footer from "../pages/footer/Footer";
import NavHeader from "../NavComponents/NavHeader";

const Contact = () => {
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
          <NavHeader state={false} />
          <div className="contact-container">
            <div className="contact-contents">
              <div className="contact-header">
                <h2>Contact Us</h2>
                <img src="../images/contact.png" alt="error" />
              </div>

              <div className="contact-details">
                <p>95-91-80-7979</p>
                <p>
                  IKP Eden 16, Bhuvanappa Layout, Tavarekere Main Rd, Bangalore,
                  560078
                </p>
                <p>
                  <strong>support@ezyable.com </strong>
                </p>
              </div>
            </div>
          </div>
          <Footer colorState={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
