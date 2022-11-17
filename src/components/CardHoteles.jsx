import React from 'react'
import { Link as LinkId } from 'react-router-dom'
export default function CardHoteles(props) {
 
  let {name,photo,id, description} = props
    return (
    <div className='cardHoteles' id={id}>
        <img src={photo[0]} alt={name} />
        <div className='cardHotelesInfo'>
            <h3>{name}</h3>
            <p className="showDescription"> {description}</p>
            <LinkId to={`/HotelDetails/${id}`}>
            <button>See more about</button></LinkId>
        </div>
    </div>
  )
}
/* <LinkRoute to="/">
        Home
      </LinkRoute> */