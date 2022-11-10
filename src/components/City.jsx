import React from 'react'

export default function City(props) {
    let {continent,name,photo,population,} = props
    
  return (
    <div className='detailCityCard' >
        <h4>{name}</h4>
        <img className='detailsCityImg' src={photo} alt={name}></img>
        <div className='descriptionCity'>
            <h5>Continent: {continent}</h5>
            <h5>Population: {population}</h5>

        </div> 
    </div>
  )
}
