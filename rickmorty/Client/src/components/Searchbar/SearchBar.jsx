import style from "./Searchbar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState();

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div className={style.container}>
      <input className={style.input} type="number" min="1" max="826" onChange={handleSearch} />
      <button className={style.boton} onClick={() => props.onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}
