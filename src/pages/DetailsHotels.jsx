import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetailsHoteles from '../components/CardDetailsHoteles'
import HotelEvents from '../components/HotelEvents'
export default function DetailsHotels() {
    let params = useParams()
    console.log(params)
  return (
    <div>
      <CardDetailsHoteles/>
      <HotelEvents/>
    </div>
  )
}
