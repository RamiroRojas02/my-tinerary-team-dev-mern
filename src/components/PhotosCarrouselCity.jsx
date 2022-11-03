import React from 'react'
export default function PhotosCarrouselCity(props) {
    let {name}=props
    let {photo}=props
       return (
        <><div className='cardCarrousel'>
      { <img src={photo} alt={name} className="carrouselImg" /> }
      <div className='divP'>{name} </div>
      </div> 
    </> )
  }