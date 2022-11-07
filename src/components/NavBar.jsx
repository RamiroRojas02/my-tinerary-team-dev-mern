import React from 'react'

export default function NavBar({naV}) {
  return (
    <nav className={`${naV}`} >
        <a href='/'>Home</a>
        <a href='/Hotels'>Hotel</a>
        <a href='/Cities'>City</a>
        <a href="/NewHotel">New Hotel</a>
        <a href="/NewCity">New City</a>
    </nav>
  )
}
