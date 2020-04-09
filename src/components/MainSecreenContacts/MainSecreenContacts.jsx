import React from 'react';
import addr from "../../images/Vector-1.svg";
import phone from "../../images/Vector-2.svg";
import './MainSecreenContacts.scss'


function MainSecreenContacts() {
    return (
        <ul className="mainsecreen-contacts">
            <li className="mainsecreen-contacts__item">
                <i className="mainsecreen-contacts__icon">
                    <img src={addr} alt=""/>
                </i>
                <p className="mainsecreen-contacts__address">Наб. реки Фонтанки 10-15</p>
            </li>
            <li className="mainsecreen-contacts__item">
                <i className="mainsecreen-contacts__icon">
                    <img src={phone} alt=""/>
                </i>
                <a href="tel:8(812)123-45-67" className="mainsecreen-contacts__phone">8(812)123-45-67</a>
            </li>
        </ul>
    )
}

export default MainSecreenContacts;