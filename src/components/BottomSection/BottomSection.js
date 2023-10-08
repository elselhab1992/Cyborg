import React from "react";
import "./BottomSection.css";

const BottomSection = ({ games }) => {
  return (
    <div className="container bottom-section">
      <div className="row">
        <div className="col">
          <h3 className="heading">
            <u>Your Gaming</u> <span>Library</span>
          </h3>
        </div>
      </div>
      <div className="row">{games}</div>
    </div>
  );
};

export default BottomSection;
