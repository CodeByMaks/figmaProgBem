import React from 'react'
import vector from '../../../assets/Vector (2).png'
import vector2 from '../../../assets/Vector (3).png'
import vector3 from '../../../assets/Group 670.png'
import Button from '../buttons/Button'

const SectionPrice = () => {
  return (
    <section className="section9">
    <h2>Стоимость</h2>
    <div className="div">
      <div className="section99">
        <img src={vector} />
        <h4>Анализ международных рынков</h4>
        <p>Что входит в отчет?</p>
        <pre className="sub">1. Анализ конкурентов</pre>
        <pre className="sub">2. Анализ инвесторов</pre>
        <pre className="sub">3. Размеры рынка (TAM,SAM,SOM)</pre>
        <pre className="sub">4. Анализ СМИ</pre>
        <pre className="sub">5. Анализ запрос в сети интернет</pre>
        <div className="flex">
          <p className="b">Готовность</p>
          <p>7 раб. дней</p>
        </div>
        <div className="flex">
          <p className="b">Язык</p>
          <p>рус. / англ.</p>
        </div>
        <div className="flex">
          <p className="b">Стоимость</p>
          <p className="blue">$1 000 </p>
        </div>
        <Button className={'button button--green'} text={'Оставить заявку'} />
      </div>
      <div className="section99">
        <img src={vector2} />
        <h4>Упаковка стартапа под локальные рынки</h4>
        <p>Что входит в отчет?</p>
        <pre className="sub">1. Анализ конкурентов</pre>
        <pre className="sub">2. Анализ инвесторов</pre>
        <pre className="sub">3. Размеры рынка (TAM,SAM,SOM)</pre>
        <pre className="sub">4. Анализ СМИ</pre>
        <pre className="sub">5. Анализ запрос в сети интернет</pre>
        <div className="flex">
          <p className="b">Готовность</p>
          <p>7 раб. дней</p>
        </div>
        <div className="flex">
          <p className="b">Язык</p>
          <p>рус. / англ.</p>
        </div>
        <div className="flex">
          <p className="b">Стоимость</p>
          <p className="blue">$1 000 </p>
        </div>
        <Button className={'button button--green'} text={'Оставить заявку'} />
      </div>
      <div className="section99">
        <img src={vector3} />
        <h4>Акселератор вашего бизнеса</h4>
        <p>Что входит в отчет?</p>
        <pre className="sub">1. Анализ конкурентов</pre>
        <pre className="sub">2. Анализ инвесторов</pre>
        <pre className="sub">3. Размеры рынка (TAM,SAM,SOM)</pre>
        <pre className="sub">4. Анализ СМИ</pre>
        <pre className="sub">5. Анализ запрос в сети интернет</pre>
        <div className="flex">
          <p className="b">Готовность</p>
          <p>7 раб. дней</p>
        </div>
        <div className="flex">
          <p className="b">Язык</p>
          <p>рус. / англ.</p>
        </div>
        <div className="flex">
          <p className="b">Стоимость</p>
          <p className="blue">$1 000 </p>
        </div>
        <Button className={'button button--green'} text={'Оставить заявку'} />
      </div>
    </div>
  </section>
  )
}

export default SectionPrice