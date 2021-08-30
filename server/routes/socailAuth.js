/** @format */

const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");

const googleAuth = require("../socailAuth/googleAuth");
googleAuth(passport);

router.get(
  "/user/google/main",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  }),
  (req, res) => {}
);
router.get(
  "/google/auth/main",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    let { userId, email } = req.user;
    let token = jwt.sign(
      { email: email, userId: userId },
      "a6c513a36299668657b229e0f7125a16564f7ade2ab89802e2d9563d569d94ac"
    );

    res.redirect("https://easyable.netlify.app/?auth=" + token);
  }
);

module.exports = router;
