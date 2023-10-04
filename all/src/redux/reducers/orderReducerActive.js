
import {
    SET_ORDER_CANCELED
  } from '@/constants/constants';



export default (state = { isActive: {}}, action) => {  
  
  switch (action.type) {
    case SET_ORDER_CANCELED:
      return {
        ...state,
        isActive: {
          ...state.isActive,
          [action.orderId]: false
        }
      };

    default:
      return state;
  }
};


