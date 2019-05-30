import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const navbarback = ({
  url
}) => (
    <div className="navbarback">
        <Link to={url}><i className="ck-icon-arrow-left-a"></i></Link>
    </div>
);

navbarback.defaultProps = {
  url: ''
};

navbarback.propTypes = {   
  url: PropTypes.string

};

export default navbarback;