import React from 'react'

export default function MyReactionsCard(props) {
    {photoItinerary,nameItinerary,photoReaction,nameReaction}
  return (
    <div className='myReactionCardDad'>
      <img src={photoItinerary} alt={nameItinerary}/>
      <p>{nameItinerary}</p>
      <img src={photoReaction} alt={nameReaction} />
      <p>{nameReaction}</p>
    </div>
  )
}
