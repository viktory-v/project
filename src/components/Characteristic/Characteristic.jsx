import React from 'react';
import bench from '../../images/vector-3.svg'
import building from '../../images/vector-4.svg'
import fountain from '../../images/vector-5.svg'
import bicycle from '../../images/vector-6.svg'
import './Characteristic.scss';

function Characteristic() {
    return (
        <section className="characteristic">
            <div className="container">
                <div className="characteristic__items">

                    <div className="characteristic__item">
                        <div className="characteristic__icon">
                            <img src={bench} alt=""/>
                        </div>
                        <p className="characteristic__text">Рядом исторические<br />парки и скверы</p>
                    </div>

                    <div className="characteristic__item">
                        <div className="characteristic__icon">
                            <img src={building} alt=""/>
                        </div>
                        <p className="characteristic__text">Полностью<br />обустроенны</p>
                    </div>

                    <div className="characteristic__item">
                        <div className="characteristic__icon">
                            <img src={fountain} alt=""/>
                        </div>
                        <p className="characteristic__text">10 фонтанов<br />на территории</p>
                    </div>

                    <div className="characteristic__item">
                        <div className="characteristic__icon">
                            <img src={bicycle} alt=""/>
                        </div>
                        <p className="characteristic__text">6 км<br />велодорожек</p>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Characteristic;