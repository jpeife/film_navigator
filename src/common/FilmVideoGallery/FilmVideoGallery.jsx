
import "./FilmVideoGallery.css"

export const FilmVideoGallery = ({ videoItems = [] }) => {

    return (

        <div className="FilmVideoGalleryDesign">

            {
                videoItems.map(item => {
                    return (
                        <div key={item.id} className="FilmVideoGalleryItemDesign">


                            <iframe
                                src={`http://www.youtube.com/embed/${item.key}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            >

                            </iframe>





                        </div>
                    )
                })
            }



        </div>




    )
}