import React from 'react';
import './SectionApartments.scss'
import flat1 from "../../images/аpartment-1.jpeg";
import flat2 from "../../images/аpartment-2.jpeg";
import flat3 from "../../images/аpartment-3.jpeg";
import flat4 from "../../images/аpartment-4.jpeg";

function SectionApartments() {
    return (
        <section className="apartmens">
            <div className="container">
                <h2 className="title apartmens__title">Наши Квартиры</h2>
                
                <div className="apartmens__fotos">

                    <figure className="apartmens__foto">
                        <img src={flat1} alt="Фото" width="535" height="320"/>
                        <span className="overlay"></span>
                        <figcaption className="apartmens__text">Лофт - 3 этажа</figcaption>
                    </figure>

                    <figure className="apartmens__foto">
                        <img src={flat2} alt="Фото" width='535' height='320'/>
                        <span className="overlay"></span>
                        <figcaption className="apartmens__text">Лофт - 3 этажа</figcaption>
                    </figure>

                    <figure className="apartmens__foto">
                        <img src={flat3} alt="Фото" width='535' height='320'/>
                        <span className="overlay"></span>
                        <figcaption className="apartmens__text">Лофт - 3 этажа</figcaption>
                    </figure>

                    <figure className="apartmens__foto">
                        <img src={flat4} alt="Фото" width='535' height='320'/>
                        <span className="overlay"></span>
                        <figcaption className="apartmens__text">Лофт - 3 этажа</figcaption>
                    </figure>

                </div>
            </div>
        </section>
    )
}

export default SectionApartments;