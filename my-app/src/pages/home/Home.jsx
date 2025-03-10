import React from 'react'
import Header from '../../widgets/header/header'
import SectionAnalytics from '../../shared/ui/sections/SectionAnalytics'
import analyticsImg from '../../assets/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1.png'
import rocketImg from '../../assets/rocket 1.png'
import SectionRecomended from '../../shared/ui/sections/SectionRecomended'
import Footer from '../../widgets/footer/footer'
import SectionExploreMarkets from '../../shared/ui/sections/SectionExploreMarkets'
import SectionDealMarket from '../../shared/ui/sections/SectionDealMarket'
import SectionAccelerator from '../../shared/ui/sections/SectionAccelerator'
import SectionChange from '../../shared/ui/sections/SectionChange'
import SectionPartner from '../../shared/ui/sections/SectionPartner'
import SectionNumbers from '../../shared/ui/sections/SectionNumbers'
import SectionPrice from '../../shared/ui/sections/SectionPrice'
import analyticImg from '../../assets/Снимок экрана 2022-11-14 в 5.45 1.png'
import man from '../../assets/Group 841.png'
import fimage from '../../assets/IMG_6197 2.png'
import simage from '../../assets/test23444 1.png'
import timage from '../../assets/test233 1.png'
import foimage from '../../assets/IMG_6198 2.png'
import elips from '../../assets/Ellipse 545.png'
import one from '../../assets/Ellipse 546.png'
import two from '../../assets/Ellipse 548.png'
import thee from '../../assets/Ellipse 544.png'



const Home = () => {
  return (
    <>
        <Header />

        <main>
            <h1 className='title__sections'>Наши услуги</h1>

            <SectionAnalytics 
            title={'Аналитические исследования'}  
            text={'Одним из наших ключевых направлений является анализ технологических трендов на международных рынках. Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации'}
            img={analyticsImg}
            imgPosition={'right'}
            />

            <SectionAnalytics 
            title={'Онлайн акселератор для IT бизнеса'}  
            text={'Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров'}
            img={rocketImg}
            imgPosition={'left'}
            />

            <h1 className='title__sections'>Для кого мы?</h1>

            <SectionRecomended />

            <SectionExploreMarkets />

            <h1 className='title__sections'>С какими рынками мы работаем?</h1>

            <SectionDealMarket />
  
            <SectionAccelerator />     

            <SectionChange />

            <SectionPartner />

            <SectionNumbers />

            <SectionPrice />

            <section className='section'>
              <h1 className='title__sections__forOther'>Кто мы?</h1>

              <div className='section__whous'>
                <div>
                  <img src={analyticImg} alt="" />
                </div>
                <div>
                  <p className='section__whous__text'><span style={{color: 'blue', fontWeight: 'bold'}}> INNOMA.VC </span> -  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.</p>
                  <p>Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. </p>
                </div>
              </div>
            </section>

            <section className='section section__man'>
              <div>
                <img src={man} alt="" />
              </div>
              <div className='section__man__text'>
                <p>Всем привет! <br /> Меня зовут Роман. Последние 6 лет я являюсь частью 
                  инновационной экосистемы СНГ,  прошел путь от проектного 
                  менеджера до руководителя продукта по автоматизированному скаутингу и скорингу стартапов. За 6 лет работы я увидел  множество ошибок и отсутствие ориентации акселерационных программ под запросы стартапов. Все акселераторы выполнялись ради акселераторв и выполнения КПЭ. </p>

                  <div>
                    <p>Роман Гайн</p>
                    <p>Основатель INNOMA.VC </p>
                  </div>
              </div>
            </section>

            <section className='section section__img'>
              <img src={fimage} alt="" />
              <img src={simage} alt="" />
              <img src={timage} alt="" />
              <img src={fimage} alt="" />
              <img src={foimage} alt="" />
            </section>


            <section class="experts">
              <h2 class="experts__title">Эксперты и трекеры программы</h2>
              <div class="experts__list">
                <div class="experts__card">
                  <img class="experts__image" src={elips} /> 
                  <h3 class="experts__name">Юрий Ким</h3>
                  <p class="experts__description">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
                </div>
                <div class="experts__card">
                  <img class="experts__image" src={one} />
                  <h3 class="experts__name">Эшли Абрамс</h3>
                  <p class="experts__description">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
                </div>
                <div class="experts__card">
                  <img class="experts__image" src={two} />
                   <h3 class="experts__name">Фатими Юсуф</h3><p class="experts__description">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
                </div>
                <div class="experts__card">
                  <img class="experts__image" src={thee} />
                  <h3 class="experts__name">Майкл Донован</h3>
                  <p class="experts__description">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
                </div>
              </div>
              </section>

        <section className="section13">
          <h2>Мы создаем международное сообщество экспертов и партнеров</h2>
          <p>
            Если вы или ваш бизнес может быть полезен IT командам при выходе на
            международные рынки, приглашем вас стать нашим партнером
          </p>
          <button>Стать партнером</button>
        </section>
        </main>

        <Footer />
    </>
    
  )
}

export default Home