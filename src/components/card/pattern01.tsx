import React from "react";

interface Pattern01Props {
  id: string;
}

const Pattern01: React.FC<Pattern01Props> = ({ id }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <rect y="4" width="1" height="1"/>
            <rect x="1" y="3" width="1" height="1"/>
            <rect x="2" y="2" width="1" height="1"/>
            <rect x="3" y="1" width="1" height="1"/>
            <rect x="4" width="1" height="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      
    </>
  );
};

export default Pattern01;
