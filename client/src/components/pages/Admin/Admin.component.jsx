/** @format */

import React, { useEffect, useState } from "react";
// import SearchBar from "material-ui-search-bar";
import { motion } from "framer-motion";
import axios from "axios";
import ApiUrl from "../../../ApiUrl";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';
import Login from "../Auth/Login";
import OrderOverview from "../../AdminDashboard/OrderOverview.component";
import NavHeader from "../../NavComponents/NavHeader";

const backendUrl = ApiUrl();
const AdminDashboard = () => {
  // const [value, setValue] = useState("");
  const history = useHistory();
  const [option, setOption] = useState(null);
  const [userData, setUserData] = useState([]);
  const [upstate, setupState] = useState(false);
  const [adminState, setAdminState] = useState(false);
  const [alertState, setAlertState] = useState(false);

  useEffect(() => {
    (async () => {
      const authToken = localStorage.getItem("authToken");
      const { data } = await axios.get(backendUrl + "/checkadmin/user", {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });

      if (!data.isAdmin) {
        history.push("/*");
        setAdminState(false);
      } else {
        setAdminState(true);
      }

      if (!data.auth) {
        history.push("/*");
      }
    })();
  }, []);

  useEffect(() => {
    fetchData();
  }, [upstate]);

  const updateState = () => {
    setupState(!upstate);
    setAlertState(!alertState);

  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/admin/userdata");
      data && setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterUserData = userData.filter((user) => user.orders.length > 0);

  const Droplist = (value) => {
    if (value) {
      return (
        filterUserData &&
        filterUserData.map(
          (item, index) =>
            item.orders.find(
              (i) =>
                i.status === "Order Processing" || i.status === "In Transit"
            ) && (
              <OrderOverview
                value={item}
                key={index}
                orStatus={value}
                updateState={updateState}
              />
            )
        )
      );
    } else {
      return (
        userData &&
        userData.map((item, index) => (
          <OrderOverview
            value={item}
            key={index}
            orStatus={value}
            updateState={updateState}
          />
        ))
      );
    }
  };

  if(alertState){
    setTimeout(() => {
      setAlertState(!alertState)
    }, 5000)
  }
  return (
    <>
      {adminState && <NavHeader />}
      {adminState && (
        <div className="admin-dashboard-container">
          {" "}
          {alertState ? (<Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Updated the documents
          </Alert>) : ""}
          <div className="admin-dsahboard-header">
            <div className="admin-dashboard-heading">
              <h1>Admin Dashboard</h1>{" "}
              {/* <div className="admin-dashboard-search">
            <SearchBar
              className="dashboard-search-bar"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onRequestSearch={() => doSomethingWith(value)}
            />
          </div> */}
            </div>

            <div className="admin-dashboard-nav">
              <span
                onClick={() => setOption(true)}
                className={
                  option
                    ? "admin-dashboard-navlist active"
                    : "admin-dashboard-navlist"
                }>
                New Orders
              </span>
              <span
                onClick={() => setOption(false)}
                className={
                  option
                    ? "admin-dashboard-navlist"
                    : "admin-dashboard-navlist active"
                }>
                User
              </span>
            </div>
          </div>
          <motion.div layout className="admin-dashboard-content">
            {option ? Droplist(true) : Droplist(false)}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
