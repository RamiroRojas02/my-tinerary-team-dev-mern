import axios from 'axios'
import React from 'react'
import FilterSearch from '../components/FilterSearch'
import dataCity from '../api/data-city'
import CityCard from '../components/CityCard'
import { BASE_URL } from '../api/url'
import { useState, useEffect } from 'react'



export default function Cities() {
  const [cities, setCities] = useState([])
  const [checkContinent, setCheckContinent] = useState([])//array de los continentes checkeados por el usuario
  const [filtCity, setFiltCity] = useState("")//palabrita que se va a filtrar 
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cities`)
      .then((response) => {
        setCities(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let continents = cities.map((e) => e.continent)
  //filtrado por busqueda
  let search = (e) => {
    let search = e.target.value
    setFiltCity(search)
    let query = `${BASE_URL}/api/cities?name=${search}}`
    axios.get(query)
      .then(response => setCities(response.data.response))
      .catch(error => console.log(error))
  }



  //filtrado por check
  const valueEvent = (e) => {

    if (e.target.checked) {
      setCheckContinent(checkContinent.concat(e.target.id))

    } else {
      setCheckContinent(checkContinent.filter(checked => checked != e.target.id))

    }
    console.log(checkContinent.join("&continent="))
    
    let continente = checkContinent.join("&continent=")
    axios.get(`${BASE_URL}/api/cities?continent=${continente}`)
      .then(response => response.data.response)
      .catch(error => console.log(error))
  }

  return (
    <div className='citiesPage'>
      <FilterSearch onChange={valueEvent} continent={continents} search={search} />
      <div className='cardsCities'>
        {cities.map((e, index) => <CityCard name={e.name} photo={e.photo} population={e.population} id={e.id} key={index} continent={e.continent} />)}
      </div>
    </div>
  )
}
