
import { Link, useNavigate } from "react-router-dom"
import { urlImgage } from "../../../services/Api"
import "./FilmCard.css"

export const FilmCard = ({ filmId, filmName, srcImage, filmOverview = null }) => {


    const navigate = useNavigate();


    return (

        <div className="FilmCardDesign" onClick={() => navigate(`/film/${filmId}`)}>
            <img src={srcImage} />

            {
                filmOverview != null && (

                    <>


                        <div className="black-screen"></div>

                        <div className="info-screen">
                            <span className="title-film">{filmName}</span>


                            <p className="overview-film">
                                {
                                    filmOverview.lenght < 300 ? filmOverview : filmOverview.slice(0, 300) + "..."
                                }
                            </p>
                        </div>


                    </>




                )
            }
        </div>




    )
}