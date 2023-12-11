
import { useContext } from "react"
import "./FilmImageGallery.css"
import { ImageViewerContext } from "../../App"

export const FilmImageGallery = ({ imageItems = [] }) => {


    const [imageViewerSrcImage, setImageViewerSrcImage] = useContext(ImageViewerContext);




    const openViewerImage = (item) => {
        setImageViewerSrcImage(item)
    }

    return (

        <div className="FilmImageGalleryDesign">

            {
                imageItems.map(item => {
                    return (
                        <div key={item} className="FilmImageGalleryItemDesign" style={{cursor: "pointer"}} onClick={() => openViewerImage(item)}>
                            <img src={item} />
                        </div>
                    )
                })
            }



        </div>




    )
}