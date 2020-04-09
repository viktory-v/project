import React from 'react';
import './SectionRequest.scss';

function SectionRequest() {
    return (
        <div className="request">
            <div className="container">
                <h2 className="title request__title">Хотите посмотреть?</h2>
                <p className="request__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
                <form action="" className="request__form">
                    <input type="text" className="input request__input" placeholder="Ваше имя"/>
                    <input type="text" className="input request__input" placeholder="Ваш телефон"/>
                    <p className="request__form-text">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                    <button className="button request__button">Посмотреть район</button>
                </form>
            </div>
        </div>
    )
}

export default SectionRequest;