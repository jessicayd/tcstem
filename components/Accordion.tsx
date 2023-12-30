'use client'

import React, { useState } from 'react';
import ColorWrapper from './Wrapper/ColorWrapper';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    const indexExists = activeIndices.includes(index);

    if (indexExists) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={`accordion-item ${activeIndices.includes(index) ? 'active' : ''}`}>
          <div className='accordion-question' onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            {activeIndices.includes(index) ? <span>–</span> : <span>+</span>}
          </div>
          <div className={`accordion-answer-container ${activeIndices.includes(index) ? 'fade-in' : ''}`}>
            <div className="accordion-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Accordion;
