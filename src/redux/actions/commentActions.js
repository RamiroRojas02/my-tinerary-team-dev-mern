import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import apiUrl from "../../url";






const postComment = createAsyncThunk('createComment', async(data)=>{
    let {comment, token} = data
  let header = { headers : { 'Authorization': `Bearer ${token}` }}

    try {
        let res = await axios.post(`${apiUrl}/comment/`,comment ,header)
        console.log(res);
        return{
            comment: res.data.id,
            success: res.data.success,
            messagge: res.data.messagge
        }
    } catch (error) {
        return error
    }
})
const getComments = createAsyncThunk('getComments',async(id)=>{
    try {
        let res = await axios.get(`${apiUrl}/comment/?showId=${id}`)
        // console.log(res);
        return{
            comments: res.data.comments,
            success: res.data.success
        }
    } catch (error) {
        return error
    }
})
const deleteComments = createAsyncThunk('fulminateComment',async(data)=>{
    let {id,token} = data
    let header = { headers : { 'Authorization': `Bearer ${token}` }}
    
      let res = await axios.delete(`${apiUrl}/comment/${id}`,header)
            return{
                success: res.data.success
            }
    
})
const editComment = createAsyncThunk('editComment',async(data)=>{
    let {id,token,comment} = data
    let newComment = {
        comment
    }
    
    let header = { headers : { 'Authorization': `Bearer ${token}` }}
    let res = await axios.put(`${apiUrl}/comment/${id}`,newComment,header)
    return{
        success: res.data.succes
    }


})

const commentActions = {
    postComment,
    getComments,
    deleteComments,
    editComment
}

export default commentActions