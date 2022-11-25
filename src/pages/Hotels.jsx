import React, { useEffect, useRef, useState } from "react";
import CardHoteles from "../components/CardHoteles";
import datosHoteles from "../api/data-hoteles";
import FilterHotels from "../components/FilterHotels";
import axios from "axios";
import apiUrl from "../url";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelsActions";
export default function Hotels() {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hotelActions.getHotels())
  }, []);
  let selector = useRef();
  let searchBar = useRef();

    const handleChange = () => {
      
      let searchValue= searchBar.current.value
      let selectValue = selector.current.value
      
      let values = {
        select : selectValue ,
        search: searchValue
      }

      dispatch(hotelActions.getHotelsFilt(values))


    };
    let hotelsFilt  = useSelector(store => store.hotelsReducer)
    let hotels = useSelector(store => store.hotelsReducer.listHotels)
    
    console.log(hotelsFilt);
    // console.log(allHotels);
    console.log(hotels);
    if (hotelsFilt.listHotelsFilt.length > 0) {
      hotels = hotelsFilt.listHotelsFilt
    }
    if (hotelsFilt.select !== '' || hotelsFilt.search !== '') {
      hotels = hotelsFilt.listHotelsFilt
    }
    

  return (
    <div className="HotelsPage">
      <FilterHotels
        searchInput={searchBar}
        select={selector}
        onChange={handleChange}
      />
      <div className="cardsContainerHotels">
        {hotels.length === 0
          ? <h1>Hotel Not Found</h1>
          : hotels.map((e) => (
              <CardHoteles
                key={e._id}
                id={e._id}
                name={e.name}
                description={e.description}
                capacity={e.capacity}
                photo={e.photo}
              />
            ))}
      </div>
    </div>
  );
}
