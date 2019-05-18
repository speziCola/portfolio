import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './button-link';

const TimeStamp = ({
  time, title, type, link, url, infos
}) => (
    <div className="timestamp">
      <p className="timestamp__time">{time}</p>
      <h3 className="timestamp__title">{title}</h3>
      <p className="timestamp__type">{type}</p>
      <p className="timestamp__infos">{infos}</p>
      <ButtonLink type={link} url={url} /> 
    </div>
);

TimeStamp.defaultProps = {
  time: '',
  title: '',
  type: '',
  link: '',
  url: '',
  infos: ''
};

TimeStamp.propTypes = {
  time: PropTypes.string, 
  title: PropTypes.string, 
  type: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  infos: PropTypes.string
};

export default TimeStamp;
