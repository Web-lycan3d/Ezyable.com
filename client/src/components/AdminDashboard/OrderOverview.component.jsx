/** @format */
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { MdExpandLess } from "react-icons/md";

import OrderPreview from "./OrderPreview/OrderPreview.component";
import { motion } from "framer-motion";
const OrderOverview = ({ value, orStatus, updateState }) => {
  return (
    <motion.div layout className="dropdown-conatiner">
      <div className="dropdown-contents">
        <Accordion className="dropdown-accord">
          <AccordionSummary expandIcon={<MdExpandLess />}>
            {/* {orStatus && (
              <div className="status-new-colours">
                {value?.orderdItems.map((it, index) =>
                  it.status === "Order Processing" ? (
                    <span className="order-p"></span>
                  ) : it.status === "In Transit" ? (
                    <span className="order-t"></span>
                  ) : (
                    ""
                  )
                )}
              </div>
            )} */}
            <div className="dropdown-details">
              <div className="dropdown-details-left">
                <h1>{value.username}</h1>
                <div className="dropdown-details-left-user">
                  <span>User id: {value.userId} </span>
                  <span>Email: {value.email} </span>
                  {/* <span>Phone: {value.PhoneNo} </span> */}
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {/* <motion.div layout className="items-orderd-flex">
                {value?.orders.map((item, index) =>
                   (
                    <OrderPreview
                      data={item}
                      key={index}
                      userid={item.userId}
                      updateState={updateState}
                    />
                  ) 
                )}
              </motion.div> */}
            {orStatus ? (
              <motion.div layout className="items-orderd-flex">
                {value?.orders.map((item, index) =>
                  item.status === "Order Processing" ||
                  item.status === "In Transit" ? (
                    <OrderPreview
                      data={item}
                      key={index}
                      userid={item.userId}
                      updateState={updateState}
                    />
                  ) : (
                    ""
                  )
                )}
              </motion.div>
            ) : (
              <div className="items-orderd-flex">
                {value?.orders.map((item, index) => (
                  <OrderPreview
                    data={item}
                    key={index}
                    userid={item.userId}
                    deliverState={true}
                    updateState={updateState}
                  />
                ))}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </motion.div>
  );
};
export default OrderOverview;
