import { Link } from "gatsby";
import React from "react";

const ExternalArrow: React.FC = () => {
  return (
    <>
      <svg
        className="customLinkArrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.79194 4.99988V7.24519L14.6794 7.25457L4.99976 16.9343L6.58882 18.5233L16.2685 8.84363L16.2638 17.7311H18.5232V4.99988H5.79194Z" />
      </svg>
    </>
  );
};

export default ExternalArrow;
