import axios from "axios";


const APIKEY = "16f7bcc4c99ac0b29a5f5c68815f9fdb";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";


export const urlImgage = (imageName) => {
    return `${BASE_IMG_URL}/${imageName}`;
}


export const getTopFilms = async () => {

    return await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`);
    
}

export const getLatestFils = async () => {

    return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`);

}

export const getUpcomingFilms = async () => {

    return await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`);
    
}

export const getFilmsByNameSearch = async (searchText) => {
    
    return await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${APIKEY}`);
}


export const getSimilarFilms = async (filmId) => {
    
    return await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/similar?api_key=${APIKEY}`);
}


export const getFilm = async (filmId) => {

    return await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${APIKEY}`)


}


export const getFilmImages = async (filmId) => {

    return await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/images?api_key=${APIKEY}`)

}

export const getFilmVideos = async (filmId) => {

    return await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${APIKEY}`)
}