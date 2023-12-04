
import { urlImgage } from "../../services/Api"
import { FilmCard } from "./FilmCard/FilmCard"
import "./FilmList.css"

export const FilmList = ({ films }) => {
    return (
        <div className="FilmListDesign">
            {
                films.map((film) => {

                    return <FilmCard
                        key={film.id}
                        filmId={film.id}
                        filmName={film.title}
                        srcImage={urlImgage(film.poster_path)}
                        filmOverview={film.overview}
                    />

                })
            }
        </div>
    )
}