import React from 'react';
import mouse from "../../images/mouse.svg";
import "./Mouse.scss";


function Mouse() {
    return (
        <div className="mouse mainscreen__mouse">
            <img src={mouse} alt=""/>
        </div>
    )
}


export default Mouse;