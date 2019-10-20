import React from "react";
import PropTypes from 'prop-types';

const Social = ({
  size
}) => (
  <div className={`ck_social ck_social--${size}`}>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/christopher-kuhrt/" aria-label="Linkedin">
          <i className="ck-icon-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.xing.com/profile/Christopher_Kuhrt2" aria-label="Xing">
          <i className="ck-icon-xing"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com//spezicola" aria-label="Github">
          <i className="ck-icon-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chriskuhrt/" aria-label="Instagram">
          <i className="ck-icon-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://500px.com/chriskuhrt" aria-label="500px">
          <i className="ck-icon-500pixel"></i>
        </a>
      </li>
      <li>
        <a href="https://vimeo.com/cqrt" aria-label="Vimeo">
          <i className="ck-icon-vimeo"></i>
        </a>
      </li>
    </ul>
  </div>
);

Social.defaultProps = {
  size: ''
};

Social.propTypes = {
  size: PropTypes.string

};

export default Social;
