
import { urlImgage } from "../../../services/Api"
import "./FilmCard.css"

export const FilmCard = ({filmName, srcImage}) => {
    return (
        <div className="FilmCardDesign">
            <img src={srcImage} />
            <span className="title-film-box">{filmName}</span>
        </div>
    )
}