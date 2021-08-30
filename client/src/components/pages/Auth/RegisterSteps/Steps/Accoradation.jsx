/** @format */

import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";

const Accoradation = ({ summary, details, navigation }) => {
  return (
    <div className="auth-review-page">
      <Accordion className="accordion-main">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2>{summary}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="review-contents">
            <EditIcon
              className="edit-icon"
              onClick={() => navigation.go(`${summary}`)}
            />
            {details.map((data, index) => (
              <span key={index}>
                {Object.keys(data)[0]} :<p>{data[Object.keys(data)[0]]} </p>
              </span>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accoradation;
