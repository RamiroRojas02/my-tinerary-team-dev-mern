import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";


const signIn = createAsyncThunk('signIn', async (data)=>{


    try {
        let user = await axios.post(`${apiUrl}/auth/signin`,data)   
        if (user.data.success) {
            console.log(user.data);
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

const getMyProfile = createAsyncThunk('My user Profile',async(data)=>{
    let {token,id} = data
    console.log(data);
    let header = { headers : { 'Authorization': `Bearer ${token}` }}
    
    try {
        let {data} = await axios.get(`${apiUrl}/auth/me/${id}`,header)
        return {
            myUser: {
                name: data.myUser[0].name,
                lastName: data.myUser[0].lastName,
                age: data.myUser[0].age,
                email: data.myUser[0].email,
                photo: data.myUser[0].photo ,

            },
            success: data.success
        }
    } catch (error) {
    

    }
})
const signOut = createAsyncThunk('SignOut', async(token)=>{
    let url = `${apiUrl}/auth/sign-out`
    let headers= {headers:{'Authorization' :`Bearer ${token}`}}
    try{
        let user = await axios.put(url,null,headers)

        return{
            success:true,
            response:user.data.message
        }
    }catch(error){
        return{
            success: false,
            response:error.response.data.message
        }
    }
})
const updateMyProfile = createAsyncThunk('Update Profile', async(data)=>{
    let {user , id,token} = data
    let headers= {headers:{'Authorization' :`Bearer ${token}`}}

    try {
        let res = await axios.patch(`${apiUrl}/auth/me/${id}`, user,headers)
        return {
            myUser : res.data.newUser,
            success:true
        }
    } catch (error) {
        return {
            message: error
        }
    }
})

const userActions = {
    signIn,
    signInToken,
    getMyProfile,
    updateMyProfile,
    signOut
}

export default userActions