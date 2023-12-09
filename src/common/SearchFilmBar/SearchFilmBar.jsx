

import { useContext, useState } from "react"
import "./SearchFilmBar.css"
import { useLocation, useNavigate } from "react-router";
import { SearchValueContext } from "../../App";


export const SearchFilmBar = () => {

    const [searchValue, setSearchValue] = useContext(SearchValueContext);

    const navigate = useNavigate();
    const location = useLocation();

    const onChangeValue = (e) => {

        setSearchValue(
            e.target.value
        )

    }

    const onKeyDown = (e) => {

        if (e.code == "Backspace") {
            return;
        }

        if (location.pathname !== "search") {
            navigate("/search")
        }

    }


    return (
        <input className="SearchFilmBarDessign"
            placeholder="Buscar película..."
            value={searchValue}
            onChange={onChangeValue}
            onKeyDown={onKeyDown}
        />
    )

}