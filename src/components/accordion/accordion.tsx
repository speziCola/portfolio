import React, { useState, useEffect } from 'react';
import './accordion.css';

import OpenIcon from "./openIcon";
import CloseIcon from "./closeIcon";


interface AccordionProps {
  buttonText: string;
  id?: string;
  children?: React.ReactNode;
  closed?: boolean;
  openOnMobile?: boolean; // New prop to determine if it should start open on mobile
}

const Accordion: React.FC<AccordionProps> = ({ 
  buttonText, 
  id,
  children, 
  closed = false,
  openOnMobile = false, // By default, it's closed on mobile 
}) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 900 : false;
  const [isHidden, setIsHidden] = useState(isMobile ? !openOnMobile : closed);

  useEffect(() => {
    setIsHidden(prevHidden => isMobile ? !openOnMobile : (prevHidden && closed));
  }, [isMobile, closed, openOnMobile]);

  const handleButtonClick = () => {
    if (isMobile || closed) {
      setIsHidden(!isHidden);
    }
  };

const buttonStyle = {
  cursor: (isMobile || closed) ? 'pointer' : 'text',
};

return (
  <>
    <div id={id}>
      <h2 className="accordionTitleWrapper">
        <button 
          className="accordionTitle" 
          onClick={handleButtonClick}
          style={buttonStyle}
          aria-expanded={!isHidden}
        >
          {buttonText}
        </button>
      </h2>
      <article className="accordionContent" aria-hidden={isHidden ? 'true' : 'false'}>
        <div className="accordionContentWrapper">
          {children}
        </div>
      </article>
    </div>
  </>
);
};

export default Accordion;
