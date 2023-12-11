import { useContext } from "react"
import { ImageViewerContext } from "../../App"
import "./ImageViewerSkin.css"


export const ImageViewerSkin = () => {


    const [imageViewerSrcImage, setImageViewerSrcImage] = useContext(ImageViewerContext);




    const clickClose = () => {
        console.log("Cerrar imagen")

        setImageViewerSrcImage(null)
    }

    return (

        <>
            {
                imageViewerSrcImage != null && (


                    <div className="ImageViewerSkinDesign">


                        <div className="black-screen"></div>

                        <div className="main-container"  onClick={clickClose}>


                            {/* <div className="settings-bar">
                                <button onClick={clickClose}>CERRAR</button>
                            </div> */}

                            <div className="main-viewer">
                                <img src={imageViewerSrcImage} />
                            </div>





                        </div>




                    </div>


                )


            }



        </>


    )



}