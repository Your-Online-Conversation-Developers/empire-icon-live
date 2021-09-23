import React from "react";
import { Button } from "react-scroll";

const SliderItem = ({ uHead, mHead, lHead, imgSrc, toLink }) => {

  return (
    <div className="slider-box">
      <div className="image-back">
        <img src={imgSrc} alt="slider" width="100%" />
      </div>
      <div className="header-texts">
        <h3 className="upper-heading">{uHead}</h3>
        <h1 className="middle-heading">{mHead}</h1>
        <h5 className="lower-heading">{lHead}</h5>
        <Button
          className="button sm appear-from-bottom"
          type="submit"
          value="REQUEST A CALL BACK"
          to={toLink}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        />
      </div>
    </div>
  );
};

export default SliderItem;
