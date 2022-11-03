import React from 'react'
import NavBar from './NavBar'
export default function HeaderComponent(props) {
  let {click, nav1} = props

  return (
    <header className='header'>
    <img className='logo' src="/img/My_Tinerary.png" alt="Logo"></img>
    <img onClick={click} className="menuNav" src="/img/colapseBar.png" alt="bar"></img>
    <NavBar naV ={nav1}/>
    
    </header>
  )
}
