import React from 'react';
import PropTypes from 'prop-types';

const TimeStamp = ({
  time, title, type, link, url, infos
}) => (
    <div className="timestamp">
      <p className="timestamp__time">{time}</p>
      <h3 className="timestamp__title">{title}</h3>
      <p className="timestamp__type">{type}</p>
      <h4 className="timestamp__subtitle"></h4>
      <p className="timestamp__infos">{infos}</p>
      <a className={`timestamp__link timestamp--${link}`} href={url}>view</a>  
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
