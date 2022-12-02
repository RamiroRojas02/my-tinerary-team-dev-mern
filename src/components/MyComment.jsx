import React from 'react'

export default function MyComment(props) {
    let {comment,photo,name} = props
  return (
    <div className='myComment'>
        <img className='commentImg' src={photo} alt={name}></img>
        <p>{comment}</p>
        <button><img src="https://img.icons8.com/ios-glyphs/30/null/pencil--v1.png" alt='edit'/></button>
        <button><img src='https://img.icons8.com/ios-glyphs/30/null/filled-trash.png' alt='delete'></img></button>
        
    </div>
  )
}
