import React from 'react'
import up from '../../../assets/Group 667.png'
import downn from '../../../assets/Group 1017.png'
import Button from '../buttons/Button'

const SectionChange = () => {
  return (
    <section className="section">
          <h2 className="section__change__title">Программа акселератора</h2>

          <div className="section__change__first">
            <div className="section__change__first-item">
              <h4 className="section__change__first-title">
                <span className="section__change__light">Модуль 1.</span> Тенденции и
                тренды современного мира
              </h4>
              <img src={up}  className="section__change__first-img" />
            </div>
            <p className="section__change__text">
              Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов
              консалтинговых компаний
            </p>
            <p className="section__change__text">
              Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема
            </p>
            <p className="section__change__text">
              Тема 3. Что такое внутренние и внешние инновации? Как искать
              инновационные идеи?
            </p>
            <pre className="section__change__pre">
              9 видео роликов, вебинар с приглашенным экспертом
            </pre>
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 2.</span> Стартап подход
              к созданию международного IT продукта
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 3.</span> Бизнес
              моделирование и пенс России: Наймс Fit
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 4.</span> Определение
              рынка, пенсы и исследование Целевой аудитории
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 5.</span> Что такое MVP и
              почему это важно
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 6.</span> Unit экономика
              и финансовое моделирование
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 7.</span> Что такое
              дорожная карта продукта?
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 8.</span> Документы для
              международных инвесторов
            </h4>
            <img src={downn} className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Модуль 9.</span> Открытие
              юридического лица. Возможности для стариков
            </h4>
            <img src={downn}  className="section__change__two-img" />
          </div>

          <div className="section__change__two">
            <h4 className="section__change__two-title">
              <span className="section__change__light">Демо день</span> 
            </h4>
          </div>
          
          <div className='section_change_container_button'>
            <Button className={'button button--blue'} text={'Получить полную программу'} />
          </div>
        </section>

  )
}

export default SectionChange