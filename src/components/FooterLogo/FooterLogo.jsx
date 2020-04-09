import React from 'react';
import logo from "../../images/HouseVOP.svg";
import './FooterLogo.scss';

function FooterLogo() {
    return (
        <div className="footer-logo">
            <img src={logo} alt=""/>
            <span className="footer-logo__text">жилой комплекс</span>
        </div>
    )
}

export default FooterLogo;