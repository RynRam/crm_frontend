import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.1.11:3000'//'http://d93f22a0.ngrok.io'
});