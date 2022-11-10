import React from 'react'
import { Link as LinkId } from 'react-router-dom'
export default function CardHoteles({id,photo,name,description}) {
    return (
    <div className='cardHoteles' key={id}>
        <img src={photo} alt={name} />
        <div className='cardHotelesInfo'>
            <h3>{name}</h3>
            <p className="showDescription">{description}</p>
            <LinkId to="/HotelDetails/: ">
            <button>See more about</button></LinkId>{/* trabaharlo con link     dentro del to le pongo la ruta de /HotelDetails/:{id}*/}
        </div>
    </div>
  )
}
/* <LinkRoute to="/">
        Home
      </LinkRoute> */