import React from 'react'
import Button from '../buttons/Button'

const SectionAnalytics = ({title, text, img, imgPosition}) => {
  return (
    <section className='section section__analytics'>
        <div className={`section__analytics--${imgPosition}`}>
            <img src={img} alt="" />
            <div className='section__analytics__box'>
                <h1 className='section__analytics__title'>{title}</h1>
                <p className='section__analytics__text'>{text}</p>            
                
                <Button className={'button button--green'} text={'Узнать подробнее'} />
            </div>
        </div>
    </section>
  )
}

export default SectionAnalytics