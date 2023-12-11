import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../common/Header/Header"
import { Home } from "../Home/Home";
import "./Body.css";
import { FilmPage } from "../FilmPage/FilmPage";
import { LatestFilmsPage } from "../LatestFilmsPage/LatestFilmsPage";
import { UpcomingFilmsPage } from "../UpcomingFilmsPage/UpcomingFilmsPage";
import { SearchPage } from "../SearchPage/SearchPage";
import { LoadingSkin } from "../../common/LoadingSkin/LoadingSkin";
import { useContext } from "react";
import { ShowLoadingContext } from "../../App";
import { ScrollTop } from "../../ScrollTop";
import { ImageViewerSkin } from "../../common/ImageViewerSkin/ImageViewerSkin";


export const Body = () => {

    const [showLoading, setShowLoading] = useContext(ShowLoadingContext);



    return (
        <div className="mainPageDessign">



            <BrowserRouter>

                <ImageViewerSkin />


                <LoadingSkin show={showLoading} />

                <ScrollTop />

                <Header />

                <div className="body-container">

                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/latest" element={<LatestFilmsPage />} />
                        <Route path="/upcoming" element={<UpcomingFilmsPage />} />
                        <Route path="/film/:id" element={<FilmPage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                    
                </div>

            </BrowserRouter>






        </div>
    )
}