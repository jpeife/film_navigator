
import { useEffect, useRef, useState } from "react"
import "./FilmPage.css"
import { useParams } from "react-router";
import { getFilm, getFilmImages, getFilmVideos, urlImgage } from "../../services/Api";
import { FilmImageGallery } from "../../common/FilmImageGallery/FilmImageGallery";
import { FilmVideoGallery } from "../../common/FilmVideoGallery/FilmVideoGallery";
import { BoxContainer } from "../../common/BoxContainer/BoxContainer";

export const FilmPage = () => {

    const { id } = useParams();

    const [film, setFilm] = useState(null);
    const [filmImages, setFilmImages] = useState([]);
    const [filmVideos, setFilmVideos] = useState([]);

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


            <div className="" >
                {
                    film &&
                    <>
                        <img className="poster-img" ref={mainBox} src={urlImgage(film.poster_path)} />

                        <div className="film-details">

                            <h2>{film.title}</h2>
                            <p>{film.overview}</p>
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

                </>

            }

        </div>


    )


}