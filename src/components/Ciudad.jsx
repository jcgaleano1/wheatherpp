import React from "react";
import './Ciudad.css';

export default function Ciudad({ city }) {
    if (!city) return (
        <div className="content-message">
            <h2 className="message">There are no cities, you will have to check for any city</h2>
        </div>
    )
    return (
        <div className="section">
            <div className="ciudad">
                <h2 className='titulo'>{city.name}</h2>
                <div className="info">
                    <p className='texto'><span>Temperatura:</span> {city.temp} ºC</p>
                    <p className='texto'><span>Clima:</span> {city.weather}</p>
                    <p className='texto'><span>Viento:</span> {city.wind} km/h</p>
                    <p className='texto'><span>Cantidad de nubes:</span> {city.clouds}</p>
                    <p className='texto'><span>Latitud:</span> {city.latitud}º</p>
                    <p className='texto'><span>Longitud:</span>  {city.longitud}º</p>
                </div>
            </div>
        </div>
    )
}

