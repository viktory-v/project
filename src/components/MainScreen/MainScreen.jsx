import React from 'react';
import Mouse from '../Mouse/Mouse';
import MainSecreenContacts from '../MainSecreenContacts/MainSecreenContacts';
import "./MainScreen.scss";

function MainScreen() {
    return (
        <section className="mainscreen">
            <div className="container">
                <h1 className="mainscreen__title">
                    <p>Жилой комплекc</p>
                    <p> в историческом центре</p></h1>
                <Mouse />
                <MainSecreenContacts />
            </div>
        </section>
    )
}

export default MainScreen;