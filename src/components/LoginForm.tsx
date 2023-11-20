import React, {FC, useState} from 'react';
import axios from "axios";

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
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [authData, setAuthData] = useState<IAuthData | null>(null)

    const login = async () => {
        await axios.post('http://localhost:5000/api/login', {email: email, password: password})
            .then(
                res => setAuthData(res.data),
                error => console.log(`При выполнении запроса произошла ошибка ${error}`)
            )
    }

    React.useEffect(() => {
        if (authData !== null) {
            console.log(authData)
            localStorage.setItem('accessToken', authData.accessToken)
        }
    }, [authData])

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
            <button onClick={login}>Логин</button>
            <button>Регистрация</button>
        </div>
    );
};

export default LoginForm;