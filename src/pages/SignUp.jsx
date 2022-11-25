import React, { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/url";
export default function SignUp() {
  let navigate = useNavigate()
  let email = useRef(null);
  let photo = useRef(null);
  let password = useRef(null);
  let name = useRef(null);
  let lastName = useRef(null);
  let age = useRef(null);

  let usersRegister = [];


  let register = (e) => {
    e.preventDefault()
   
  usersRegister = {
    email: email.current.value,
    password: password.current.value,
    name: name.current.value,
    photo: photo.current.value,
    lastName: lastName.current.value,
    age: age.current.value,
  };
    Swal.fire({
      icon: 'question',
      title: '¿Are you sure to register?',
      showConfirmButton: 'true',
      confirmButtonText: 'Yes',
      showCancelButton: 'true',
      cancelButtonText: 'No',
    }).then((result) => { 
       if (result.isConfirmed) { 
        axios.post(`${BASE_URL}/api/auth/SignUp`, usersRegister)
          .then(res => {
            console.log(res);
            if (res.data.success) {
              Swal.fire({
                icon: 'success',
                title: 'User created successfully',
                confirmButtonText: 'Continue',
                             didClose: ()=>{
                               navigate('/SignUp') 
                               email.current.value=""
                               password.current.value=""
                               name.current.value=""
                               photo.current.value=""
                               lastName.current.value=""
                               age.current.value=""
                            }  
              })

            } else {
              let message = (res.data.messagge).map((e) => e.message)
              Swal.fire({

                icon: 'error',
                title: `${message.join("")}`,
                confirmButtonText: 'Try Again'
              })
            }
          })
        } else {
        navigate('/')
    }
 })
}
  



  return (
    <div className="divNotFound">
      <h1>Sign Up!</h1>
      <form id="form" className="formRegister" onSubmit={register}>
        <label className="nameLabel">
          First Name:<input type="text" ref={name} placeholder="First Name"></input>
        </label>
        <label className="lastNameLabel">
          Last Name:<input type="text" ref={lastName} placeholder="Last Name"></input>
        </label>
        <label className="ageLabel">
          Age:<input type="number" ref={age} placeholder="Age"></input>
        </label>
        <label className="photoLabel">
          Photo URL:<input type="text" ref={photo} placeholder="Photo URL"></input>
        </label>
        <label className="emailLabel">
          Email:<input type="email" ref={email} placeholder="Email"></input>
        </label>

        <label className="passwordLabel">
          Password:
          <input type="password" ref={password} placeholder="******"></input>
        </label>

        <input type="submit" className="submitRegister" value="send"/* onClick={register} */></input>
        <button className="btn-google-register" disabled><img className="googleLogo" src="./img/googleLogo.png" alt="google_logo"></img><p>Register with Google</p></button>
      </form>
    </div>
  );
}
