import SearchBar from "../Searchbar/SearchBar";
import style from "./Nav.module.css";
import RandomCards from "../RandomCard/RandomCard";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const location = useLocation();
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <NavLink to="/home">
          <img
            className={style.imagen}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
            }
            alt="imagen"
          />
        </NavLink>
      </div>
      {location.pathname === "/home" && (
        <div className={style.homeButtons}>
          <SearchBar className={style.search} onSearch={props.onSearch} />
          <RandomCards className={style.random} random={props.random} />
        </div>
      )}
      <div className={style.container3}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </NavLink>

        <NavLink to="/favorites" style={{ textDecoration: "none" }}>
          <p className={style.favorites}>Favorites</p>
        </NavLink>
        <NavLink to="/About" style={{ textDecoration: "none" }}>
          <p className={style.about}>About</p>
        </NavLink>
      </div>
    </div>
  );
}
