import axios from 'axios';

//BASE DA API: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=5ec203db5ea46346c2f587932a0ca80c&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;