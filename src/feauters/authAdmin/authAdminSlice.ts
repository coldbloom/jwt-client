import {createSlice} from '@reduxjs/toolkit'

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

export const authAdminSlice = createSlice({
    name: 'authAdmin',
    initialState,
    reducers: {
        login: (state, action) => {
            
        }
    }
})

export default authAdminSlice.reducer