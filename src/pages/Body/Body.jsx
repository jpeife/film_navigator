import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../common/Header/Header"
import { Home } from "../Home/Home";
import "./Body.css";
import { FilmPage } from "../FilmPage/FilmPage";
import { LatestFilmsPage } from "../LatestFilmsPage/LatestFilmsPage";
import { UpcomingFilmsPage } from "../UpcomingFilmsPage/UpcomingFilmsPage";
import { SearchPage } from "../SearchPage/SearchPage";


export const Body = () => {
    return (
        <div className="mainPageDessign">



            <BrowserRouter>

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