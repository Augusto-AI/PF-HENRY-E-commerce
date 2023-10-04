
import {
    SET_ORDER_STATUS,
  } from '@/constants/constants';



export default (state = {isArrive: {} }, action) => {  
  
  switch (action.type) {
    case SET_ORDER_STATUS:
      return {
        ...state,
        isArrive: {
          ...state.isArrive,
          [action.orderId]: true
        }
      };

    default:
      return state;
  }
};


