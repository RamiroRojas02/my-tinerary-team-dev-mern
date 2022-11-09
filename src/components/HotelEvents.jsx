import React from 'react'

export default function HotelEvents({pictures,names,descrip,date,price}) {
  return (
    <div>
        <div className='divEvents'>
            <h2>Event 1</h2>
            <img src={pictures} alt={names}/>
            <div className='divEventsDescription'>
                <h5>{names}</h5>
                <p>{descrip}</p>
                <p>{date}</p>
                <span>{price}</span>
            </div>
        </div>
        <div className='divEvents'>
            <h2>Event 2</h2>
            <img src={pictures} alt={names}/>
            <div className='divEventsDescription'>
                <h5>{names}</h5>
                <p>{descrip}</p>
                <p>{date}</p>
                <span>{price}</span>
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