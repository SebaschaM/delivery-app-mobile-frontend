import axios from "axios";

const AppDelivery = axios.create({
    baseURL: 'http://192.168.100.152:3000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

export { AppDelivery };