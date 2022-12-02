import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { useSelector } from 'react-redux'




export default function NavBar({ naV }) {
 
  const [userRole,setUserRole]=useState()
  let {user,logged,token} = useSelector(store=> store.userReducer)
  useEffect(()=>{ 
     if(user.role==="admin"){
    setUserRole(true)
  } else if(user.role==="user"){
    setUserRole(false)
  }else{
    setUserRole(null)
  }
},[user])
// console.log(userRole)
  return (
    <nav className={`${naV}`}>
      
      {userRole===null?
        <>
      <LinkRoute to="/">
        Home
      </LinkRoute>
      <LinkRoute to="/Hotels">
        Hotel
      </LinkRoute>
      <LinkRoute to="/Cities">
        City
      </LinkRoute>
      </>
      :userRole?<>
            <LinkRoute to="/">
        Home
      </LinkRoute>
      <LinkRoute to="/Hotels">
        Hotel
      </LinkRoute>
      <LinkRoute to="/Cities">
        City
      </LinkRoute>
      <LinkRoute to="/NewHotel">
        New Hotel
      </LinkRoute>
      <LinkRoute to="/NewCity">
        New City
      </LinkRoute>
      <LinkRoute to="/MyHotels">
        My Hotels
      </LinkRoute>
      <LinkRoute to="/MyCities">
        My Cities
      </LinkRoute>
      <LinkRoute to="/MyShows">
        My Shows
      </LinkRoute>
      <LinkRoute to="/MyItineraries">
        My Itineraries
      </LinkRoute>
      <LinkRoute to="/NewReaction">
        New Reactions
      </LinkRoute>
      </>
      :<>
      <LinkRoute to="/">
        Home
      </LinkRoute>
      <LinkRoute to="/Hotels">
        Hotel
      </LinkRoute>
      <LinkRoute to="/Cities">
        City
      </LinkRoute>
      <LinkRoute to="/MyShows">
        My Shows
      </LinkRoute>
      <LinkRoute to="/MyItineraries">
        My Itineraries
      </LinkRoute>
      </>
      }
    </nav>
  );
}
