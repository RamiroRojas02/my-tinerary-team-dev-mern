import React, { useRef } from "react";
import apiUrl from "../url";
import axios from "axios";
// import { useEffect } from "react";

export default function NewHotel() {
  let formNewHotels = useRef(null)



  
let submitHotels = (e) =>{
    
    e.preventDefault()
    let inputs = formNewHotels.current
    let arraysInputs = [...inputs];
    let hotel={
        cityId: arraysInputs[0].value,
        name:arraysInputs[1].value,
        photo: [arraysInputs[2].value],
        capacity:arraysInputs[3].value,
        description: arraysInputs[4].value,
        userId:arraysInputs[5].value,

        
    }
    console.log(hotel);
    axios.post(apiUrl + '/hotels/', hotel)
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })

}
  return (
    <div className="newHotelsPage">
      <h1>New Hotel Card</h1>
      <form ref={formNewHotels} >
        <label className="labelNewHotels">
          City Id:
          <input type="text"></input>
        </label>
        <label className="labelNewHotels">
          Name:
          <input type="text"></input>
        </label>

        <label className="labelNewHotels">
          Photo:
          <input type="url"></input>
        </label>

        <label className="labelNewHotels">
          Capacity:
          <input type="number"></input>
        </label>

        <label className="labelNewHotels">
          Description:
          <input type="text"></input>
        </label>

        <label className="labelNewHotels">
          User Id:
          <input type="text"></input>
        </label>
      </form>
      <button onClick={submitHotels}>Submit Hotel</button>
    </div>
  );
}