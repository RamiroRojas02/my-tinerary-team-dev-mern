import axios from 'axios'
import React from 'react'
import FilterSearch from '../components/FilterSearch'
import CityCard from '../components/CityCard'
import { BASE_URL } from '../api/url'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

export default function Cities() {
   const [value, setValue] = useState('')
  const [continent, setContinent] = useState([]) ///array de los continentes checkeados por el usuario
  const dispatch= useDispatch()
  const {getCity,getCityFilter}=cityActions
  const {city} =useSelector((state)=>state.city)//useSelector lee el estado de city desde el store
 let valores ={}
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
   if (city.length === 0) { 
    dispatch(getCity());
   } 
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










  valores = {
    continente: continent.length>1?"&continent="+continent.join("&continent="):"&continent="+continent.join(""),
    value: value
  }
    
  //filtrado por busqueda
  let search = (e) => {
    setValue("&name="+e.target.value)
/*     dispatch(getCityFilter(valores))
    console.log(valores) */
  }


  //filtrado por check
  const valueEvent = (e) => {

    if (e.target.checked) {
      setContinent(continent.concat(e.target.value))
    } else {
      setContinent(continent.filter(checked => checked != e.target.value))
    }
  }
    useEffect(()=>{
    dispatch(getCityFilter(valores))
  },[value,continent])

console.log(valores)
  return (
    <div className='citiesPage'>
      <FilterSearch onChange={valueEvent} search={search} />
      <div className='cardsCities'>
        {city.map((e, index) => <CityCard name={e.name} photo={e.photo} population={e.population} id={e._id} key={index} continent={e.continent} />)}
      </div>
    </div>
  )
}
