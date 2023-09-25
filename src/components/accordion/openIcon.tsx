import React from "react";

const OpenIcon: React.FC = () => {
  return (
    <>
      <svg
        className="openIcon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 11V3H13V11H21V13H13V21H11V13H3V11H11Z"
        />
      </svg>
    </>
  );
};

export default OpenIcon;
