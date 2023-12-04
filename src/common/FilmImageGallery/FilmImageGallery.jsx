
import "./FilmImageGallery.css"

export const FilmImageGallery = ({ imageItems = [] }) => {

    return (

        <div className="FilmImageGalleryDesign">

            {
                imageItems.map(item => {
                    return (
                        <div className="FilmImageGalleryItemDesign">
                            <img src={item} />
                        </div>
                    )
                })
            }



        </div>




    )
}