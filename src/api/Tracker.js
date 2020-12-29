import axios from 'axios';
import { AsyncStorage } from 'react-native';

// cmd to start => ngrok ngrok http 3000;
const Url = 'http://d493581106d8.ngrok.io';
const instance = axios.create({
    baseURL: Url
});

instance.interceptors.request.use(
    async (config) => {

        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, // 1st called when request make
    (err) => {
        console.log(err);
        return Promise.reject(err);

    }  // called when their is issue in making request.
)

export default instance;