import { useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getUpcomingFilms } from "../../services/Api";


export const UpcomingFilmsPage = () => {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        getUpcomingFilms().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
    }, []);

    return (
        <div>
            <h1>Pronto disfrutaremos de ... 🤯</h1>
            <FilmList films={films} />
        </div>
    )
}

