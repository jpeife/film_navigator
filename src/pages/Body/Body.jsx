import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../common/Header/Header"
import { Home } from "../Home/Home";
import "./Body.css";
import { FilmPage } from "../FilmPage/FilmPage";


export const Body = () => {
    return (
        <div className="mainPageDessign">



            <BrowserRouter>

                <Header />


                <div className="body-container">
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/film/:id" element={<FilmPage />} />
                    </Routes>
                    
                </div>

            </BrowserRouter>






        </div>
    )
}