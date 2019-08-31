import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const projectPreview = ({
  title, subtitle, info, img, alt, url
}) => (
  <div className="project_thumb">
    <figure className="projects__img">
      <Link to={url}><img src={img} alt={alt} /></Link>
    </figure>
    <div className="projects__tile">
      <Link to={url}><h2 className="projects__tile__title"><span className="projects__tile__title--underline">{title}</span></h2></Link>
      <p className="projects__tile__subtitle">{subtitle}</p>
      <p className="projects__tile__info">
        {info}
      </p>
    </div>
  </div>
);

projectPreview.defaultProps = {
  title: '',
  subtitle: '',
  info: '',
  img: '',
  alt: '',
  url: ''
};

projectPreview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string

};

export default projectPreview;
