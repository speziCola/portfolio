import React from "react";
import "./cardReference.css";

interface CardProps {
  children?: React.ReactNode;
}

const CardReference: React.FC<CardProps> = ({
  children,
  className,
}) => {
  return (
    <>
      <div className={`card ${className ? className : ""}`}>
      
        {children}
      </div>
    </>
  );
};

export default CardReference;
