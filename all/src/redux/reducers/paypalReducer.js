import {
    SET_PURCHASED_ITEMS
  } from '@/constants/constants';
  
  export default (state = { purchasedItems: [] }, action) => {
    switch (action.type) {
      case SET_PURCHASED_ITEMS:
        console.log('SET_PURCHASED_ITEMS action called, newPurchasedItems:', action.payload);
        return {
          ...state,
          purchasedItems: [...state.purchasedItems, ...action.payload],
        };
      default:
        return state;
    }
  };
  