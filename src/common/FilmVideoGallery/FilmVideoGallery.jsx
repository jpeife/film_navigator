
import "./FilmVideoGallery.css"

export const FilmVideoGallery = ({ videoItems = [] }) => {

    return (

        <div className="FilmVideoGalleryDesign">

            {
                videoItems.map(item => {
                    return (
                        <div className="FilmVideoGalleryItemDesign">


                            <iframe
                                width="560"
                                height="315"
                                // src="https://www.youtube.com/embed/BeK7XZMm-4Q?si=35F0L7dJOd7LGZJt"
                                src={`https://www.youtube.com/embed/${item.key}?si=${item.id}`}
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