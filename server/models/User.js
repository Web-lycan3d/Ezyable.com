/** @format */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: String,
    googleId: String,
    userId: String,
    city: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },

    profileUrl: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    orders: [
      {
        status: {
          type: String,
          default: "Order Processing",
        },
        paymentStatus: {
          type: Boolean,
          default: false,
        },
        serviceName: String,
        userId: String,
        orderBy: String,
        orderId: String,
        date: String,
        orderMobileNo: String,
        orderAddress: String,
        orderPincode: String,
        orderEmail: String,
        city: String,
        price: String,
      },
    ],

    address: String,
    Pincode: String,

    PhoneNo: String,
  },
  {
    timestamps: (createdAt) => new Date(),
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
