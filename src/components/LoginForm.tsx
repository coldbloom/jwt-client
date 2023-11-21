import React, {FC, useState} from 'react';
import axios from "axios";

import instance from "../http/index";
import {useDispatch} from "react-redux";
import {login} from "../feauters/authAdmin/authAdminSlice";

interface IAuthData {
    accessToken: string;
    refreshToken: string;
    user: {
        email: string;
        id: string;
        role: string;
    }
}

const LoginForm: FC = () => {
    const dispatch = useDispatch<any>();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [authData, setAuthData] = useState<IAuthData | null>(null)

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }

    // const login = async () => {
    //     await axios.post('http://localhost:5000/api/login', {email: email, password: password})
    //         .then(
    //             res => setAuthData(res.data),
    //             error => console.log(`При выполнении запроса произошла ошибка ${error}`)
    //         )
    // }

    // React.useEffect(() => {
    //     if (authData !== null) {
    //         console.log(authData)
    //         localStorage.setItem('accessToken', authData.accessToken)
    //     }
    // }, [authData])

    const getUsers = async () => {
        await instance.get('/users/')
            .then(
                res => console.log(res.data),
                error => console.log(error)
            )
    }

    const testRequest = async () => {
        await axios.get('http://localhost:5000/api/test')
            .then(
                res => console.log(res.data),
                error => console.log(error)
            )
    }

    const testRequest2 = async () => {
        await instance.get('/test')
            .then(
                res => console.log(res.data),
                error => console.log(error)
            )
    }

    return (
        <div>
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Логин</button>
            <button>Регистрация</button>
            <button onClick={getUsers}>Запрос доступный авторизованому юзеру</button>
            <button onClick={testRequest}>Test request</button>
            <button onClick={testRequest2}>Test request</button>
        </div>
    );
};

export default LoginForm;