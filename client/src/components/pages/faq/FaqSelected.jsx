/** @format */

import React from "react";
import { VscAccount } from "react-icons/vsc";
import NavHeader from "../../NavComponents/NavHeader";
import Footer from "../footer/Footer";

const FaqSelected = () => {
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
          <NavHeader />
          <div className="faq-selected-container-1">
            <div className="faq-selected-container">
              <div className="faq-selected-contents">
                <div className="faq-selected-header">
                  <VscAccount className="faq-selected-icon" />{" "}
                  <h2>Managing your account</h2>
                </div>
                <div className="sele-flex">
                  <div className="faq-selected-items">
                    <h3>How do I pay for thr essentials or premium plan</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum minus voluptates rerum cum porro iste ad quibusdam
                      omnis laboriosam? Fuga necessitatibus laboriosam veniam
                      similique veritatis consequuntur, quam alias illo odit.
                    </p>
                  </div>
                  <div className="faq-selected-items">
                    <h3>Can I cancel my essentials ?</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum minus voluptates rerum cum porro iste ad quibusdam
                      omnis laboriosam? Fuga necessitatibus laboriosam veniam
                      similique veritatis consequuntur, quam alias illo odit.
                    </p>
                  </div>{" "}
                  <div className="faq-selected-items">
                    <h3>How do I pay for thr essentials or premium plan</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum minus voluptates rerum cum porro iste ad quibusdam
                      omnis laboriosam? Fuga necessitatibus laboriosam veniam
                      similique veritatis consequuntur, quam alias illo odit.
                    </p>
                  </div>{" "}
                  <div className="faq-selected-items">
                    <h3>How do I pay for thr essentials or premium plan</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum minus voluptates rerum cum porro iste ad quibusdam
                      omnis laboriosam? Fuga necessitatibus laboriosam veniam
                      similique veritatis consequuntur, quam alias illo odit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer colorState={true} />
        </div>
      </div>
    </div>
  );
};

export default FaqSelected;
