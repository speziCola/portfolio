import React from 'react';
import Link from 'gatsby-link'

import Social from '../components/social';

const Footer = () => (
    <div className="ck__footer">
        <Social></Social>
        <p className="ck__footer__credit">© 2008 - 2019  <Link to="/imprint/">Imprint</Link></p>
    </div>
);

export default Footer;
