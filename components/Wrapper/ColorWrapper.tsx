'use client'

import React, { useEffect, useRef } from 'react';

interface ColorWrapperProps {
  children: React.ReactNode;
  blue: boolean;
}

const ColorWrapper: React.FC<ColorWrapperProps> = ({ children, blue }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = windowHeight * 0.9;

        if (rect.top < threshold) {
          wrapperRef.current.classList.add("active");
        } else {
          wrapperRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`wrapped ${blue ? 'blue-wrapped' : 'white-wrapped'}`}>
      <div className='inner-content'>
        {children}
      </div>
    </div>
  );
};

export default ColorWrapper;
