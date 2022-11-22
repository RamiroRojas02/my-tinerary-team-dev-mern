import React, { useRef } from "react";
import axios from 'axios';
import {BASE_URL} from '../api/url' 
export default function NewCity() {
  let formNewCity = useRef(null);
 /*  let newCities = JSON.parse(localStorage.getItem("newCities")) || []; */

  let submitCity = (e) => {
    let inputs = formNewCity.current;
    e.preventDefault();

    let arraysInputs = [...inputs];
    let valueInputs = arraysInputs.map((e) => e.value);
    console.log(valueInputs);
    if (valueInputs.includes("")) {
      return alert("Data Missing");
    }

    let city = {
      name: valueInputs[2],
      continent: valueInputs[1],
      photo: valueInputs[3],
      population: valueInputs[4],
      userId: valueInputs[5],
    };
    axios.post(`${BASE_URL}/api/cities`,city)
    .then(res => {
        console.log(res);
    })
/*     localStorage.setItem("newCities", JSON.stringify(newCities)); */
    alert("City Loaded");
  };
  return (
    <div className="newCityPage">
      <h1>New City Card</h1>
      <form className="formNewCity" ref={formNewCity}>
        <label>
          Id:
          <input type="text"></input>
        </label>
        <label>
          Continent:
          <input type="text"></input>
        </label>
        <label>
          Name:
          <input type="text"></input>
        </label>

        <label>
          Photo:
          <input type="url"></input>
        </label>

        <label>
          Population:
          <input type="number"></input>
        </label>

        <label>
          UserId-Admin:
          <input type="text"></input>
        </label>
      </form>
      <button onClick={submitCity}>Done</button>
    </div>
  );
}
