import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import lock from '../../src/images/icons/lock.svg';

const projectPreview = ({
  title, subtitle, info, img, alt, url, type, password
}) => (
  <div className="project_container">
    <figure className="project__img">
      <a href={url}><img src={img} alt={alt} /></a>
    </figure>
    <div className="project__content">
      <a href={url}><h2 className="project__title"><span className="project__tile__title--underline">{title}</span></h2></a>
      <p className="project__subtitle">{subtitle}</p>
      <p className="project__info">
        {info}
      </p>
      <a className={`link link--${type}`} href={url}>
        <img className={`social-icon ${password}`} src={lock} loading="lazy" alt="Password protected" />
        view
      </a>
    </div>
  </div>
);

projectPreview.defaultProps = {
  title: '',
  subtitle: '',
  info: '',
  img: '',
  alt: '',
  url: '',
  type: '',
  password: ''
};

projectPreview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  password: PropTypes.string

};

export default projectPreview;
