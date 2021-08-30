/** @format */

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const transport = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const EmailExits = await User.findOne({ email: email });
  if (!EmailExits) {
    return res.json({ emailExists: false });
  } else {
    bcrypt.compare(password, EmailExits.password, (err, result) => {
      if (err) console.log(err);
      if (!result) {
        return res.json({
          userCrendentials: false,
          userExists: true,
          emailExists: true,
        });
      } else {
        let token = jwt.sign(
          { email: email, userId: EmailExits.userId },
          "a6c513a36299668657b229e0f7125a16564f7ade2ab89802e2d9563d569d94ac"
        );
        // res.cookie("authcookie", token, { maxAge: 9000000, httpOnly: true });
        res.json({
          auth: true,
          emailExists: true,
          isAdmin: EmailExits.isAdmin,
          authToken: token,
          userCrendentials: true,
        });
      }
    });
  }
});
// router.get("/token", (req, res) => {
//   const authcookie = req.cookies.authcookie;
//   console.log(authcookie);
// });
router.post("/generate/otp", async (req, res) => {
  const otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });

  transport
    .sendMail({
      to: req.body.email,
      from: "support@teainbox.in",
      subject: "User verification for Ezyable",
      html: `<head>
    <style type="text/css">
    body, p, div {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
    }
    
   img{
     width:90px;
     height:90px;
     object-fit:contain;
   }
  </style>
  <title></title>
  </head>
  <body>
  <div class="center">
  <img src="https://i.ibb.co/qCDsFg2/Union-1.png" alt="err" />
  <p>
    The verification code is: <strong>${otp}</strong>
  </p>
  </div>
 </body>`,
    })
    .then((res1) => {
      res.json({ otp: otp });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/register", (req, res) => {
  const { username, email, password, phone_number, address, pincode, city } =
    req.body;

  let imageUrl = `https://ui-avatars.com/api/?name=${username}`;
  let userid = uuidv4();
  console.log(email.toLowerCase());
  if (
    email.toLowerCase() === "kk968347@gmail.com" &&
    password === "qwerty@A1"
  ) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      const userData = new User({
        username,
        email,
        password: hash,
        userId: userid,
        profileUrl: imageUrl,
        address: address,
        isAdmin: true,
        PhoneNo: phone_number,
        Pincode: pincode,
        city: city,
      });
      userData.save(() => {
        console.log("registered");
      });
    });

    let token = jwt.sign(
      { email: email, userId: userid },
      "a6c513a36299668657b229e0f7125a16564f7ade2ab89802e2d9563d569d94ac"
    );
    // res.cookie("authcookie", token, { maxAge: 9000000, httpOnly: true });
    return res.json({
      auth: true,
      isAdmin: true,
      userId: userid,
      authToken: token,
    });
  } else {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      const userData = new User({
        username,
        email,
        password: hash,
        userId: userid,
        profileUrl: imageUrl,
        address: address,
        isAdmin: false,
        PhoneNo: phone_number,
        Pincode: pincode,
        city: city,
      });
      userData.save(() => {
        console.log("s");
      });
    });
    if (username) {
      let token = jwt.sign(
        { email: email, userId: userid },
        "a6c513a36299668657b229e0f7125a16564f7ade2ab89802e2d9563d569d94ac"
      );
      // res.cookie("authcookie", token, { maxAge: 9000000, httpOnly: true });
      res.json({
        auth: true,
        isAdmin: false,
        userId: userid,
        authToken: token,
      });
    } else {
      res.json({ auth: false, userId: userid });
    }
  }
});
router.get("/checkuser", async (req, res) => {
  const user = req.query.user;
  const email = req.query.email;

  const userExists = await User.findOne({ username: user });
  if (userExists) {
    const EmailExists = await User.findOne({ email: email });
    if (EmailExists) {
      return res.json({ userExists: true, emailExists: true });
    } else {
      return res.json({ userExists: true, emailExists: false });
    }
  } else {
    const EmailExists = await User.findOne({ email: email });
    if (EmailExists) {
      return res.json({ userExists: false, emailExists: true });
    } else {
      return res.json({ userExists: false, emailExists: false });
    }
  }
});

module.exports = router;
