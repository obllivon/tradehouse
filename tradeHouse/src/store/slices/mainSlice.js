import {createSlice} from "@reduxjs/toolkit";

    const mainSlice = createSlice ({
        name: 'mainSlice',
        initialState: {
            homes: []
        },
        reducers: {
            getHomes:(state,action)=>{
                state.homes=action.payload
            }
        }
    })
    export const {getHomes} = mainSlice.actions

    export default mainSlice.reducer