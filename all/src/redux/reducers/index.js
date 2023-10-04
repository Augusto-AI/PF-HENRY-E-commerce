import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import miscReducer from './miscReducer';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';
import paypalReducer from './paypalReducer';
import darkModeReducer from './darkModeReducer';
import orderReducerArrive from './orderReducerArrive';
import orderReducerActive from './orderReducerActive';

const rootReducer = {
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer,
  purchasedItems: paypalReducer,
  darkMode: darkModeReducer,
  orderArrive: orderReducerArrive,
  orderActive: orderReducerActive,



};

export default rootReducer;
