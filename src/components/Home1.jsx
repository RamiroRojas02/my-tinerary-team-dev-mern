import React from 'react'
import CallToAction from './CallToAction'
import LogoSlogan from './LogoSlogan'

import dataCity from '../api/data-city'
import datosHoteles from '../api/data-hoteles'

export default function Home1() {
    
  return (
    <div className='Home1'>
        <LogoSlogan></LogoSlogan>
        <div className='sectionHome1'>
            <CallToAction  section="Cities" image={dataCity[0].photo} name={dataCity[0].name} />
            <CallToAction  section="Hotels" image={datosHoteles[0].photo[0]} name={datosHoteles[0].name}/>
        </div>
    </div>
  )
}
