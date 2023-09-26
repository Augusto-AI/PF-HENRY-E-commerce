import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.scss";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="left-section">
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
      <div className="right-section">
        <h3>Updates</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
