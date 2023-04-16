import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFolderUserFill } from 'react-icons/ri'

const About = () => {
    return (
        <section id='about'>
            <h5>Vem me</h5>
            <h2>Conhecer</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="Sobre a Imagem" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>+3 c#</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Curso</h5>
                            <small>TGPSI</small>
                        </article>
                        <article className='about__card'>
                            <RiFolderUserFill className='about__icon' />
                            <h5>Projetos</h5>
                            <small>E-coommerce</small>
                        </article>


                    </div>
                    <p>
                        Gosto de programação!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Vamos falar</a>
                </div>
            </div>
        </section>
    )
}

export default About