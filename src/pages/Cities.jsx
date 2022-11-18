import React from 'react'
import Filters from '../components/Filters'
import dataCity from '../api/data-city'
import CityCard from '../components/CityCard'
import { BASE_URL } from '../api/url'
import { useState } from 'react'
export default function Cities() {
  const [cities,setCities]=useState([])
  useEffect(() => {
    axios
      .get(`${BASE_URL}/cities`)
      .then((response) => {
        setCities(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let continents = cities.map((e)=>e.continent)


  const [filtCity,setFiltCity]=useState("")
  function search(e) {
      setFiltCity(e.target.value)
      let query = `${BASE_URL}/api/cities?name=${e.target.value}`
      axios.get(query)
          .then(response => setCities(response.data.response))
          .catch(error => console.log(error))
  }

  return (
    <div className='citiesPage'>
        <FiltersSearch continent={continents}/>
        <div className='cardsCities'>
            {dataCity.map(e => <CityCard name={e.name} photo={e.photo} population= {e.population} id={e.id} key={e.id} continent={e.continent}/>)}
        </div>
    </div>
  )
}
