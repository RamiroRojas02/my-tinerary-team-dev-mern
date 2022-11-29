import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from '../api/url' 
import Swal from "sweetalert2";
import { useSelector } from "react-redux";


export default function NewCity() {
  let formNewCity = useRef(null);
  let navigate = useNavigate()
  let userData = useSelector(store=>store.userReducer)
  let submitCity = (e) => {
    let inputs = formNewCity.current;
    e.preventDefault();
    

    let arraysInputs = [...inputs];
    let valueInputs = arraysInputs.map((e) => e.value);

    if (valueInputs.includes("")) {
      return alert("Data Missing");
    }

    let city = {
      name: valueInputs[1],
      continent: valueInputs[0],
      photo: valueInputs[2],
      population: valueInputs[3],
      userId:userData.user.id,
    };

    axios.post(`${BASE_URL}/cities`,city)
    .then(res => {
      
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'City created successfully',
             confirmButtonText: 'Go to the City',
            didClose: ()=>{
               navigate('/CityDetails/'+ res.data.id) 
            } 
          })
        }else{
          let message= (res.data.message).map((e)=>e.message)
          Swal.fire({
            icon: 'error',
            title: `${message.join("")}`,
            confirmButtonText: 'Try Again'
          })
        }
    })
  };
  return (
    <div className="newCityPage">
      <h1>New City Card</h1>
      <form className="formNewCity" ref={formNewCity}>
{/*         <label>
          Id:
          <input type="text"></input>
        </label> */}
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

        
      </form>
      <button onClick={submitCity}>Done</button>
    </div>
  );
}
