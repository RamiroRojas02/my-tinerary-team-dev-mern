import React from 'react'

export default function NavBar({naV}) {
  return (
    <nav className={`${naV}`} >
        <a href='/'>Home</a>
        <a href='/'>Hotel</a>
        <a href='/Cities'>City</a>


    </nav>
  )
}
