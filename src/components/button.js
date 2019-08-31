import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const Button = ({
  type, size, title, url
}) => (
    <Link type={type} var={size} className="button" to={url}>
      {title} 
    </Link>
);

Button.defaultProps = {
  type: '',
  size: '',
  title: '',
  url: ''
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,  
  title: PropTypes.string, 
  url: PropTypes.string

};

export default Button;
