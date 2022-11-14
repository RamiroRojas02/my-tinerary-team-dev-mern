import React from 'react'
import { useParams } from 'react-router-dom'
import datosHoteles from '../api/data-hoteles';
import datosEventos from '../api/data-hoteles-eventos';
import CardDetailsHoteles from '../components/CardDetailsHoteles'
import HotelEvents from '../components/HotelEvents'
export default function DetailsHotels() {
    let id = window.location.search.slice(4);
   let hotelCardDetailsData= datosHoteles.filter((e)=> e.id ===id)
   let hotelEventsData= datosEventos.filter((e)=> e.hotelId ===id)

  return (
    <div className='divDetailsHotels'>
      {hotelCardDetailsData.map((e)=> <CardDetailsHoteles /* displays={} aca va el css con useState */ photos={e.photo}  names={e.name} descriptions={e.description} capacities={e.capacity}/>)}
      <div className='hotelEventsContainer' >
      {hotelEventsData.map((e)=> <HotelEvents /* displays={} aca va el css con useState */ pictures={e.photo}  names={e.name} descrip={e.description} price={e.price}/>)}
      </div>
    </div>
  )
}