import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './app.reducer'

export const Store = configureStore({
    reducer: {
        appState: appReducer
    }
})