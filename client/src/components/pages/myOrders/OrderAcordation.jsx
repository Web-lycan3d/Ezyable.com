/** @format */

import React, { useState } from "react";

import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import Moment from "react-moment";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import ApiUrl from "../../../ApiUrl";

const OrderAcordation = ({ order, value }) => {
  const [state, setState] = useState(false);
  const url = ApiUrl();
  const handleClick = async (orderId) => {
    try {
      const DeleteService = await axios.delete(
        url + "/service/delete/" + orderId + "?user=" + order.userId
      );
      if (DeleteService.data.deleted) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ cursor: "pointer" }}>
      {state && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          confirmBtnStyle={{
            textDecoration: "none",
            border: "none",
            outline: "none",
            background: "#da3625",
            padding: "0.2rem 0.3rem",
            color: "white",
          }}
          cancelBtnStyle={{
            textDecoration: "none",
            border: "none",
            outline: "none",

            padding: "0.2rem 0.3rem",
            color: "black",
          }}
          onConfirm={() => handleClick(order.orderId)}
          onCancel={() => setState(false)}
          focusCancelBtn>
          You will not be able to recover this!
        </SweetAlert>
      )}

      <AccordionItem className="order-accordation">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="order-details-header">
              <h2>
                <span className="order-span-tag">{value}.</span>
                {order.serviceName}
                <span className="date-mobile">
                  {order.date.substring(0, 9)}
                </span>
              </h2>
              <p>{order.date.substring(0, 9)}</p>

              <p>
                <span>to</span> {order.orderBy}
              </p>
              {/* <p style={{ visibility: "hidden" }}>Rs {order.price}</p> */}
            </div>
            <div className="order-address">
              <p>OrderId: {order.orderId}</p>
              <span>Address: {order.orderAddress}</span>
              {order.city && <span>City: {order.city}</span>}
              <span>Pincode: {order.orderPincode}</span>
              <span>
                Price:{" "}
                <span className="order-price">
                  {order.price ? "₹" + order.price : "checking"}
                </span>{" "}
              </span>
              <p className="service-p">Service: {order.serviceName}</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="order-details-body">
            <p>
              Payment Status:{" "}
              <span> {order.paymentStatus ? "Done" : "Ongoing"} </span>
            </p>
            <p>
              Your Order Status: <span>{order.status}</span>
            </p>
            {/* <button
                onClick={() => setState(true)}
                style={{ visibility: "hidden" }}>
                Cancel Order
              </button> */}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
};

export default OrderAcordation;
