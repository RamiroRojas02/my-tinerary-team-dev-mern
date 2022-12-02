import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";






const postComment = createAsyncThunk('createComment', async(data)=>{
    let {comment, token} = data
  let header = { headers : { 'Authorization': `Bearer ${token}` }}

    try {
        let res = await axios.post(`${apiUrl}/comment/`,comment ,header)
        return{
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

const commentActions = {
    postComment,
    getComments
}

export default commentActions