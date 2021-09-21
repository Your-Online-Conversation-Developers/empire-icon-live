import React from "react";

const MobileSlider = () => {
  return (
    <div className="header-section header-slider mobile-slider" id="header">
      <div className="single-hSlider hSlide-one">
        <img src="images/bg/mdiamond-luxury.jpg" alt="mobile" />
      </div>
      <div className="single-hSlider hSlide-one">
        <img src="images/bg/mgold-luxury.jpg" alt="mobile" />
      </div>
      <div className="single-hSlider hSlide-one">
        <img src="images/bg/msilver-luxury.jpg" alt="mobile" />
      </div>
      <div className="single-hSlider hSlide-one">
        <img src="images/bg/msilver.jpg" alt="mobile" />
      </div>
    </div>
  );
};

export default MobileSlider;
