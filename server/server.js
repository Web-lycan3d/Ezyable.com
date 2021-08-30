/** @format */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./configm/connect");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const morgan = require("morgan");
const port = process.env.PORT || 4000;

// mongoose Connection
connection();

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/userRoute"));
app.use("/user", require("./routes/loginRoute"));
app.use("/", require("./routes/socailAuth"));
app.use("/admin", require("./routes/AdminRoute"));

app.listen(port, function () {
  console.log("server is running");
});
