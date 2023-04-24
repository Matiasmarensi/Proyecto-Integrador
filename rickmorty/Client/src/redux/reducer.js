import { ADD_FAVORITES, ORDER, FILTER } from "./actions";
import { DELETE_FAVORITES } from "./actions";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      const isDuplicate = state.myFavorites.find((char) => char.id === action.payload.id);

      if (isDuplicate) {
        return { ...state };
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
        };
      }

    // return {
    //   ...state,
    //   myFavorites: [...state.myFavorites, action.payload],
    //   allCharacters: [...state.allCharacters, action.payload],
    // };
    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
      };
    case FILTER:
      const { allCharacters } = state;
      const filtered = allCharacters.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: filtered,
      };
    case ORDER:
      const { myFavorites } = state;
      const sorted = [...myFavorites].sort((a, b) => {
        if (action.payload === "Ascendente") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sorted,
      };
    default:
      return state;
  }
};

export default rootReducer;

// const rootReducer = (state = iniitalState, action) => {
//   switch (action.type) {
//     case ADD_FAVORITES:
//       return {
//         ...state,
//         myFavorites: [...state.allCharacters, action.payload],
//         allCharacters: [...state.allCharacters, action.payload],
//       };
//     case DELETE_FAVORITES:
//       return { ...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload) };
//     case FILTER:
//       const filteredCharacters = state.allCharacters.filter((char) => char.gender === action.payload);
//       return {
//         ...state,
//         myFavorites: [...filteredCharacters],
//       };
//     case ORDER:
//       const { allCharacters } = state;
//       const sortedChars = allCharacters.sort((a, b) => {
//         if (action.payload === "Ascendente") {
//           return a.id - b.id;
//         } else if (action.payload === "Descendente") {
//           return b.id - a.id;
//         }
//       });
//       return {
//         ...state,
//         myFavorites: [...sortedChars],
//       };

//     default:
//       return { ...state };
//   }
// };

// export default rootReducer;
