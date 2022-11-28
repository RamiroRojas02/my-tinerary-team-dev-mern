import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";


const signIn = createAsyncThunk('signIn', async (data)=>{

    console.log(data);
    try {
        let user = await axios.post(`${apiUrl}/auth/signin`,data)   
        if (user.data.success) {
            console.log(user);
            return{
                success:true,
                response: user.data.response,
                message: user.data.message
            }
        }else{
            return{
                success:true,
                response: user.data.message 
            }
        }
    } catch (error) {
        return {
            success:false,
            response: error.response.data
        }
    }
})

const signInToken = createAsyncThunk( 'signInToken',async(token)=>{
    let header = { headers : { 'Authorization': `Bearer ${token}` }}
    try {
        let userIn = await axios.post(`${apiUrl}/auth/token`,null, header) 
        return{
            success:true,
            response: userIn.data.response,
            token:token
        }
    } catch (error) {
        
        return {
            success:false,
            response: error
        }
    }

})

const userActions = {
    signIn,
    signInToken

}

export default userActions