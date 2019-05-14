import React from 'react';
import Link from 'gatsby-link'

import Social from '../components/social';
import ThemeButton from '../components/theme-button';

const Footer = () => (
    <div className="ck__footer">
        <Social></Social>
        <div className="ck__footer__wrapper">
            <p className="ck__footer__credit">© 2008 - 2019  <Link to="/imprint/">Imprint</Link></p>
            <ThemeButton />
        </div>
    </div>
);

export default Footer;
