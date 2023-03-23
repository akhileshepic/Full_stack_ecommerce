import { createSlice } from "@reduxjs/toolkit";

const initialState={
    navberHamburger:false,
   
}

export const LayoutSlice =createSlice({
    name:'layout',
    initialState,
    reducers:{
        hamburgerToggle:(state,action)=>{
         return{
            ...state,
            navberHamburger:action.payload
         }
        }
    }
})


export const {hamburgerToggle} = LayoutSlice.actions;

export default LayoutSlice.reducer;