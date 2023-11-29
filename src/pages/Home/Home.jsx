import { useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getLatestFilms } from "../../services/Api";


export const Home = () => {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        getLatestFilms().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
    }, []);

    return (
        <div>
            <FilmList films={films} />
        </div>
    )
}

