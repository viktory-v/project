import React from 'react';
import './SectionDistrict.scss';

function SectionDistrict() {
    return (
        <section className="district">
            <div className="container">
                <h2 className="title district__title">Район на карте</h2>
                <textarea name="area-description" id="" cols="245" rows="10" className="district__description"></textarea>
                
                {/* <div className="descriptions">
                    <h2 className="title descriptions__title">Есть вопросы?</h2>
                    <form action="" className="descriptions__form">
                        <p className="descriptions__text">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                        <input type="text" className="input descriptopns__input" placeholder="Ваше имя"/>
                        <input type="text" className="input descriptopns__input" placeholder="Ваш телефон"/>
                        <button className="button descriptions__button">Посмотреть район</button>
                    </form>
                </div> */}
            </div>
     </section>
    )
}

export default SectionDistrict;