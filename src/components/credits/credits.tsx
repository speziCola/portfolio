import React from 'react';
import { Link } from "gatsby";
import "./credits.css";

const Credits: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <div>
      <p className='textXS creditsText'>
        © 2008 - {year} <Link to="/imprint">Imprint</Link>
      </p>
    </div>
  );
};

export default Credits;
