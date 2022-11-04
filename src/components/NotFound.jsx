import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

const NotFound=()=> {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/");
    },3000);
  },[]);
  return(<>
    <div className='divNotFound'>
      <img src="./img/error404.png" alt="Error" className='imgNotFound'/>
  </div>
  </>) 
}
export default NotFound;