import axios from 'axios'
import React from 'react'
import FilterSearch from '../components/FilterSearch'
import CityCard from '../components/CityCard'
import { BASE_URL } from '../api/url'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

export default function Cities() {
 /*  const [cities, setCities] = useState([])
  const [checkContinent, setCheckContinent] = useState([]) *///array de los continentes checkeados por el usuario
  const dispatch= useDispatch()
  const {getCity,getCityFilter}=cityActions
  const {city} =useSelector((state)=>state.city)


/*   useEffect(() => {
/*     axios
      .get(`${BASE_URL}/api/cities`)
      .then((response) => {
        setCities(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      }); 
      dispatch(getCity())
  }, []);
  console.log(city)
 */
  /* const { continent, value } = useSelector((store) => store.cities); */

/*  let [checkb, setChecked] = useState([])
 let searchInput = useRef() */

 useEffect(() => {
/*   if (city.length === 0) { */
    dispatch(getCity());
/*   } */
}, []);
/* console.log(continent);
console.log(value); */
/* 
let filter = (event) => {
  console.log(event);
  let checks = filterChecks(event);
  console.log(checks);
  let text = searchInput.current.value;
  let urlChecks = checks.map((check) => continent=${check}).join("&");
  dispatch(getCitiesFilter({ continent: urlChecks, value: text }));
};

function filterChecks(event) {
  let arrayCheck = [];
  if (event.target.checked) {
    arrayCheck = [...checkb, event.target.value];
  } else {
    arrayCheck = checkb.filter((e) => e !== event.target.value);
  }
  setChecked(arrayCheck);
  return arrayCheck;
}


 */










  /* let dataSearch ={}
  //filtrado por busqueda
  let search = (e) => {
    dataSearch = e.target.value
    let query = `${BASE_URL}/api/cities?name=${search}&continent=${checkContinent.join("&continent=")}`
    console.log(query)
/*     axios.get(query)
      .then(response => setCities(response.data.response))
      .catch(error => console.log(error)) 
  }



  //filtrado por check
  const valueEvent = (e) => {

    if (e.target.checked) {
      setCheckContinent(checkContinent.concat(e.target.value))
      console.log(checkContinent)

    } else {
      setCheckContinent(checkContinent.filter(checked => checked != e.target.value))
      console.log("se borra")
    }
    console.log(checkContinent)

  }
useEffect(()=>{
  if (checkContinent.length) {
      let continente = checkContinent.join("&continent=")
      let query2 = `${BASE_URL}/api/cities?continent=${continente}`
      console.log(query2)
      axios.get(query2)
        .then(response => setCities(response.data.response))
        .catch(error => console.log(error))
    } },[checkContinent])   */
/*     */
  return (
    <div className='citiesPage'>
{/*       <FilterSearch onChange={valueEvent} search={search} /> */}
      <div className='cardsCities'>
        {city.map((e, index) => <CityCard name={e.name} photo={e.photo} population={e.population} id={e._id} key={index} continent={e.continent} />)}
      </div>
    </div>
  )
}
