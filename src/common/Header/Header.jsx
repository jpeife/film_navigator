
import "./Header.css";
import { Link } from "react-router-dom";
import { SearchFilmBar } from "../SearchFilmBar/SearchFilmBar";

export const Header = () => {

    return (
        <header className="HeaderDessign">
            
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/latest">Las más nuevas</Link>
                <Link to="/upcoming">Las más esperadas</Link>
            </nav>

            <SearchFilmBar />
        </header>
    )
}