// Carousel.js
import React, { useState } from 'react';

const Carouselll = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel" >
      <button onClick={prevSlide}>Previous</button>
      <img style={{height:"340px", width:"340px " }} src={slides[currentIndex]} alt="slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carouselll;
