import { useContext, useEffect } from "react";
import { useState } from "react"
import { FilmList } from "../../common/FilmList/FilmList";
import { getFilmsByNameSearch, getTopFilms } from "../../services/Api";
import { SearchValueContext, ShowLoadingContext } from "../../App";


export const SearchPage = () => {

    const [searchValue, setSearchValue] = useContext(SearchValueContext);
    const [showLoading, setShowLoading] = useContext(ShowLoadingContext);



    const [films, setFilms] = useState([]);


    useEffect(() => {

        setShowLoading(true);

        const timeout = setTimeout(() => {

            console.log(searchValue);


            getFilmsByNameSearch(searchValue)
                .then(response => {
                    console.log(response.data.results)
                    setFilms(response.data.results)
                    setShowLoading(false)
                })
        }, 400);

        return () => {
            clearTimeout(timeout);
        }



    }, [searchValue]);

    return (
        <div>
            
            <h1>Busqueda</h1>




            <FilmList films={films} />
        </div>
    )
}

