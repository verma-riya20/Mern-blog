/*import { configureStore, createSlice,combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import userReducer from './user/userSlice'
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState={
    theme:'light',

}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.theme=state.theme==='light '?'dark':'light'        }
    },
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({

})*/
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;