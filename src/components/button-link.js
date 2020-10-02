import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({
  type, url
}) => (
  <a className={`link link--${type}`} href={url}>view</a>
);

ButtonLink.defaultProps = {
  type: '',
  url: ''
};

ButtonLink.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string
};

export default ButtonLink;
