import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./utilities/actionSlice.jsx";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, actionSlice)
export const store=  configureStore(
    {
        reducer: {
            action:persistedReducer
        },
    }
)

export const persistor = persistStore(store);
