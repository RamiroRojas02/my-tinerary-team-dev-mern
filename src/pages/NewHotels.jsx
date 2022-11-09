import React, { useRef } from "react";

export default function NewHotel() {
  let formNewHotels = useRef(null)
  let newHotels=JSON.parse(localStorage.getItem("newHotels"))|| []


  
let submitHotels = (e) =>{

    e.preventDefault()
    let inputs = formNewHotels.current
    let arraysInputs = [...inputs];
    let hotels={
        cityId: arraysInputs[0].value,
        name:arraysInputs[1].value,
        photo: arraysInputs[2].value,
        capacity:arraysInputs[3].value,
        description: arraysInputs[4].value,
        userId:arraysInputs[1].value,
    }
    newHotels=newHotels.concat(hotels)
    localStorage.setItem("newHotels",JSON.stringify(newHotels))
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
      <button onClick={submitHotels} >Submit Hotel</button>
    </div>
  );
}