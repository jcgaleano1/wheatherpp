import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {//function onSearch form App, where the API is being managed
  const [city, setCity] = useState("");//This state obtains the value of the input
  
  return (
    <form className="form-inline formulario" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);//I am passing the city State as an argument to the onSearch function, which will be applied at App.js 
      setCity("");
    }}>
      <input  className="input"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <div className="underline"></div>
      <button type="submit" value="Agregar" className="my-3 my-sm-0 button">Add</button>
    </form>
  );
}
