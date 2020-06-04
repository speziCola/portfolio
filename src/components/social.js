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
        <a href="http://linkedin.chriskuhrt.de/" aria-label="Linkedin">
          <img className="social-icon" src={linkedin} alt="Linkedin" />
          linkedin
        </a>
      </li>
      <li>
        <a href="http://xing.chriskuhrt.de/" aria-label="Xing">
          <img className="social-icon" src={xing} alt="Xing" />
          xing
        </a>
      </li>
      <li>
        <a href="http://medium.chriskuhrt.de/" aria-label="Medium">
          <img className="social-icon" src={medium} alt="Medium" />
          medium
        </a>
      </li>
      <li>
        <a href="http://behance.chriskuhrt.de/" aria-label="Behance">
          <img className="social-icon" src={behance} alt="Behance" />
          behance
        </a>
      </li>
      <li>
        <a href="http://git.chriskuhrt.de/" aria-label="Github">
          <img className="social-icon" src={github} alt="Github" />
          github
        </a>
      </li>
      <li>
        <a href="http://twitter.chriskuhrt.de/" aria-label="Twitter">
        <img className="social-icon" src={twitter} alt="Twitter" />
          twitter
        </a>
      </li>
      <li>
        <a href="http://instagram.chriskuhrt.de/" aria-label="Instagram">
        <img className="social-icon" src={instagram} alt="Instagram" />
          instagram
        </a>
      </li>
      <li>
        <a href="http://500px.chriskuhrt.de/" aria-label="500px">
          <img className="social-icon" src={fivepx} alt="500px" />
          500px
        </a>
      </li>
      <li>
        <a href="http://vimeo.chriskuhrt.de/" aria-label="Vimeo">
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
