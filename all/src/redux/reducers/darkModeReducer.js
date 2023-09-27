
import {
    TOGGLE_DARK_MODE,
  } from '@/constants/constants';

const initialState = {
  darkMode: true,
};

export default (state = { darkMode: true }, action) => {  
  
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};


