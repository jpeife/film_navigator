
import { urlImgage } from "../../../services/Api"
import "./FilmCard.css"

export const FilmCard = ({filmName, srcImage, filmOverview = null}) => {
    return (
        <div className="FilmCardDesign">
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