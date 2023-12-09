import { useContext, useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getTopFilms } from "../../services/Api";
import { ShowLoadingContext } from "../../App";


export const Home = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useContext(ShowLoadingContext);


    useEffect(() => {
        
        setLoading(true);

        getTopFilms().then(response => {
            console.log(response.data.results)
            setFilms(response.data.results)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <div>
            <h1>Películas mejor valoradas 🔥</h1>
            <FilmList films={films} />
        </div>
    )
}

