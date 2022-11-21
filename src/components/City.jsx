import React from 'react'

export default function City(props) {
    let {name,photo} = props
    
  return (
    <div className='detailCityCard' >
        <h4>{name}</h4>
        <img className='detailsCityImg' src={photo} alt={name}></img> 
    </div>
  )
}
