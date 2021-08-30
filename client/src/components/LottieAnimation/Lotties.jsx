/** @format */

import React from "react";
import Lottie from "react-lottie";
import verifify from "./47709-verified.json";

const Lotties = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: verifify,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="lottie-verified">
      <Lottie options={defaultOptions} height={250} width={200} />
    </div>
  );
};

export default Lotties;
