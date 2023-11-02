import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderCards } from "../../redux/actions";
import { filterCards } from "../../redux/actions";

// const orderCards=(e) => {
//   const {name,value} = e.target
//   dispatch(e.target.value)
// }
// const filterCards=(e) => {
//   dispatch(e.target.value)
// }
const Favorites = (props) => {
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      dispatch(orderCards(value));
    }
    if (name === "filter") {
      dispatch(filterCards(value));
    }
  };
  return (
    <div className={style.container}>
      <div>
        <select name="order" onChange={handleDispatch}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {props.myFavorites.map((personaje, index) => (
        <Card
          origin={personaje.origin}
          status={personaje.status}
          key={index}
          image={personaje.image}
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          id={personaje.id}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
