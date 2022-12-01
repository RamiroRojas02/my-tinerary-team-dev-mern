import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Reaction(props) {
    let {id,name,onClick,photo,quantity} = props

  return (
        <div className='reactionDad'>
            <div className='reactionChild' >
                <img src={photo} onClick={onClick} alt={name}/>
                <p>{quantity}</p>
             </div>
        </div>
  )
}
