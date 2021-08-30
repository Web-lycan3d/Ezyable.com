/** @format */

import React, { useState } from "react";
import { BiPhone, BiIdCard } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import ApiUrl from "../../../ApiUrl";
import axios from "axios";
const backendUrl = ApiUrl();

const OrderdItems = ({ data, userid, updateState }) => {
  const [status, setStatus] = useState("");
  const [paymentstatus, setPaymentStatus] = useState(false);
  const [price, setPrice] = useState("");

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const Datalist = {
      text: status ? status : data.status,
      price: price ? price.trim() : data.price,
      paymentstatus: paymentstatus,
      id: id,
      userid: userid,
    };
    console.log(Datalist);
    const resp = await axios.post(backendUrl + "/admin/data/update", Datalist);
    if (resp) updateState();
  };

  return (
    <>
      <div className="dropdown-flow">
        {/* <div
          className={
            deliverState
              ? "status-color status-green"
              : "status-color status-red"
          }></div> */}
        <div className="details-address">
          <p>
            <BiPhone className="address-icons" /> {data.orderMobileNo}
          </p>
          <p>
            <AiOutlineMail className="address-icons" /> {data.orderEmail}
          </p>
          <p>
            <BiIdCard className="address-icons" /> {data.orderId}
          </p>
        </div>
        <div className="dropdown-flow-left">
          <div className="items-orderd-list">
            <span>{`${data.serviceName}`} </span>
          </div>
          <div className="items-orderd-address">
            <span>{`${data.orderAddress},${data.orderPincode} `}</span>

            <span>{`Order Date : ${data.date}`}</span>
            <span>{`Ordered By : ${data.orderBy}`}</span>
          </div>
        </div>
        <div className="dropdown-flow-right">
          {/* <span>{`Cancel Status: ${data.orderCancel}`}</span> */}
          <form onSubmit={(e) => handleSubmit(e, data.orderId)}>
            <input type="hidden" value={data.orderId} name="orderid" />
            <label htmlFor="orderstatus">Order Status</label>
            <select
              name="orderstatus"
              className="select-option"
              onChange={(e) => setStatus(e.target.value)}>
              <option
                value="Order Processing"
                selected={data.status === "Order Processing" ? "selected" : ""}>
                Order Processing
              </option>
              <option
                value="In Transit"
                selected={data.status === "In Transit" ? "selected" : ""}>
                In Transit
              </option>
              <option
                value="Delivered"
                selected={data.status === "Delivered" ? "selected" : ""}>
                Delivered
              </option>
              <option
                value="Cancelled"
                selected={data.status === "Cancelled" ? "selected" : ""}>
                Cancelled
              </option>
            </select>
            <span className="data-status">Status: {data.status}</span>
            <br />
            <p></p>
            <label htmlFor="paymentstatus">Payment Status</label>
            <select
              name="paymentstatus"
              className="select-option"
              onChange={(e) => setPaymentStatus(e.target.value)}>
              <option
                value={false}
                selected={data.paymentStatus === false ? "selected" : ""}>
                False
              </option>
              <option
                value={true}
                selected={data.paymentStatus === true ? "selected" : ""}>
                True
              </option>
            </select>
            <span className="data-status">
              Status: {`${data.paymentStatus}`}
            </span>{" "}
            <p></p>
            <TextField
              className="price-textfield"
              id="standard-basic"
              label="Price"
              type="number"
              value={price ? price : data.price}
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={data.price}
            />
            <button type="submit">Submit</button>{" "}
          </form>
        </div>
      </div>{" "}
    </>
  );
};

export default OrderdItems;
