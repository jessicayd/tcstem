'use client'

import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number;
}

const Counter: React.FC<CounterProps> = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const time = 5000 / targetNumber;


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return targetNumber;
      });
    }, time);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
      <div className="counter">{count}</div>
  );
};


export default Counter;
