import {createReducer} from '@reduxjs/toolkit'
import commentActions from '../actions/commentActions'
import Swal from 'sweetalert2'



const {postComment,getComments} = commentActions

const initialState ={
    success:false,
    message: "",
    comments: [],
    newComment:[]
}

const commentReducer = createReducer(initialState,(builder)=>{
    builder.addCase(postComment.fulfilled,(state,action)=>{
        console.log(action.payload);
        let {success,messagge,comment} = action.payload
        
            if (success) {
                Swal.fire("Posted!", "Your comment has been posted.", "success")
                
                return {
                    ...state,
                    newComment: comment,            
                    success,
                    messagge
            
        }
            }else{
                Swal.fire('Error!',`${messagge.map(e => e.message)}`,"error")
                
            }
        
    })
    // builder.addCase(getComments.fulfilled,(state,action)=>{
    //     console.log(action.payload);
    //     return {
    //         ...state,
    //         comments: action.payload.comments
    //     }
    // })
})



export default commentReducer