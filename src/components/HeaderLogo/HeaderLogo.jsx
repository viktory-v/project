import React from 'react';
import logo from "../../images/HouseVOP.svg";

import "./HeaderLogo.scss";

function HeaderLogo() {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
            <span className="logo__text">жилой комплекс</span>
        </div>
    )
}

export default HeaderLogo;
