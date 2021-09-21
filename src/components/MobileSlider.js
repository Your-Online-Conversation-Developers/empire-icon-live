import React from "react";
import Slider from "react-slick";

const MobileSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      speed: 5000,
    cssEase: "linear"
  };
  return (
   <Slider {...settings}>
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
    </Slider>
  );
};

export default MobileSlider;
