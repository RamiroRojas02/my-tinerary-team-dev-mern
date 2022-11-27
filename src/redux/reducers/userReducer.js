import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";


const {signIn,signInToken}= userActions


const initialState ={
    user:{},
    token: "",
    message:""
}

const userReducer= createReducer(initialState,(builder) =>{
    builder.addCase(signIn.fulfilled,(state,action)=>{
        let {success, response,message} = action.payload
        if(success){
            let {user,token}= response
            console.log(action.payload);

            localStorage.setItem('token', JSON.stringify(token))

            return{
                ...state,
                user: user,
                token: token,
                success:true,
                message:message
            }


        }else{
            console.log(response);
            return{
                ...state,
                success:false,
                message: response.message
            }
        }

})
    builder.addCase(signInToken.fulfilled,(state,action)=>{
        console.log(action.payload);
    })
}
)

export default userReducer