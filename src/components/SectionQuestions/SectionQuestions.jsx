import React from 'react';
import './SectionQuestions.scss';

function SectionQuestions() {
    return (
        <section className="questions">
            <div className="container">
                <h2 className="title questions__title">Есть вопросы?</h2>
                <form action="" className="questions__form">
                    <p className="questions__text">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                    <input type="text" className="input questions__input" placeholder="Ваше имя"/>
                    <input type="text" className="input questions__input" placeholder="Ваш телефон"/>
                    <button className="button questions__button">Посмотреть район</button>
                </form>
            </div>
    </section>
    )
}

export default SectionQuestions;