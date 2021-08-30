/** @format */

const express = require("express");
const Router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

Router.get("/userdata", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

// @route    PATCH api/user/admin/update
// @Desc     Upadte the status of the user
//@access    Private
Router.post("/data/update", async (req, res) => {
  const updateData = await User.updateOne(
    { userId: req.body.userid, "orders.orderId": req.body.id },
    {
      $set: {
        "orders.$.status": req.body.text,
        "orders.$.paymentStatus": req.body.paymentstatus,
        "orders.$.price": req.body.price,
      },
    }
  );
  res.json({ message: "updated" });
});

module.exports = Router;
