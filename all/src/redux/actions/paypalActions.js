
import {
    SET_PURCHASED_ITEMS,
  } from '@/constants/constants';

export const setPurchasedItems = (product) => ({
  
    type: SET_PURCHASED_ITEMS,
    payload: product,
    
  });