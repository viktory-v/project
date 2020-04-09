import React from 'react';
import './FooterNavigation.scss';

function FooterNavigation() {
    return (
        <nav className="footer-menu">
            <ul className="footer-menu__list">
                <li><a className="footer-menu__link" href="/">О комплексе</a></li>
                <li><a className="footer-menu__link" href="/">Район</a></li>
                <li><a className="footer-menu__link" href="/">Каталог квартир</a></li>
                <li><a className="footer-menu__link" href="/">Ипотека</a></li>
                <li><a className="footer-menu__link" href="/">Контакты</a></li>
            </ul>
        </nav>
    )
}

export default FooterNavigation;