/** @format */

const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const port = process.env.PORT || 4000;

<<<<<<< HEAD
const accountSid = " ";
=======
const accountSid = "";
>>>>>>> 24f9dccd7472336c801071bc83aa9d7b44b52ffd
const authToken = "";
const client = require("twilio")(accountSid, authToken);

function verifyUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(
    token,
    "a6c513a36299668657b229e0f7125a16564f7ade2ab89802e2d9563d569d94ac",
    (err, data) => {
      if (err) {
        return res.json({ auth: false });
      } else {
        req.user = data;
        next();
      }
    }
  );
}
router.get("/checkadmin/user", verifyUser, async (req, res) => {
  try {
    const checkAdminData = await User.findOne({ email: req.user.email });
    if (!checkAdminData) return res.json({ isAdmin: false, auth: false });
    if (checkAdminData.isAdmin) {
      res.json({ isAdmin: true, auth: true });
    } else {
      res.json({ isAdmin: false, auth: true });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/services", verifyUser, async (req, res) => {
  try {
    if (req.user) {
      const userData = await User.findOne({ email: req.user.email });
      res.json({ auth: true, userData: userData });
    } else {
      res.json({ auth: true });
    }
  } catch (error) {
    res.json({ auth: false, user: "auth" });
  }
});
router.delete("/service/delete/:id", async (req, res) => {
  const orderID = req.params.id;
  const userID = req.query.user;

  const del = await User.updateOne(
    { userId: userID },
    { $pull: { orders: { orderId: orderID } } }
  );
  return res.json({ deleted: true });
});
router.post("/services", async (req, res) => {
  const { phone_number } = req.body;
  console.log("S");
  try {
    client.verify
<<<<<<< HEAD
      .services(" ")
=======
      .services("")
>>>>>>> 24f9dccd7472336c801071bc83aa9d7b44b52ffd
      .verifications.create({
        to: "+" + phone_number,
        channel: "sms",
      })
      .then((verification) => console.log(verification.status))
      .catch((err) => console.log(err));

    res.json({ referenceId: phone_number });
  } catch (error) {
    console.log(error);
  }
});
router.post("/verify/call", (req, res) => {
  client.verify
<<<<<<< HEAD
    .services(" ")
=======
    .services("")
>>>>>>> 24f9dccd7472336c801071bc83aa9d7b44b52ffd
    .verifications.create({
      to: "+" + req.body.phone_number,
      channel: "call",
    })
    .then((verification) => console.log(verification.status));

  res.json({ referenceId: req.body.phone_number });
});
router.post("/services/update", async (req, res) => {
  const {
    userId,
    username,
    phone_number,
    email,
    pincode,
    address,
    price,
    service,
    city,
  } = req.body;
  let orders = [
    {
      serviceName: service,
      userId: userId,
      orderBy: username,
      orderId: uuidv4(),
      date: new Date().toLocaleDateString(),
      orderMobileNo: phone_number,
      orderAddress: address,
      orderPincode: pincode,
      orderEmail: email,
      price: price,
      city: city,
    },
  ];
  const orderUpdate = await User.updateOne(
    { userId: userId },
    { $push: { orders: orders } }
  );
  const updatePhone = await User.findOne({ userId: userId });
  updatePhone.PhoneNo = phone_number;
  await updatePhone.save();

  return res.json({ updated: true });
});
router.post("/verify", (req, res) => {
  const { otpValue, messageToken } = req.body;

  client.verify
    .services(" ")
    .verificationChecks.create({ to: "+" + messageToken, code: otpValue })
    .then((data) => {
      if (data.valid) {
        return res.json({ verification: true });
      } else {
        return res.json({ verification: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/update", async (req, res) => {
  const { user } = req.query;
  const { username, phone_number, email, pincode, address, city } = req.body;

  try {
    const usersData = await User.findOne({ userId: user });
    usersData.username = username;
    usersData.PhoneNo = phone_number;
    usersData.email = email;
    usersData.Pincode = pincode;
    usersData.address = address;
    usersData.city = city;
    await usersData.save();
    return res.json({ updateStatus: true });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
