import React from 'react'
export default function CardHoteles({id,photo,name,description}) {
    return (
    <div className='cardHoteles' key={id}>
        <img src={photo} alt={name} />
        <div className='cardHotelesInfo'>
            <h3>{name}</h3>
            <p className="showDescription">{description}</p>
            <button>See more about</button>
        </div>
    </div>
  )
}
