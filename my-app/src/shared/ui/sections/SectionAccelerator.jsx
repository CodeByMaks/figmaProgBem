import React from 'react'
import ContainerForAccelerator from '../containers/ContainerForAccelerator'
import numThree from '../../../assets/3.png'
import earthImg from '../../../assets/Vector.png'
import timeImg from '../../../assets/Vector (1).png'
import videoImg from '../../../assets/Group 840.png'

const SectionAccelerator = () => {
  return (
    <section className='section section__accelerator'>
        <h1 className='title__sections__forOther'>Об акселераторе IT бизнеса</h1>
        <p>Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов </p>

        <div className='section__accelerator__container'>
            <ContainerForAccelerator titleImg={numThree} text={'Месяца обучения'} />
            <ContainerForAccelerator titleImg={earthImg} text={'Приглашенные эксперты'} />
            <ContainerForAccelerator titleImg={timeImg} text={'Персональный менеджер'} />
        </div>

        <div className='section__accelerator__video'>
            <img className='section__accelerator__video__img' src={videoImg} alt="" />
        </div>
    </section>
  )
}

export default SectionAccelerator