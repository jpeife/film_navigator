
import { useEffect, useRef, useState } from "react"
import "./FilmPage.css"
import { useParams } from "react-router";
import { getFilm, getFilmImages, getFilmVideos, getSimilarFilms, urlImgage } from "../../services/Api";
import { FilmImageGallery } from "../../common/FilmImageGallery/FilmImageGallery";
import { FilmVideoGallery } from "../../common/FilmVideoGallery/FilmVideoGallery";
import { BoxContainer } from "../../common/BoxContainer/BoxContainer";
import { FilmList } from "../../common/FilmList/FilmList";
import { Badge } from "../../common/Badge/Badge";

export const FilmPage = () => {

    const { id } = useParams();

    const [film, setFilm] = useState(null);
    const [filmImages, setFilmImages] = useState([]);
    const [filmVideos, setFilmVideos] = useState([]);
    const [similarFilms, setSimilarFilms] = useState([]);

    const mainBox = useRef();


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
                console.log("listado de imagenes", response.data)


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


        getSimilarFilms(id)
            .then((response) => {
                console.log("similar films", response.data.results)
                setSimilarFilms(response.data.results.slice(0, 10));
            })



    }, [])


    //Handle event of scroll
    useEffect(() => {

        window.addEventListener("scroll", onScrollProfile)

        return (() => {
            window.removeEventListener("scroll", onScrollProfile);
        })

    }, [])


    const onScrollProfile = () => {

        if (window.scrollY > 150) {
            mainBox.current.classList.add("on-scroll")
        } else {
            mainBox.current.classList.remove("on-scroll")
        }

    }


    return (
        <div className="FilmPageDesign">


            <div className="film-main-box" ref={mainBox}>
                {
                    film &&
                    <>
                        <img className="poster-img" src={urlImgage(film.poster_path)} />

                        <div className="film-details">


                            

                            <h1>
                                {film.title} ({(new Date(film.release_date)).getFullYear()})


                               

                            </h1>


                            <h3>⭐{film.vote_average}</h3>


                            <div className="genre_list">
                                {
                                    film.genres.map((genre) => {
                                        return <Badge text={genre.name} className={"primary"} />
                                    })
                                }
                            </div>

                            <p>{film.overview}</p>

                            <div className="more-details">


                                <span>Estreno: {new Date(film.release_date).toLocaleDateString()}</span>
                                <span>Duración: {film.runtime} min.</span>




                            </div>





                        </div>


                    </>
                }

            </div>




            {
                film &&
                <>


                    <BoxContainer title={"Galería"}>
                        <FilmImageGallery imageItems={filmImages} />
                    </BoxContainer>


                    <BoxContainer title={"Videos"}>
                        <FilmVideoGallery videoItems={filmVideos} />
                    </BoxContainer>


                    <BoxContainer title={"Películas similares"}>

                        <FilmList films={similarFilms} />



                    </BoxContainer>

                </>

            }

        </div>


    )


}