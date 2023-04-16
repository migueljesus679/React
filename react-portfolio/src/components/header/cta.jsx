import React from 'react'
import CV from '../../assets/cv.pdf'

const cta = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Descarregar CV</a>
            <a href="#contact" className='btn btn-primary'>Contacta-me</a>
        </div>
    )
}

export default cta