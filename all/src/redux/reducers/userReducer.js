import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  CHANGE_USER_ROLE,
  GET_USER,
} from "@/constants/constants";

const initialState = []; // Inicializamos como un array vacío

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]; // Agregamos el nuevo usuario al estado existente
    case EDIT_USER:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    case CHANGE_USER_ROLE:
      return state.map((user) => {
        if (user.id === action.payload.uid) {
          return {
            ...user,
            role: action.payload.newRole,
          };
        }
        return user;
      });
    case GET_USER:
      // Aquí asumimos que action.payload es la información del usuario que recibiste
      return [...state, action.payload]; // Agregamos el usuario al estado existente
    default:
      return state;
  }
};
