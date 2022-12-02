import React from 'react'

export default function Comment(props) {
    let {comment,photo,name}= props
  return (
    <div className='comments'>
        <img className='commentImg' src={photo} alt={name}></img>
        <p className='Comment'>{comment}</p>
    </div>
  )
}
