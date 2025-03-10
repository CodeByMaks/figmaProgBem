import React from 'react'
import footerImg from '../../assets/Group 870.png'
import icon from '../../assets/INNOMA.VC.png'

const Footer = () => {
  return (
    <footer style={{backgroundImage: `url(${footerImg})`}}>
        <div className='footer__box'>
            <div>
                <img src={icon} alt="" />
                <p className='footer__text'>Все права защищены</p>
            </div>
            <ul className='footer__list'>
                <li>Кто мы?</li>
                <li>Услуги</li>
                <li>Акселератор</li>
                <li>Новости</li>
            </ul>
            <div className='footer__right'>
                <p>Dubai, Single Business Tower <br /> 1503, Business Bay</p>
                <p className='footer__email'>Sales@innoma.vc</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer