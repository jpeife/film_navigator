import { useContext, useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getUpcomingFilms } from "../../services/Api";
import { ShowLoadingContext } from "../../App";


export const UpcomingFilmsPage = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useContext(ShowLoadingContext)


    useEffect(() => {

        setLoading(true)

        getUpcomingFilms().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
        .finally(() => {
            setLoading(false)
        })

    }, []);

    return (
        <div>
            <h1>Pronto disfrutaremos de ... 🤯</h1>
            <FilmList films={films} />
        </div>
    )
}

