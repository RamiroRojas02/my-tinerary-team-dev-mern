import React from 'react'

export default function CardDetailsHoteles({displays,photos,names,descriptions,capacities}) {
  return (
    <div>
        <img className={displays} src={photos[0]} alt={names} />
        <img className={displays} src={photos[1]} alt={names} />
        <img className={displays} src={photos[2]} alt={names} />
        <div>
            <h4>{names}</h4>
            <p>{descriptions}</p>
            <p>{capacities}</p>
        </div>
    </div>
  )
}




