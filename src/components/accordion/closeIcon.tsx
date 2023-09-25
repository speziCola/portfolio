import React from "react";

const CloseIcon: React.FC = () => {
  return (
    <>
      <svg
        className="closeIcon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 13H21V11H3V13Z"
        />
      </svg>
    </>
  );
};

export default CloseIcon;
