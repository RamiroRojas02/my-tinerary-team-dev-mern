import React, { useEffect,useRef } from "react";


import { useDispatch, useSelector } from "react-redux";

import hotelActions from "../redux/actions/hotelsActions";
import MyHotelCard from "../components/MyHotelCard";
import cityActions from "../redux/actions/cityActions";

import Swal from "sweetalert2";
import axios from "axios";

import apiUrl from "../url";
import { useNavigate } from "react-router-dom";



export default function MyHotels() {
  let hotels = useSelector(store => store.hotelsReducer)



  let userData = useSelector(store=>store.userReducer)

  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(hotelActions.getMyHotels(userData.user.id))


    }, []);
    let myHotels= hotels.listHotels


  


  return (
    <div className='myPage'>
        <h1>My Hotels</h1>
        <div className='myContainer'>{myHotels.length === 0 ? <h2>You don't have Hotels</h2>: myHotels.map(e => <MyHotelCard key={e._id} id={e._id} name={e.name} img={e.photo[0]} />) }</div>
    </div>
  )
}
