import axios from "axios";
export const ADD_FAVORITES = "addFavorites";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const ORDER = "ORDER";
export const FILTER = "FILTER";

// export const deleteFavorite = (id) => {
//   return {
//     type: DELETE_FAVORITES,
//     payload: id,
//   };
// };
export const deleteFavorite = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  console.log(endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data,
      });
    } catch (e) {
      console.log(e.message);
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
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
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
