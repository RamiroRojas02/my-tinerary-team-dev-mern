import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import City from "../components/City";
import { BASE_URL } from '../api/url'
import axios from "axios";
import ComentSection from "../components/ComentSection"
import Tinerary from "../components/Tinerary"

export default function CityDetails() {
  let [city, setCity] = useState([])
  let [itineraries,setItineraries]=useState([])
  let {id} = useParams()

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cities/${id}`)
      .then((response) => {
        setCity(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/itineraries?cityId=${id}`)
      .then((response) => {
        setItineraries(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


/*   let city = dataCity.filter((e) => e.id === id); */
/*   let activities = dataCityActivities.filter((e) => e.citiId === id); */

  let [comentState, setComentState] = useState("coment-collapse");
  let coments = () => {
    if (comentState === "coment-collapse") {
      setComentState("coment-expand");
    } else {
      setComentState("coment-collapse");
    }
  };

  return (
    <div className="cityDetails">
      <City
        name={city.name}
        photo={city.photo}
      />

       <ComentSection event={coments} state={comentState} />
      <h2>Tinerary</h2>
      <div className="cityTinerary">
        {itineraries.length ? (
          itineraries.map((e) => (
            <Tinerary
              description={e.description}
              price={e.price}
              duration={e.duration}
              photo={e.photo}
              name={e.name}
              key={e.id}
            />
          )) 
        ) : (
          <h4>No Tinerary</h4>
        )}
      </div>
    </div>
  );
}
