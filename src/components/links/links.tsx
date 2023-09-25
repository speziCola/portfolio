import { Link } from "gatsby";
import React from "react";
import "./links.css";

import ExternalArrow from "./externalArrow";

interface LinkProps {
  to: string;
  aria: string;
  children: React.ReactNode;
  external?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({
  to,
  aria,
  children,
  external = false,
}) => {
  const linkContent = external ? (
    <>
      {children}
      <ExternalArrow />
    </>
  ) : (
    children
  );

  return (
    <Link to={to} className="customLink" aria-label={aria}>
      {linkContent}
    </Link>
  );
};

export default CustomLink;
