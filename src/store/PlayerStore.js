import { createSlice } from "@reduxjs/toolkit"

export const PlayerSlice = createSlice({
    name : 'player',
    initialState: {currentSurah : {name: [
        {
          id: 0,
          name: ' ',
          transliteration: ' '
        }
      ] , src : ''}},
    reducers :{
        SetCurrentSurah(state , actions){
            state.currentSurah = actions.payload
        }
    } 
})

export const PlayerSliceActions = PlayerSlice.actions

