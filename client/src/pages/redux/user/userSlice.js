import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentuser:null,
  error: null,
  loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        signinSuccess:(state,action)=>{
         state.currentuser=action.payload;
         state.loading=false;
         state.error=null
        },
        signinFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        updateStart:(state)=>{
            state.loading=true
            state.error=null
        },
        upadateSuccess:(state,action)=>{
            state.currentuser=action.payload
            state.loading=false
            state.error=null

        },
        updateFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        deleteUserStart:(state)=>{
            state.loading=true
            state.error=null
        },
        deleteUserSuccess:(state)=>{
            state.currentuser=null
            state.loading=false
            state.error=null
        },
        deleteUserFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        signoutSuccess:(state)=>{
            state.currentuser=null
            state.loading=false
            state.error=null
        },
    },
})

export const {signoutSuccess,deleteUserStart,deleteUserFailure,deleteUserSuccess,signinStart,signinFailure, signinSuccess,updateStart,upadateSuccess,updateFailure}=userSlice.actions;

export default userSlice.reducer;
