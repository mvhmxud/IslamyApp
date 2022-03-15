import { createSlice } from "@reduxjs/toolkit"

export const LoadingSlice = createSlice({
    name : 'loading',
    initialState: {Isloading : false , isError : false},
    reducers :{
        setIsLoadingToFalse(state){
            state.Isloading = false
        },
        setIsLoadingToTrue(state){
            state.Isloading = true
        },
        setIsErrorTotrue(state){
            state.isError = true
        },
        setIsErrorToFalse(state){
            state.isError = false
        }
    } 
})

export const LoadingSliceActions = LoadingSlice.actions

