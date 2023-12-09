import { useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getTopFilms } from "../../services/Api";


export const Home = () => {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        getTopFilms().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
    }, []);

    return (
        <div>
            <h1>Películas mejor valoradas 🔥</h1>
            <FilmList films={films} />
        </div>
    )
}

