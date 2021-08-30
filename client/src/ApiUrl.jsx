/** @format */

import React from "react";

const ApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  if (process.env.NODE_ENV === "production") {
    return "https://ezyable.herokuapp.com";
  }
};

export default ApiUrl;
