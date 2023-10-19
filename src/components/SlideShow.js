import React from "react";
import "./SlideShow.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const imageSources = [
    "/images/DJ1.jpg",
    "/images/Dj2.jpg",
    "/images/DJ6.jpg",
    "/images/navImage.jpg",
    "/images/DJ4.jpg",
    "/images/DJ5.jpg",
    "/images/DJ7.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="MainSlideContainer">
      <div className="slider-container">
        <Slider {...settings}>
          {imageSources.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="imageSlides"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideShow;
