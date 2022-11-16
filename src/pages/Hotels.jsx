import React, { useEffect, useRef, useState } from "react";
import CardHoteles from "../components/CardHoteles";
import datosHoteles from "../api/data-hoteles";
import FilterHotels from "../components/FilterHotels";
import axios from "axios";
import apiUrl from "../url";
export default function Hotels() {
  const [hotelsState, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/hotels`)
      .then((response) => {
        setState(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let selector = useRef();

  let searchBar = useRef();
  // useEffect(() => {
    
  // }, []);
    const handleChange = () => {
      
      let searchValue= searchBar.current.value
      let selectValue = selector.current.value
      axios.get(`${apiUrl}/hotels/?order=${selectValue}&name=${searchValue}`)
      .then(response =>{
        setState(response.data.response)
        console.log(response.data.response);
      })
      .catch(error =>{
        console.log(error);
      })
    };

  return (
    <div className="HotelsPage">
      <FilterHotels
        searchInput={searchBar}
        select={selector}
        onChange={handleChange}
      />
      <div className="cardsContainerHotels">
        {hotelsState.length === 0
          ? <h1>Hotel Not Found</h1>
          : hotelsState.map((e) => (
              <CardHoteles
                key={e._id}
                id={e._id}
                name={e.name}
                capacity={e.capacity}
                photo={e.photo}
              />
            ))}
      </div>
    </div>
  );
}
