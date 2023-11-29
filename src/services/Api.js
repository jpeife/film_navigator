import axios from "axios";


const APIKEY = "16f7bcc4c99ac0b29a5f5c68815f9fdb";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";


export const urlImgage = (imageName) => {
    return `${BASE_IMG_URL}/${imageName}`;
}


export const getLatestFilms = async () => {

    return await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`);

}