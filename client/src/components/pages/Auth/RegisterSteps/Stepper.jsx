/** @format */

import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import RegisterEmail from "./Steps/RegisterEmail";
import RegisterPassword from "./Steps/RegisterPassword";
import RegisterLandmark from "./Steps/RegisterLandmark";
import RegisterReview from "./Steps/RegisterReview";
import { useEffect } from "react";

const Stepper = ({ wid }) => {
  const steps = [
    { id: "Details" },
    { id: "Password" },
    { id: "Address" },
    { id: "review" },
  ];

  const [formData, setForm] = useForm({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    cPassword: "",
    address: "",
    pincode: "",
    city: "",
  });

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  useEffect(() => {
    switch (step.id) {
      case "Details":
        return wid(5);
      case "Password":
        return wid(25);
      case "Address":
        return wid(60);
      case "review":
        return wid(100);
      default:
        break;
    }
  }, [step.id]);

  let props = { formData, setForm, navigation };
  switch (step.id) {
    case "Details":
      return <RegisterEmail {...props} />;

    case "Password":
      return <RegisterPassword {...props} />;

    case "Address":
      return <RegisterLandmark {...props} />;

    case "review":
      return <RegisterReview {...props} />;
    default:
      break;
  }
  return <></>;
};

export default Stepper;
