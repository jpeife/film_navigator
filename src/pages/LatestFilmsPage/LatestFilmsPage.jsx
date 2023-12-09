import { useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getLatestFils } from "../../services/Api";


export const LatestFilmsPage = () => {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        getLatestFils().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
    }, []);

    return (
        <div>
            <h1>Recien sacadas del horno🆕‼</h1>
            <FilmList films={films} />
        </div>
    )
}

