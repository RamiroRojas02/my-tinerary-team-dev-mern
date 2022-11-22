import React, { useRef } from "react";

export default function SignUp() {
  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);
  let lastName = useRef(null);
  let age = useRef(null);

  let usersRegister = [];
  let register = () => {
    if (name.current.value === "") {
      console.log(email.current.value);
      return alert("Invalid name");
    } else if (email.current.value === "" /*||email.current.value*/) {
      return alert("Invalid Email");
    } else if (password.current.value === "") {
      return alert("Invalid Password");
    } else if (lastName.current.value === "") {
      return alert("Invalid LastName");
      
    }else if(age.current.value=== "" || age.current.value < 18){
      return alert("Invalid Age");

    }
    usersRegister = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
    };

    localStorage.setItem("users", JSON.stringify(usersRegister));
    alert("Registration Successfully");
    
  };

  return (
    <div className="divNotFound">
      <h1>Sign Up!</h1>
      <form className="formRegister">
        <label className="NameLabel">
          Name:<input type="text" ref={name} placeholder="Name"></input>
        </label>
        <label className="LastNameLabel">
          Last Name:<input type="text" ref={lastName} placeholder="Last Name"></input>
        </label>
        <label className="LastNameLabel">
          Age:<input type="number" ref={age} placeholder="Last Name"></input>
        </label>

        <label className="emailLabel">
          Email:<input type="email" ref={email} placeholder="Email"></input>
        </label>

        <label className="passwordLabel">
          Password:
          <input type="password" ref={password} placeholder="******"></input>
        </label>

        <button className="submitRegister" onClick={register}>Submit</button>
        <button className="btn-google-register" disabled><img className="googleLogo" src="./img/googleLogo.png" alt="google_logo"></img><p>Register with Google</p></button>
      </form>
    </div>
  );
}
