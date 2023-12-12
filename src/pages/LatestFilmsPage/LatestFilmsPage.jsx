import { useContext, useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getLatestFils } from "../../services/Api";
import { ShowLoadingContext } from "../../App";
import "./LatestFilmsPage.css"

export const LatestFilmsPage = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useContext(ShowLoadingContext)


    useEffect(() => {
        
        setLoading(true)

        getLatestFils().then(response => {
            console.log(response.data.results);
            setFilms(response.data.results)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);
    

    return (
        <div className="LatestFilmsPageDesign">
            <h1>Recien sacadas del horno🆕‼</h1>
            <FilmList films={films} />
        </div>
    )
}

