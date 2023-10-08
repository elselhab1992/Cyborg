import React from "react";
import "./MostPopular.css";

const MostPopular = ({ cards }) => {
  return (
    <>
      <div className="container section-wrapper">
        <div className="row">
          <div className="col">
            <h3 className="heading">
              <u>Most Popular</u> <span>Right Now</span>
            </h3>
          </div>
        </div>

        <div className="row">{cards}</div>
      </div>
    </>
  );
};

export default MostPopular;
