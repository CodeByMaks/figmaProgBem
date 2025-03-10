import React from 'react'
import Container from '../containers/Container'
import oneNumbimg from '../../../assets/01.png'
import twoNumbimg from '../../../assets/02.png'
import threeNumbimg from '../../../assets/03.png'
import fourNumbimg from '../../../assets/04.png'
import fiveNumbimg from '../../../assets/05.png'
import sixNumbimg from '../../../assets/06.png'

const SectionNumbers = () => {
  return (
    <section className='section section__numbers'>
         <h1 className='title__sections__forOther'>Что вы получите в результате?</h1>

         <div className='section__numbers__container'>
            <Container 
            imgTitle={oneNumbimg} 
            title={'Документы по продукту'} 
            text={'Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP'} 
            />
            <Container 
            imgTitle={twoNumbimg} 
            title={'Обратная связь от рынка'} 
            text={'Проведение исследования целевой аудитории позволит сформировать Product market fit'} 
            />
            <Container 
            imgTitle={threeNumbimg} 
            title={'Продвижение продукта'} 
            text={'Продвижение продукта через аналитические системы партнеров'} 
            />

            <Container 
            imgTitle={fourNumbimg} 
            title={'Подписка на отчеты'} 
            text={'Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер'} 
            />
            <Container 
            imgTitle={fiveNumbimg} 
            title={'Подписка на отчеты'} 
            text={'Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер'} 
            />
            <Container 
            imgTitle={sixNumbimg} 
            title={'Подписка на отчеты'} 
            text={'Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер'} 
            />
         </div>
    </section>
  )
}

export default SectionNumbers