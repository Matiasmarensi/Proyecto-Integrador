export const ADD_FAVORITES = "addFavorites";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
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

export const addFavorite = (char) => {
  return {
    type: ADD_FAVORITES,
    payload: char,
  };
};
