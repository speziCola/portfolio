import React from "react";
import PropTypes from 'prop-types';

import linkedin from '../../src/images/icons/linkedin.svg';
import xing from '../../src/images/icons/xing.svg';
import medium from '../../src/images/icons/medium.svg';
import behance from '../../src/images/icons/behance.svg';
import github from '../../src/images/icons/github.svg';
import twitter from '../../src/images/icons/twitter.svg';
import instagram from '../../src/images/icons/instagram.svg';
import fivepx from '../../src/images/icons/500pixel.svg';
import vimeo from '../../src/images/icons/vimeo.svg';

const Social = ({
  size
}) => (
  <div>
    <ul className="ck_social ck_social--two-columns">
      <li>
        <a href="https://www.linkedin.com/in/christopher-kuhrt/" aria-label="Linkedin">
          <img className="social-icon" src={linkedin} alt="Linkedin" />
          linkedin
        </a>
      </li>
      <li>
        <a href="https://www.xing.com/profile/Christopher_Kuhrt2" aria-label="Xing">
          <img className="social-icon" src={xing} alt="Xing" />
          xing
        </a>
      </li>
      <li>
        <a href="https://medium.com/@chriskuhrt" aria-label="Medium">
          <img className="social-icon" src={medium} alt="Medium" />
          medium
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/chriskuhrtv2" aria-label="Behance">
          <img className="social-icon" src={behance} alt="Behance" />
          behance
        </a>
      </li>
      <li>
        <a href="https://github.com//spezicola" aria-label="Github">
          <img className="social-icon" src={github} alt="Github" />
          github
        </a>
      </li>
      <li>
        <a href="https://twitter.com/chriskuhrt" aria-label="Twitter">
        <img className="social-icon" src={twitter} alt="Twitter" />
          twitter
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chriskuhrt/" aria-label="Instagram">
        <img className="social-icon" src={instagram} alt="Instagram" />
          instagram
        </a>
      </li>
      <li>
        <a href="https://500px.com/chriskuhrt" aria-label="500px">
          <img className="social-icon" src={fivepx} alt="500px" />
          500px
        </a>
      </li>
      <li>
        <a href="https://vimeo.com/cqrt" aria-label="Vimeo">
          <img className="social-icon" src={vimeo} alt="Vimeo" />
          vimeo
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
