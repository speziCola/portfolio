import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const navbarBottom = ({
  title, url
}) => (
  <div>
    <div className="navbarBottom__line"></div>
    <Link className="navbarBottom__link" to={url}>
      {title} 
    </Link>
  </div>
);

navbarBottom.defaultProps = {
  title: '',
  url: ''
};

navbarBottom.propTypes = {  
  title: PropTypes.string, 
  url: PropTypes.string

};

export default navbarBottom;