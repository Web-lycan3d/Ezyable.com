/** @format */

const mongoose = require("mongoose");

const connection = () =>
  mongoose.connect(
    `mongodb+srv://root:abhi0317@demo.mb7pd.mongodb.net/easyable`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

module.exports = connection;
