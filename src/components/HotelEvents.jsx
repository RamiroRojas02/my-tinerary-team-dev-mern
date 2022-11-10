import React from 'react'

export default function HotelEvents({pictures,names,descrip,date,price,id}) {
  return (
    <div className='divHotelEvents'>
        <div className='divEvents'>
            <div className='divEventsImg'>
            <img src={pictures} alt={names}/></div>
            <div className='divEventsDescription'>
                <h5>{names}</h5>
                <p className='pDescription'>{descrip}</p>
                <p>{date}</p>
                <span>Price $ {price}</span>
            </div>
        </div>
</div>
  )
}


/* name: "Barcelona vs Real Madrid",
        description:"this war clash between the two most emblematic soccer teams in Spain",
        photo:"https://artwork.espncdn.com/programs/73d0b1c2-88ab-4b12-963e-3bf6bce5dc8b/16x9/1280x720_20221012150246.jpg",
        price:1559,
        date :2022-12-12, */