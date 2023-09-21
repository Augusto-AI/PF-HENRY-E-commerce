import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  CHANGE_USER_ROLE,
} from "@/constants/constants";

const initialState = []; // Initialize as an empty array

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]; // Append the new user to the existing state
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
    default:
      return state;
  }
};
