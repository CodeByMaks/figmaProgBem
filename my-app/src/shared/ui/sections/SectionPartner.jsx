import React from 'react'
import Button from '../buttons/Button'
import partnerImg from '../../../assets/Group 719.png'

const SectionPartner = () => {
  return (
    <section className='section section__partner'>
        <div className='section__partner__container'>
            <div className='section__partner__box'>
              <h1 className='section__partner__title'>Попадите на радары инвесторов и партнеров</h1>
              <p className='section__partner__text'>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
              <Button className={'button button--green'} text={'Записаться в акселератор'} />
            </div>
            <div className='secc'>
              <img src={partnerImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default SectionPartner