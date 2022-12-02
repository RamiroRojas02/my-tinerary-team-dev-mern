import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import userActions from "../redux/actions/userActions";

export default function LoginPage() {
  // let user = useSelector((store) => store.userReducer);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  // console.log(user);
  
  const cargar = async(e) => {
    e.preventDefault();
    try {
    
    let userSign = await dispatch(userActions.signIn(credentials));
    let {message,success,response} = userSign.payload

    let {user} = response
      if (success) {
      Swal.fire({
        title: "Sweet!",
        text: `${message}`,
        imageUrl: `${user.photo}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `Photo ${user.name}`,
        didClose: ()=>{
          navigate('/')
        }
      })
      
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${response.message}`,
      });
    }
    } catch (error) {
      
    }
    
  };
  return (
    <div className="divSignIn">
      <h1>Sign In Now!</h1>
      <form className="formSignIn">
        <div className="inputDiv">
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputDiv">
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              placeholder="***********"
              /* value= {password} */ onChange={handleChange}
            />
          </label>
        </div>

        <button
          className="b-b"
          type="submit"
          variant="primary"
          onClick={cargar}
        >
          Log in
        </button>
        <button className="g-b" disabled>
          <img
            className="googleLogo"
            src="./img/googleLogo.png"
            alt="google_logo"
          ></img>
        </button>
      </form>
    </div>
  );
}
