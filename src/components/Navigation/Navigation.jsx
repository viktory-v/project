import React from 'react';
import './Navigation.scss';

function Navigation() {
    return (
        <nav className="main-menu">
            <ul className="main-menu__list">
                <li><a className="main-menu__link" href="/">О комплексе</a></li>
                <li><a className="main-menu__link" href="/">Район</a></li>
                <li><a className="main-menu__link" href="/">Каталог квартир</a></li>
                <li><a className="main-menu__link" href="/">Ипотека</a></li>
                <li><a className="main-menu__link" href="/">Контакты</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
