/** @format */

import React from "react";

const ApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  if (process.env.NODE_ENV === "production") {
    return "https://young-hollows-10236.herokuapp.com";
  }
};

export default ApiUrl;
