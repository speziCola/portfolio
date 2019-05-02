import React from 'react';
import Link from 'gatsby-link'

import Social from '../components/social';
import ThemeToggleButton from '../components/theme';

const Footer = () => (
    <div className="ck__footer">
        <Social></Social>
        <div className="ck__footer__wrapper">
            <p className="ck__footer__credit">© 2008 - 2019  <Link to="/imprint/">Imprint</Link></p>
            <ThemeToggleButton />
        </div>
    </div>
);

export default Footer;


