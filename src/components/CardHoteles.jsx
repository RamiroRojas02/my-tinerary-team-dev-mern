import React from 'react'
import { Link as LinkId } from 'react-router-dom'
export default function CardHoteles({id,photo,name,description}) {
    return (
    <div className='cardHoteles' id={id}>
        <img src={photo} alt={name} />
        <div className='cardHotelesInfo'>
            <h3>{name}</h3>
            <p className="showDescription">{description}</p>
            <LinkId to={`/HotelDetails?id=${id}`}>
            <button>See more about</button></LinkId>
        </div>
    </div>
  )
}
/* <LinkRoute to="/">
        Home
      </LinkRoute> */