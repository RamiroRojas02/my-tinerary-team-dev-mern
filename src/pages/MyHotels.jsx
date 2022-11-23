import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";

import hotelActions from "../redux/actions/hotelsActions";
import MyHotelCard from "../components/MyHotelCard";


export default function MyHotels() {
  let hotels = useSelector(store => store.hotelsReducer)
  

  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(hotelActions.getMyHotels("6372494878cf1c151a1a4f67"))
    }, []);
    let myHotels= hotels.listHotels



  return (
    <div className='myPage'>
        <h1>My Hotels</h1>
        <div className='myContainer'>{myHotels.length === 0 ? <h2>You don't have Hotels</h2>: myHotels.map(e => <MyHotelCard key={e._id} id={e._id} name={e.name} img={e.photo[0]} />) }</div>
    </div>
  )
}
