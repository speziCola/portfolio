import React from "react";

interface Pattern02Props {
  id: string;
}

const Pattern02: React.FC<Pattern02Props> = ({ id }) => {
  return (
    <>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
              id={id}
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </>
  );
};

export default Pattern02;
