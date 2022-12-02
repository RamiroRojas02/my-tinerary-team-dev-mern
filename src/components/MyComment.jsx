import React from 'react'
import { useDispatch } from 'react-redux'
import commentActions from '../redux/actions/commentActions';
import Swal from 'sweetalert2';

export default function MyComment(props) {
    let {userId,id,comment,photo,name,reload} = props
  let dispatch = useDispatch();

    let eliminate = () =>{
        let data = {
            userId,
            id,
            token: JSON.parse(localStorage.getItem('token')) 
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your comment has been deleted.", "success");
                dispatch(commentActions.deleteComments(data))
                
                reload()
            }
          });
        
        
        
        
        
        
        
    }
    let edit = async() =>{
        let currentComment = document.getElementById(id).textContent
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Edit your Comment',
            inputValue:currentComment,
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          if (text) {
            let data = {
            userId,
            id,
            token: JSON.parse(localStorage.getItem('token')),
            comment: text
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, edit it!",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(commentActions.editComment(data))
                Swal.fire("Edited!", "Your comment has been edited.", "success");
                
                
                reload()
            }
          });
    }}
    return (
    <div className='myCommentDiv'>
        <img className='commentImg' src={photo} alt={name}></img>
        <p id={id} className='myComment'>{comment}</p>
        <button onClick={edit}><img src="https://img.icons8.com/ios-glyphs/30/null/pencil--v1.png" alt='edit'/></button>
        <button onClick={eliminate}><img src='https://img.icons8.com/ios-glyphs/30/null/filled-trash.png' alt='delete'></img></button>
        
    </div>
  )
}
