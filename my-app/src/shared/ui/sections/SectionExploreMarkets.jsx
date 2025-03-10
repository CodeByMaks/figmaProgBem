import React from 'react'
import imgTeam from '../../../assets/Group 757.png'
import Button from '../buttons/Button'

const SectionExploreMarkets = () => {
  return (
    <section style={{backgroundImage: `url(${imgTeam})`}} className='section section__market'>
        <div className='section__market__box'>
            <h1 className='section__market__box__title'>Научитесь исследовать иностранные рынки 
            и откройте новые возможности для своего бизнеса</h1>
            <p className='section__market__box__text'>Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки</p>
            <Button className={'button button--blue'} text={'Получить консультацию'} />
        </div>
    </section>
  )
}

export default SectionExploreMarkets