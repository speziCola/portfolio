import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import lock from '../../src/images/icons/lock.svg';

const projectPreview = ({
  title, subtitle, info, img, alt, url, type, password
}) => (
  <div className="project_thumb">
    <figure className="projects__img">
      <Link to={url}><img src={img} loading="lazy" alt={alt} /></Link>
    </figure>
    <div className="projects__tile">
      <Link to={url}><h2 className="projects__tile__title"><span className="projects__tile__title--underline">{title}</span></h2></Link>
      <p className="projects__tile__subtitle">{subtitle}</p>
      <p className="projects__tile__info">
        {info}
      </p>
      <a className={`button__link button__link--${type}`} href={url}>
        <img className={`social-icon ${password}`} src={lock} alt="Password protected" />
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
