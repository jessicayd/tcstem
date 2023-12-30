'use client'

import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  photos: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        setIsMounted(true);
      }, 300);
  }, [index]);


  const nextSlide = () => {
    setIsMounted(false);
    setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 300);
  };

  const prevSlide = () => {
    setIsMounted(false);
    setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
      }, 300);
  };

  return (
    <div>
      <img className={`slideshow-img ${isMounted ? 'fade-in' : ''}`} src={photos[index]} alt={`Slide ${index + 1}`} />
      <div><button className="slideshow-button" onClick={prevSlide}>←</button><button className="slideshow-button" onClick={nextSlide}>→</button></div>
    </div>
  );
};

export default Slideshow;
