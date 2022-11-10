import React, { useRef } from "react";

export default function SignUp() {
  let email = useRef(null);
  let password = useRef(null);
  let user = useRef(null);
  let usersRegister = [];
  let register = (e) => {
    console.log(email.current);
    if (user.current.value === "") {
      console.log(email.current.value);
      return alert("Invalid user");
    } else if (email.current.value === "" /*||email.current.value*/) {
      return alert("Invalid Email");
    } else if (password.current.value === "") {
      return alert("Invalid Password");
    }
    // e.preventDefault();
    usersRegister = JSON.parse(localStorage.getItem("users")) || [];
    usersRegister = usersRegister.concat({
      email: email.current.value,
      password: password.current.value,
      user: user.current.value,
    });

    localStorage.setItem("users", JSON.stringify(usersRegister));
    alert("Registration Successfully");
    
  };

  return (
    <div className="divNotFound">
      <h1>Sign Up!</h1>
      <form className="formRegister">
        <label className="userLabel">
          User:<input type="text" ref={user} placeholder="User"></input>
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
