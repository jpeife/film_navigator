
import { useEffect, useState } from "react"
import "./FilmPage.css"
import { useParams } from "react-router";
import { getFilm, getFilmImages, getFilmVideos, urlImgage } from "../../services/Api";
import { FilmImageGallery } from "../../common/FilmImageGallery/FilmImageGallery";
import { FilmVideoGallery } from "../../common/FilmVideoGallery/FilmVideoGallery";

export const FilmPage = () => {

    const { id } = useParams();

    const [film, setFilm] = useState(null);
    const [filmImages, setFilmImages] = useState(null);
    const [filmVideos, setFilmVideos] = useState(null);
    

    useEffect(() => {



        getFilm(id)
            .then((result) => {

                console.log(result.data);
                setFilm(result.data);
            })
            .catch((error) => {
                console.log(error);
            });



        getFilmImages(id)
            .then(response => {
                console.log(response)


                let images = response.data.backdrops.slice(0, 10).map((item) => {
                    return urlImgage(item.file_path);
                })

                setFilmImages(images);


            })

        getFilmVideos(id)
        .then(response => {
            console.log("videos", response);

            let videos = response.data.results.slice(0, 3);
            setFilmVideos(videos);





        })



    }, [])


    return (
        <div className="FilmPageDesign">


            <div className="">
                {
                    film &&
                    <>
                        <h2>{film.title}</h2>
                        <img className="poster-img" src={urlImgage(film.poster_path)} />
                    </>
                }

            </div>

            <div className="">



                {
                    film &&
                    <>
                        <h3>Sinopsis</h3>
                        <hr />
                        <p>{film.overview}</p>


                        <h3>Galería</h3>
                        <hr />
                        <FilmImageGallery imageItems={filmImages} />


                        <h3>Videos</h3>
                        <hr />
                        <FilmVideoGallery videoItems={filmVideos} />

                    </>

                }

            </div>


        </div>
    )


}