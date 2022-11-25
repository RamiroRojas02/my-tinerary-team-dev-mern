import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";

import showActions from "../redux/actions/showsActions";
import MyShowCard from "../components/MyShowCard";


export default function MyHotels() {
    let shows = useSelector(store => store.showsReducer)
    console.log(shows);
    console.log(showActions);
    const dispatch = useDispatch()
        useEffect(() => {
            dispatch(showActions.getMyShows("6372494878cf1c151a1a4f67"))
        }, []);
        
    let myShows= shows.listShows


  return (
    <div className='myPage'>
        <h1>My Shows</h1>
        <div className='myContainer'>{myShows.length === 0 ? <h2>You don't have Shows</h2>: myShows.map(e => <MyShowCard key={e._id} id={e._id} name={e.name} img={e.photo} />) }</div>
    </div>
  )
}