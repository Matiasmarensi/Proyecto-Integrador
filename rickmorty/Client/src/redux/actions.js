import axios from "axios";
export const ADD_FAVORITES = "addFavorites";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
axios.defaults.baseURL = "https://proyecto-integrador-production-fa70.up.railway.app";

// export const deleteFavorite = (id) => {
//   return {
//     type: DELETE_FAVORITES,
//     payload: id,
//   };
// };
export const deleteFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/rickandmorty/fav/${id}`);
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

// ACTION | addFav
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/rickandmorty/fav", character);
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    } catch (e) {
      console.log(e.response.data);
      console.log(e.message);
    }
  };
};

// export const addFavorite = (char) => {
//   return {
//     type: ADD_FAVORITES,
//     payload: char,
//   };
// };
