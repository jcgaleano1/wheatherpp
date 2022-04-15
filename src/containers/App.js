import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad'
import { Route } from 'react-router-dom';
import Swal from 'sweetalert2';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);//Main state from the App.js

  function onClose(id) {//I am receiving the ciudad.id from Cards.js where i am executing this function
    setCities(oldCities => oldCities.filter(c => c.id !== id));//comparing if id from cards is equal to the id from the status from here, just this element is deleted, the rest of elements will be showing normally
  }

  function onSearch(ciudad) {//city from SearchBar into the input
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)//Here i am using the state from the input searchBar to find an specific city
      .then(r => r.json())
      .then((recurso) => {//getting all info related with a specific city weather
        console.log(recurso);
        if (recurso.main !== undefined) {//if there is information in recurso.main
          //If tere is info, an object is created to save all the required data
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };                                   //Id from object ciudad, it is being calling into the fetch
          if (!cities.some(city => city.id === ciudad.id)) {//This is making the quiestion if an iddoes not exist
            setCities(oldCities => [...oldCities, ciudad]);//I am changing the cities State data
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'City already exist, add another option',
              icon: 'warning',
              confirmButtonText: 'Ok'
            })
          }

        } else {
          Swal.fire({
            title: 'Error!',
            text: 'The city has not been found, try again',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    //Main routs
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />

      <Route
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
        path='/about'
        component={About}
      />

      <Route
        exact path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          city={onFilter(match.params.ciudadId)}
        />}
      />
    </div>
  );
}

export default App;


