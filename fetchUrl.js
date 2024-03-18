export const myurl = 'https://8d63-2405-204-6-edaa-20ac-4497-129b-810c.ngrok.io';  
// export const myurl = '192.168.33.1';

import AsyncStorage from '@react-native-async-storage/async-storage';

// local development
const API_BASE_URL = 'http://192.168.56.1:8080';  
// const API_BASE_URL = 'http://192.168.220.56:8080' 

export const client = async (url, method, body) => {
    try {
        
        const config = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) {
            config.body = JSON.stringify(body);
        }
        

        const response = await fetch(`${myurl}/${url}`, config);

        if (!response.ok) {
            const error = await response.json();
            return Promise.reject(error);
        }
        

        return await response.json();
    } catch (error) {
        console.log('something went wrong fetchUtil', error);
        return Promise.reject({error: error.code});
    }
};

export default client;

