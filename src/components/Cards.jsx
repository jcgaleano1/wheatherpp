import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {//cities from App.js is passed hre as a prop
  return (
    <div className='cards'>
      {cities.length === 0 ? (
        <div className='home'>
          <div className="content">
            <h1>Welcome to Weatherpp!</h1>
            <p>Please add the city or country whose weather you want to check</p>
          </div>

        </div>
      ) : (
        cities.map(ciudad => <Card
          key={ciudad.id}
          max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
          onClose={() => onClose(ciudad.id)}//Here i am using the onclose fuction wich was brought as a prop, and i am putting the city.id argument
          id={ciudad.id}
        />

        ))}
    </div>
  );
}
