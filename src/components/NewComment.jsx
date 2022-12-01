import React from 'react'

export default function NewComment() {
  return (
    <div className='NewComment'>
        <img className='imgNewComment' src='...' alt=''></img>
        <input className='newCommentInput' placeholder='Add comment...' type="text"></input>
        <button>Send</button>
        <button>Clear</button>
    </div>
  )
}
