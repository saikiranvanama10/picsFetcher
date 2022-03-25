import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vAoarQTM0HBZsCQ9Jb_zohNX2He8sYrtu129TVe5MJg'
    }
});