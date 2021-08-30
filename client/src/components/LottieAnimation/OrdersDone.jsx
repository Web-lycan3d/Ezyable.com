/** @format */

import React from "react";
import Lottie from "react-lottie";
import order from "./53513-confetti.json";

const OrdersDone = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: order,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="lottie-done">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default OrdersDone;
