import React from 'react'
import dataCity from '../api/data-city'
import datosHoteles from '../api/data-hoteles'
import datosEventos from '../api/data-hoteles-eventos'


import FotosCarrousel from './FotosCarrousel'
import PhotosCarrouselCity from './PhotosCarrouselCity'
export default function Carrousel({estilo1,children,estilo2,estilo3,change,change2}) {
    return (<> 
      <div className='home2'>
      <h2>Cities and Hotels whith events</h2>
      <div className={` ${estilo1} `}>
        
      <img className='imgLogo' src="./img/chevrons-left-solid-36.png" onClick={change2}/>
      <FotosCarrousel name={datosHoteles[0].name} photo={datosHoteles[0].photo}/>
      <FotosCarrousel name={datosHoteles[1].name} photo={datosHoteles[1].photo}/>
      <FotosCarrousel name={datosHoteles[2].name} photo={datosHoteles[2].photo}/>
      <FotosCarrousel name={datosHoteles[3].name} photo={datosHoteles[3].photo}/>            
      <img className='imgLogo' src="./img/chevrons-right-solid-36.png" onClick={change}/>
      </div>
      <div  className={` ${estilo2}  `}>
      <img className='imgLogo' src="./img/chevrons-left-solid-36.png" onClick={change2}/>
      <PhotosCarrouselCity name={dataCity[0].name} photo={dataCity[0].photo}/>
      <PhotosCarrouselCity name={dataCity[1].name} photo={dataCity[1].photo}/>
      <PhotosCarrouselCity name={dataCity[2].name} photo={dataCity[2].photo}/>
      <PhotosCarrouselCity name={dataCity[3].name} photo={dataCity[3].photo}/>            
      <img className='imgLogo' src="./img/chevrons-right-solid-36.png" onClick={change}/>
      </div>
      <div className={`${estilo3}`}>
      <img className='imgLogo' src="./img/chevrons-left-solid-36.png" onClick={change2}/>
      <PhotosCarrouselCity name={datosEventos[0].name} photo={datosEventos[0].photo}/>
      <PhotosCarrouselCity name={datosEventos[1].name} photo={datosEventos[1].photo}/>
      <PhotosCarrouselCity name={datosEventos[2].name} photo={datosEventos[2].photo}/>
      <PhotosCarrouselCity name={datosEventos[3].name} photo={datosEventos[3].photo}/>            
      <div className='imgLogoContainer'><img className='imgLogo' src="./img/chevrons-right-solid-36.png" onClick={change}/></div>
      </div>
      {children}
      </div>
  </> )
}
