import React from 'react'
import Button from '../buttons/Button'
import imgPerson from '../../../assets/Group 763.png'
import numb from '../../../assets/Group 764.png'
import downloadIcon from '../../../assets/Group 661.png' 
import anotherNumb from '../../../assets/_300.png'
import andAnotherNumb from '../../../assets/73.png'

const SectionDealMarket = () => {
  return (
    <section className='section section__dealmarket'>
        <div className='section__dealmarket__box'>
            <div className='section__dealmarket__items section__dealmarket__items--bgblue'><p>Ближний восток</p></div>
            <div className='section__dealmarket__items'><p>Азия</p></div>
            <div className='section__dealmarket__items'><p>Латинская Америка</p></div>
            <div className='section__dealmarket__items'><p>Африка</p></div>
        </div>

        <div className='section__dealmarket__container'>
            <div className='section__dealmarket__leftbox'>
                <h1 className='section__dealmarket__leftbox__title'>Чем интересен
                <span className='section__dealmarket__leftbox__title--green'> Рынок MENA: </span></h1>
                <p className='section__dealmarket__leftbox__text'>ОАЭ, Саудовская Аравия, 
                Израиль, Оман, Бахрейн, Катар, 
                Тунис, Йемен, Египет, Алжир</p>
                <Button className={'button button--blue'} text={'Выйти на рынок'} /> 
                <img style={{display: 'block'}} src={imgPerson} alt="" />
            </div>
            <div className='section__dealmarket__rightbox'>
                <div className='section__dealmarket__rightbox__item'>
                    <img src={numb} alt="" />
                    <p>Инвестиции pre-seed, seed</p>
                </div>
                <div className='section__dealmarket__rightbox__item'>
                    <img src={anotherNumb} alt="" />
                    <p>Акселераторов, инкубаторов</p>
                </div>
                <div className='section__dealmarket__rightbox__item'>
                    <img src={andAnotherNumb} alt="" />
                    <p>Венчурных фонда</p>
                </div>
                <div className='section__dealmarket__rightbox__item section__dealmarket__rightbox__item--bgblue'>
                    <img src={downloadIcon} alt="" />
                    <p>Скачать отчет
                    по рынку MENA</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionDealMarket