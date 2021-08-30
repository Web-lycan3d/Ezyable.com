/** @format */

import React, { useEffect, useState } from "react";

const RegisterPassword = ({ formData, setForm, navigation }) => {
  const [errorState, setErrorState] = useState();
  const { password, cPassword } = formData;
  const [passState, setPasswordState] = useState(null);

  useEffect(() => {
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );

    if (strongPassword.test(password)) {
      setPasswordState(true);
    } else setPasswordState(false);

    if (password !== cPassword) {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  }, [password, cPassword]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passState && !errorState) {
      navigation.next();
    }
  };

  return (
    <div className="auth-form-details">
      <h2 className="password-header">
        Password
        <div className="password-strength">
          <div
            className="strength-circle"
            style={
              passState
                ? {
                    background: "Green",
                    boxShadow: "0px 0px 10px Green",
                  }
                : {
                    background: "red",
                    boxShadow: "0px 0px 10px #f04352",
                  }
            }></div>
          {/* <span>{!passState ? "weak password" : "strong password"}</span> */}
        </div>
      </h2>{" "}
      {errorState && <span>Password doesn't match</span>}
      <form onSubmit={handlePasswordSubmit}>
        {password && (
          <div className="password-strength">
            <div
              className={
                passState
                  ? "strength-circle green-circle"
                  : "strength-circle red-circle"
              }></div>
            <span>
              {!passState
                ? "Include @, %, caps & at least 8 characters "
                : "Good to go"}
            </span>
          </div>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={setForm}
          required
        />
        <input
          type="password"
          name="cPassword"
          value={cPassword}
          onChange={setForm}
          placeholder="Confirm Password"
          required
        />
        <div className="step-navigate-btns" style={{ marginTop: "0rem" }}>
          <button type="submit">Next</button>
        </div>
      </form>
      <button className="form-back-2" onClick={() => navigation.previous()}>
        Back
      </button>
    </div>
  );
};

export default RegisterPassword;
