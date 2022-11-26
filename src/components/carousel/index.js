import React from "react";
import CarouselSlider from "./Carousel";
import cr1 from "../../assets/images/cr1.jpg";

let data = [
  {
    des: "1",
    imgSrc: cr1,
  },
  {
    des: "2",
    imgSrc: cr1,
  },
  {
    des: "3",
    imgSrc: cr1,
  },
  {
    des: "4",
    imgSrc: cr1,
  },
  {
    des: "5",
    imgSrc: cr1,
  },
];

let sliderBoxStyle = {
  height: "250px",
};

let itemsStyle = {};

let textBoxStyle = {};

let buttonSetting = {};

let manner = {};

function CarouselSliderIndex() {
  return (
    <CarouselSlider
      slideItems={data}
      manner={manner}
      buttonSetting={buttonSetting}
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
      textBoxStyle={textBoxStyle}
    />
  );
}

export default CarouselSliderIndex;
