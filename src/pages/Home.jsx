import React from "react";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../url";
import { useDispatch, useSelector } from "react-redux";

export default function Home(props) {
  const [hotelsState ,setState]=  useState([])
  let { user } = useSelector((store) => store.userReducer);
  // console.log(user);
  useEffect( () => {
    axios.get(`${apiUrl}/hotels`)
    .then( response => {
      setState(response.data.response)
      
      
      
      
    })
    .catch(err =>{
      console.log(err);
    })
    

}, [])
  // console.log(hotelsState);
  return (
    <div className="layoutHome">
      <Home1 hotel={hotelsState}/>
      <Home2 hotel={hotelsState} />
    </div>
  );
}
