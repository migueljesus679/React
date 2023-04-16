import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.png'
import Headesocials from './Headesocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Olá sou o</h5>
                <h1>Miguel Jesus</h1>
                <h5 className="text-light">Programador</h5>
                <CTA />
                <Headesocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header