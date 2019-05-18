import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const Button = ({
  type, title, url
}) => (
    <Link type={type} className="button" to={url}>
      {title} 
    </Link>
);

Button.defaultProps = {
  type: '',
  title: '',
  url: ''
};

Button.propTypes = {
  type: PropTypes.string, 
  title: PropTypes.string, 
  url: PropTypes.string

};

export default Button;
