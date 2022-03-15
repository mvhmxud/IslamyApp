import { createSlice } from "@reduxjs/toolkit"

export const TranslationSLice = createSlice({
    name : 'player',
    initialState: {isArabic : true},
    reducers :{
        changeLanguage(state){
            state.isArabic = !state.isArabic
            
        },
       
    } 
})

export const TranslationSliceActions = TranslationSLice.actions
