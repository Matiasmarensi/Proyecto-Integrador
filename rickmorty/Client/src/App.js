import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Forms from "./components/Form/form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";
function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // if (data.id) {
        //   !characters.some((obj) => JSON.stringify(obj) === JSON.stringify(data))
        //     ? setCharacters((oldChars) => [...oldChars, data])
        //     : window.alert(");
        // } else {
        //   window.alert("No hay personajes con ese ID");
        // }
        if (data.name) {
          const characterExists = characters.some((char) => char.id === data.id);
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  };
  const onClose = (characterId) => {
    setCharacters((chars) => {
      return chars.filter((char) => char.id !== characterId);
    });
    // const onClose = () => {
    //   setCharacters([]);
  };
  const random = () => {
    const index = Math.floor(Math.random() * 826 + 1);
    onSearch(index);
  };
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "123456";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className={style.container}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/" element={<Forms login={login} />} />
        <Route path="/About" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
