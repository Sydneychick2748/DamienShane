import React from "react";
import "./SlideShow.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// var imageSlides = document.getElementsByClassName('imageSlides');
// var circles = document.getElementsByClassName('circle');
// var leftArrow = document.getElementById('leftArrow');
// var rightArrow = document.getElementById('rightArrow');
// var counter = 0;

// HIDE ALL IMAGES FUNCTION
// function hideImages() {
//   for (var i = 0; i < imageSlides.length; i++) {
//     imageSlides[i].classList.remove('visible');
//   }
// }

// REMOVE ALL DOTS FUNCTION
// function removeDots() {
//   for (var i = 0; i < imageSlides.length; i++) {
//     circles[i].classList.remove('dot');
//   }
// }

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
// function imageLoop() {
//   var currentImage = imageSlides[counter];
//   var currentDot = circles[counter];
//   currentImage.classList.add('visible');
//   removeDots();
//   currentDot.classList.add('dot');
//   counter++;
// }

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
// function arrowClick(e) {
//   var target = e.target;
//   if (target == leftArrow) {
//     clearInterval(imageSlideshowInterval);
//     hideImages();
//     removeDots();
//     if (counter == 1) {
//       counter = (imageSlides.length - 1);
//       imageLoop();
//       imageSlideshowInterval = setInterval(slideshow, 10000);
//     } else {
//       counter--;
//       counter--;
//       imageLoop();
//       imageSlideshowInterval = setInterval(slideshow, 10000);
//     }
//   }
//   else if (target == rightArrow) {
//     clearInterval(imageSlideshowInterval);
//     hideImages();
//     removeDots();
//     if (counter == imageSlides.length) {
//       counter = 0;
//       imageLoop();
//       imageSlideshowInterval = setInterval(slideshow, 10000);
//     } else {
//       imageLoop();
//       imageSlideshowInterval = setInterval(slideshow, 10000);
//     }
//   }
// }

// leftArrow.addEventListener('click', arrowClick);
// rightArrow.addEventListener('click', arrowClick);

// IMAGE SLIDE FUNCTION
// function slideshow() {
//   if (counter < imageSlides.length) {
//     imageLoop();
//   } else {
//     counter = 0;
//     hideImages();
//     imageLoop();
//   }
// }

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
// setTimeout(slideshow, 1000);
// var imageSlideshowInterval = setInterval(slideshow, 10000);

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
