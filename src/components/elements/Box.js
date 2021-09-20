import React from "react";

const Box = ({ iconClass, h6Text, pText = "" , placeImg="" }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-place">
        <i className={iconClass} />
        {
        placeImg ? 
        <img src={placeImg} alt="box" />
        : ''
        }
        <h6>{h6Text}</h6>
        <p>{pText}</p>
      </div>
    </div>
  );
};

export default Box;
