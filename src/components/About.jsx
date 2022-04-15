import React from 'react'
import './About.css';
import image from '../img/weather.png'

const About = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
            <h1 className="title m-4">Wheater App</h1>
            <div className='d-flex flex-lg-row justify-content-lg-between align-items-center flex-column'>
                <p className='fs-2 m-4 col-6 '>This weather app will help you to check how the weather is in each of the world's cities</p>
                <div>
                <img src={image} alt="" className='image img-fluid col-6' />
                </div>
                
            </div>

        </div>
    )
}

export default About
