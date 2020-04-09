import React from 'react';
import HeaderLogo from  '../HeaderLogo/HeaderLogo';
import Navigation from  '../Navigation/Navigation';
// import HeaderTitle from  '../HeaderTitle/HeaderTitle';
// import HeaderContacts from '../HeaderContacts/HeaderContacts';
// import MainScreen from '../MainScreen/MainScreen';
// import logo from "../../images/Rectangle.jpg";
import "./Header.scss";


function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <HeaderLogo />
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header;
