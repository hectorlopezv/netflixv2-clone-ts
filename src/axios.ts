import axios from 'axios';

const instance_netflix = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance_netflix;