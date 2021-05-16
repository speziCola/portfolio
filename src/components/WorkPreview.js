import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import lock from '../../src/images/icons/lock.svg';

const workPreview = ({
  title, subtitle, info, img, alt, url, type, password
}) => (
  <div className="work_container">
    <figure className="work__img">
      <a href={url}><img src={img} alt={alt} /></a>
    </figure>
    <div className="work__content">
      <a href={url}><h2 className="work__title"><span className="work__tile__title--underline">{title}</span></h2></a>
      <p className="work__subtitle">{subtitle}</p>
      <p className="work__info">
        {info}
      </p>
      <a className={`link link--${type}`} href={url}>
        <img className={`social-icon ${password}`} src={lock} loading="lazy" alt="Password protected" />
        view
      </a>
    </div>
  </div>
);

workPreview.defaultProps = {
  title: '',
  subtitle: '',
  info: '',
  img: '',
  alt: '',
  url: '',
  type: '',
  password: ''
};

workPreview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  password: PropTypes.string

};

export default workPreview;
