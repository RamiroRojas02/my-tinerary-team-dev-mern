import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reactionActions from '../redux/actions/reactionActions'

export default function Reaction(props) {
    let dispatch = useDispatch()
    let {id ,name, photo,quantity, itineraryId, reload, token} = props
    let { updateReactions } = reactionActions
    let values = {
      name,
      idItinerary:itineraryId,
      token
    }

    const clickHandler = () => {
      dispatch(updateReactions(values))
      .then(res=> reload())
    }

  return (
        <div className='reactionDad'>
            <div className='reactionChild' >
                <img src={photo} alt={name} onClick={clickHandler}/>
                <p>{quantity}</p>
             </div>
        </div>
  )
}