
import { urlImgage } from "../../../services/Api"
import "./FilmCard.css"

export const FilmCard = ({filmName, srcImage, filmOverview = null}) => {
    return (
        <div className="FilmCardDesign">
            <img src={srcImage} />
            <span className="title-film-box">{filmName}</span>

            {
                filmOverview != null && (

                    <div className="black-screen">
                        <p>{filmOverview}</p>
                    </div>
                    
                )
            }
        </div>
    )
}