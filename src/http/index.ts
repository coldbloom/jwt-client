import axios, { AxiosInstance } from 'axios';

//AxiosInstance - это тип, предоставляемый библиотекой axios, который представляет собой интерфейс для созданного экземпляра Axios. Он объявляет все методы и свойства, доступные для использования с экземпляром Axios.

const instance: AxiosInstance = axios.create({
    withCredentials: true, // Строка withCredentials: true в создании экземпляра Axios указывает на то, что при отправке HTTP-запросов с использованием этого экземпляра будут включены "cookie" в запросы, если таковые имеются.
    baseURL: 'http://localhost:5000/api', // Замените на ваш базовый URL
});

instance.interceptors.request.use(
    (config) => {
        const accessToken: string | null = sessionStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;