import React from 'react'
import Filters from '../components/Filters'
import dataCity from '../api/data-city'
import CityCard from '../components/CityCard'

export default function Cities() {
  return (
    <div className='citiesPage'>
        <Filters></Filters>
        <div className='cardsCities'>
            {dataCity.map(e => <CityCard name={e.name} photo={e.photo} population= {e.population} id={e.id} key={e.id} continent={e.continent}/>)}
        </div>
    </div>
  )
}
