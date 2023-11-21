import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../feauters/counter/counterSlice'
import authAdminReducer from '../feauters/authAdmin/authAdminSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        authAdmin: authAdminReducer
    },
})