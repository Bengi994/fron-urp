import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://shrieking-web-97943-0c89be05ca8d.herokuapp.com/api'
});
