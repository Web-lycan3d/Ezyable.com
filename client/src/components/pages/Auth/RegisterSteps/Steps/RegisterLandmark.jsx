/** @format */

import React, { useEffect, useState } from "react";

const RegisterLandmark = ({ formData, setForm, navigation }) => {
  const { address, pincode, city } = formData;
  const [pinStatus, setPinStatus] = useState();
  const [addressLen, setAddressLen] = useState(false);

  useEffect(() => {
    let pin = new RegExp(/^\d{4}$|^\d{6}$/);
    if (pin.test(pincode)) {
      setPinStatus(true);
    } else {
      setPinStatus(false);
    }

    if (address.length < 15) {
      setAddressLen(true);
    } else {
      setAddressLen(false);
    }
  }, [pincode, address, city]);

  const handleLandmarkSubmit = (e) => {
    e.preventDefault();

    if (pinStatus) navigation.next();
  };

  return (
    <div className="auth-form-details">
      <h2>Address</h2>
      <form onSubmit={handleLandmarkSubmit}>
        <input
          type="text"
          name="city"
          placeholder="city"
          required
          value={city}
          onChange={setForm}
        />
        {addressLen === true && <span>At least 15 characters</span>}
        <textarea
          name="address"
          cols="30"
          rows="3"
          placeholder="eg : Rajaji Nagar The Forum Value Mall,No 62 Whitefield Main RoadFood court 3rd Floor, Prestige."
          value={address}
          onChange={setForm}
          pattern=".{15,}"
          required
          title="15 characters minimum"></textarea>
        <p className="form-details-words">{address.length}/100</p>
        <label>Pincode</label>
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={pincode}
          onChange={setForm}
        />
        {!pinStatus && <span>Not valid</span>}
        <div className="step-navigate-btns">
          <button type="submit">Next</button>
        </div>
      </form>
      <button className="form-back-2" onClick={() => navigation.previous()}>
        Back
      </button>
    </div>
  );
};

export default RegisterLandmark;
