import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const testimonials = () => {
    return (
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonals</h2>

            <div className="container testimonials__container">
                <article className="testominal">
                    <div className="cliente__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default testimonials