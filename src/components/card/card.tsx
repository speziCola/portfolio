import React from "react";
import "./card.css";

import Pattern01 from "./pattern01";
import Pattern02 from "./pattern02";

interface CardProps {
  children?: React.ReactNode;
  pattern?: "Pattern01" | "Pattern02"; // This prop specifies which pattern to use ( Hot wo use: pattern="Pattern02" svgid="pattern02")
  className?: string; // This prop is for adding a class to the div
  svgid?: string; // This  prop is for adding a id to the div
}

const Card: React.FC<CardProps> = ({
  children,
  pattern = "Pattern01", // Default
  className,
  svgid = "Pattern01", // Default
}) => {
  return (
    <>
      <div className={`card ${className ? className : ""}`}>
        <div className="cardStyle">
          {pattern === "Pattern01" && <Pattern01 id={svgid} />}
          {pattern === "Pattern02" && <Pattern02 id={svgid} />}
        </div>
        {children}
      </div>
    </>
  );
};

export default Card;
