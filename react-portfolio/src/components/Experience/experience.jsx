import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
    return (
        <section id="experience">
            <h5>Os meus</h5>
            <h2>conhecimentos</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Desenvolvimento em Frontend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermédio</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermédio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Iniciante</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Prestashop</h4>
                                <small className='text-light'>Intermédio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Wordpress</h4>
                                <small className='text-light'>Iniciante</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Woocommerce</h4>
                                <small className='text-light'>Intermédio+</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>Desenvolvimento em Backend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SQL Server</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Iniciante</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Iniciante</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience