import React from "react";
import NavBar from "./NavBar";
import { Link as LinkRoute, Navigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from "react";
import userActions from "../redux/actions/userActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function HeaderComponent(props) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let {logged,token,user} = useSelector(store=> store.userReducer)
  let { clickNav, nav1, userState, clickUser } = props;
  let {signOut}=userActions
  const [loggedT,setLoggedT]=useState()
  useEffect(()=>{ 
    if(logged===true){
   setLoggedT(true)
 } else if(logged===false){
   setLoggedT(false)
 }
},[logged])
console.log(user)


async function logOut (event){
  Swal.fire({
    title: 'Do you want to Sign Out?',
    text: "You will need to Sign In again!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Sign Out!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Signed Out!'
      )
      dispatch(signOut(token))
      navigate('/')
    }
  })
}


  return (
    <header className="header">
      {loggedT?
        <>
      <div className="userData">
       <img
        onClick={clickUser}
        className="user"
        src={user.photo}
        alt={user.name}
      ></img>
      <p>{user.name}</p>
      </div>
      </>
      :
      <>
      <img
        onClick={clickUser}
        className="user"
        src="/img/user-circle-solid-240.png"
        alt="user"
      ></img></>
      }
      <div className={userState}>
        {loggedT===false?
        <>
        <LinkRoute to="/SignIn">
          Sign in
        </LinkRoute>
        <LinkRoute to="/SignUp">
          Sign Up
        </LinkRoute>
        </>
        :
        <div className="userButtons">
          <button className="myProfileBtn" onClick={()=>{navigate('/MyProfile')}}>My Profile</button>
          <div className="logOutButton" onClick={()=>logOut(token)}>Sign Out</div>
        
        </div>
        
        }
        
      </div>
      <img className="logo" src="/img/My_Tinerary.png" alt="Logo"></img>
      <img
        onClick={clickNav}
        className="menuNav"
        src="/img/colapseBar.png"
        alt="bar"
      ></img>

      <NavBar naV={nav1} />
    </header>
  );
}
