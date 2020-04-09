import React from 'react';
import youtube from '../../images/soc1.svg';
import vk from '../../images/soc2.svg';
import fb from '../../images/soc3.svg';
import instagram from '../../images/soc4.svg';
import './FooterContacts.scss';

function FooterContacts() {
    return (
       <nav className="footer-contacts">
           <ul className="footer-contacts__list">
               <li><a href="/" className="footer-contacts__link">Адрес: Наб. реки Фонтанки 10-15</a></li>
               <li><a href="/" className="footer-contacts__link">Телефон: 8 (812) 123-45-67</a></li>
               <li><a href="/" className="footer-contacts__link">Отдел продаж: 10:00 - 20:00</a></li>
               <li><a href="/" className="footer-contacts__link">E-mail: <span className="accent-color">vip@housevip.ru</span></a></li>
               <li>
                   <ul className="footer-soc">
                       <li><a href="/" className="footer-soc__link">
                           <img src={youtube} alt=""/></a></li>
                       <li><a href="/" className="footer-soc__link">
                           <img src={vk} alt=""/></a></li>
                       <li><a href="/" className="footer-soc__link">
                           <img src={fb} alt=""/></a></li>
                       <li><a href="/" className="footer-soc__link">
                           <img src={instagram} alt=""/></a></li>
                   </ul>
               </li>
           </ul>
       </nav>
    )
}

export default FooterContacts;