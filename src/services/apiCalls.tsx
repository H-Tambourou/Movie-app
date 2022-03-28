import axios from 'axios';

const apiKey: string= (process.env.REACT_APP_API_KEY as string);

const getSearch = async (query: string) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data;
}

const getPopular = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    return response.data;
}

const services = {
    getSearch,
    getPopular
}
export default services;