import {configureStore} from '@reduxjs/toolkit'
import { LoadingSlice } from './LoadingSlice';
import { PlayerSlice } from './PlayerStore';
import { TranslationSLice } from './TranslationSLice';

const store =configureStore({
    reducer:{LoadingSlice : LoadingSlice.reducer , PlayerSlice : PlayerSlice.reducer , TranslationSLice : TranslationSLice.reducer}
})

export default store ;