import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:3000',
})

export function setAuthToken(token:string){
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}