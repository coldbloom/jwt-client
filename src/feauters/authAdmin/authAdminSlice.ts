import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export interface IUser {
    id: string | null;
    email: string | null;
    role: string | null;
    isAuth: boolean;
}

const initialState: IUser = {
    id: null,
    email: null,
    role: null,
    isAuth: false
}

export const login = createAsyncThunk('authAdmin/login', async (credentials: { email: string, password: string}) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/login/`, credentials)
        return response.data
    } catch (error) {
        console.log(`При выполнении запроса произошла ошибка ${error}`);
        throw error; // Прокидываем ошибку дальше, чтобы обработать ее в компоненте
    }
})

export const authAdminSlice = createSlice({
    name: 'authAdmin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log('action payload ', action.payload)
        });

        builder.addCase(login.rejected, (state, action) => {

        });
    }
})

export default authAdminSlice.reducer