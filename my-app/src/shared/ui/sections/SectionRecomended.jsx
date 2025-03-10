import React from 'react'
import Container from '../containers/Container'
import oneNumbimg from '../../../assets/01.png'
import twoNumbimg from '../../../assets/02.png'
import threeNumbimg from '../../../assets/03.png'

const SectionRecomended = () => {
  return (
    <section className='section section__recomended'>
        <Container 
        imgTitle={oneNumbimg} 
        title={'IT проекты на стадии идеи'} 
        text={'Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт'} 
        />
        <Container 
        imgTitle={twoNumbimg} 
        title={'Инновационный бизнес'} 
        text={'Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес'} 
        />
        <Container 
        imgTitle={threeNumbimg} 
        title={'Корпорации'} 
        text={'Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес'} 
        />
    </section>
  )
}

export default SectionRecomended