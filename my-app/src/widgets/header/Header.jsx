import React from 'react'
import logo from '../../assets/INNOMA.VC.png'
import bgImage from '../../assets/uae-4-2048x1367 2.png'
import Button from '../../shared/ui/buttons/Button'

const Header = () => {
  return (
    <header style={{backgroundImage: `url(${bgImage})`}}>
        <div className='header--overlay'>
            <nav className='header__navbar'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <ul className='header__navbar-list'>
                    <li>Кто мы?</li>
                    <li>Услуги</li>
                    <li>Акселератор</li>
                    <li>Новости</li>
                </ul>

                <Button className={'button button--green'} text={'Войти'} />
            </nav>

            <div className='header__container'>
                <div className='header__box'>
                    <h1 className='header__title'>
                        ЗАПУСТИТЕ <br /> 
                        <span className='header__title--subtext'> ТЕХНОЛОГИЧЕСКИЙ IT-БИСНЕС </span> 
                        НА МЕЖДУНАРОДНЫХ РЫНКАХ
                    </h1>
                    <p className='header__text'>Открыт набор заявок на акселератор</p>
                    <Button className={'button button--blue'} text={'Подать заявку'} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header