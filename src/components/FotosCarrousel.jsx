import React from 'react'
export default function FotosCarrousel(props) {
    let {name}=props
    let {photo}=props
       return (
        <><div className='cardCarrousel'>
      { <img src={photo[0]} alt={name} className="carrouselImg" /> }
      <div className='divP'>{name} </div>
      
      </div> 
    </> )
  }