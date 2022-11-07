import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


export default function LoginPage(f) {


  const [credentials, setCredentials] = useState({ username: "", password: "" ,});



  const handleChange = event => {
  
    setCredentials({ ...credentials, [event.target.name]:event.target.value });
    
  }; 

  
  const cargar = (e)=>{
    e.preventDefault()
    console.log(credentials)
      localStorage.setItem("users",JSON.stringify(credentials))
  }
  return (

    <div className="divSignIn">
    
    <h1>Sign In Now!</h1>
    <form className='formSignIn'>
      <div className="inputDiv">
        <label>Username:  <input type= "text" name= "username" placeholder='Username' onChange = {handleChange}/></label>
        
    </div>
      <div className="inputDiv">
      <label>Password: <input type= "password" name= "password" placeholder='***********' /* value= {password} */ onChange = {handleChange}/></label>
        
    </div>
    
    
    <button className="b-b" type= "submit" variant= "primary" onClick={cargar}  >
    
    Log in
    
    </button>
    <button className="g-b" disabled><img className="googleLogo" src="./img/googleLogo.png" alt="google_logo"></img></button>
    
    </form>
    
    </div>)
    }