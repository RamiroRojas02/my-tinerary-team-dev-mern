import React, { useRef, useEffect } from "react";
import apiUrl from "../url";
import axios from "axios";
import { useDispatch } from "react-redux";
import hotelActions from "../redux/actions/hotelsActions";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

import cityActions from "../redux/actions/cityActions";


import Swal from "sweetalert2";




export default function NewHotel() {

  let navigate = useNavigate()
  

  let formNewHotels = useRef(null)
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(cityActions.getCity())
  
  dispatch(hotelActions.getHotels())
  
  
}, [])
let {city} = useSelector(store=> store.city)


let userData = useSelector(store=>store.userReducer)

  
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
        userId:userData.user.id,

        
    }
    let token = JSON.parse(localStorage.getItem('token'))
    axios.post(`${apiUrl}/hotels/`, hotel)
      .then(response =>{

        if (response.data.success) {
          Swal.fire({
            icon: 'success',
            title: `${response.data.messagge}`,
            confirmButtonText: 'Go to the Hotel',
            didClose: ()=>{
              navigate('/HotelDetails/'+ response.data.id )
            }
          })
          
        }else{
          let errors =response.data.messagge
          errors.map(e => 
            Swal.fire({
            icon: 'error',
            title: `Oops something wrong`,
            text: `${e.message}`,
            confirmButtonText: 'Okey',
            
        }))
          
      }
        
      })
      .catch(error =>{

      })

}
  return (
    <div className="newHotelsPage">
      <h1>New Hotel Card</h1>
      <form ref={formNewHotels} >
        <label className="labelNewHotels">
          City Id:
          <select>{city.map(e => (<option key={e._id} value={e._id}>{e.name}</option>))}</select>
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
      </form>
      <button onClick={submitHotels}>Submit Hotel</button>
    </div>
  );
}