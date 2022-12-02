import React, {useRef,useEffect,useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import commentActions from '../redux/actions/commentActions';
import Swal from 'sweetalert2';

export default function NewComment(props) {
    let {idShow,reload} = props
    let { user } = useSelector((store) => store.userReducer);

    const newComent = useRef(null)

    const dispatch = useDispatch() 
    
      
    
    const send =  (() =>{
        let valueInput= newComent.current.value
        
        let currentDate = new Date()
        let today = currentDate.toString()
        
        
        let comment = {
            userId: user.id,
            showId: idShow,
            date:  today ,
            comment: valueInput
        }
        let data ={
            comment,
            token : JSON.parse(localStorage.getItem('token')) 
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You wanna post that?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, post it!",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(commentActions.postComment(data))
                newComent.current.value = ''
                reload()
            }
          });
        
    })
    const reset =()=>{
        let valueInput= newComent.current
        valueInput.value = ''
    }
  return (
    <div className='NewComment'>
        <img className='imgNewComment' src={user.photo} alt={user.name}></img>
        <input className='newCommentInput' id='comentInput'  ref={newComent} placeholder='Add comment...' type="text"></input>
        <button onClick={send}>Send</button>
        <button onClick={reset}>Clear</button>
    </div>
  )
}
