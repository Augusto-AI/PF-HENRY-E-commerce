import {
  ADD_QTY_ITEM,
  ADD_TO_BASKET,
  CLEAR_BASKET,
  MINUS_QTY_ITEM,
  REMOVE_FROM_BASKET,
  SET_BASKET_ITEMS,
  DECREASE_ITEM_QUANTITY,
  LOAD_BASKET_SUCCESS,
  LOAD_BASKET_FAILURE,
} from "@/constants/constants";

export const setBasketItems = (items = []) => ({
  type: SET_BASKET_ITEMS,
  payload: items,
});

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export const decreaseItemQuantity = (id) => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: id,
});

export const removeFromBasket = (id) => ({
  type: REMOVE_FROM_BASKET,
  payload: id,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const addQtyItem = (id) => ({
  type: ADD_QTY_ITEM,
  payload: id,
});

export const minusQtyItem = (id) => ({
  type: MINUS_QTY_ITEM,
  payload: id,
});

export const loadBasket = (userId) => {
  // Replace this with your actual code to load the user's basket from the server
  // You may use Redux Thunk or any other asynchronous method to fetch the data.
  return async (dispatch) => {
    try {
      // Perform the asynchronous operation to load the basket data
      // For example:
      const response = await fetch(`/api/basket/${userId}`);
      const data = await response.json();

      // Dispatch an action to update the local basket with the fetched data
      dispatch({
        type: "LOAD_BASKET_SUCCESS",
        payload: data,
      });
    } catch (error) {
      // Handle errors here
      dispatch({
        type: "LOAD_BASKET_FAILURE",
        payload: error,
      });
    }
  };
};
