import {createReducer} from '@reduxjs/toolkit'
import commentActions from '../actions/commentActions'
import Swal from 'sweetalert2'



const {postComment,getComments} = commentActions

const initialState ={
    success:false,
    message: "",
    comments: []
}

const commentReducer = createReducer(initialState,(builder)=>{
    builder.addCase(postComment.fulfilled,(state,action)=>{
        console.log(action.payload);
        let {success,messagge} = action.payload
            if (success) {
                Swal.fire("Posted!", "Your comment has been posted.", "success")
            }else{
                Swal.fire('Error!',`${messagge.map(e => e.message)}`,"error")
            }
        return {
            ...state,
            success,
            messagge
            

        }
    })
    builder.addCase(getComments.fulfilled,(state,action)=>{
        console.log(action.payload);
        return {
            ...state,
            comments: action.payload.comments
        }
    })
})



export default commentReducer