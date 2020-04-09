import React from 'react';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import FooterContacts from '../FooterContacts/FooterContacts';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <FooterLogo />
                    <FooterNavigation />
                    <FooterNavigation />
                    <FooterContacts />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
