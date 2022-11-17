import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CardDetailsHoteles from '../components/CardDetailsHoteles'
import HotelEvents from '../components/HotelEvents'
import axios from 'axios';
import apiUrl from '../url';


export default function DetailsHotels() {
    let {id} = useParams()
    const [hotelsState, setStateHotel] = useState([]);
    const [showsState, setStateShow] = useState([]);

  console.log(id);
    useEffect(() => {
      axios
        .get(`${apiUrl}/hotels/${id}`)
        .then((response) => {
          let hotelArray = [response.data.response]
          setStateHotel(hotelArray);
        })
        .catch((err) => {
          console.log(err);
        });

      axios.get(`${apiUrl}/shows/?hotelId=${id}`)
      .then((response) => {
        setStateShow(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      }); 
    }, []);


    console.log(hotelsState);
    console.log(showsState);


  return (
    <div className='divDetailsHotels'>
      {hotelsState.length === 0 ? 'Hotel not found' : hotelsState.map((e)=> <CardDetailsHoteles key={e._id} photos={e.photo}  names={e.name} descriptions={e.description} capacities={e.capacity}/>)}
      <div className='hotelEventsContainer' >
      {showsState.length === 0 ? 'Show not found' : showsState.map((e)=> <HotelEvents key={e._id} pictures={e.photo}  names={e.name} descrip={e.description} price={e.price}/>)}
      </div>
    </div>
  )
}