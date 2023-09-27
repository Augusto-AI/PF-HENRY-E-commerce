import { Preloader } from '@/components/common';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import 'react-phone-input-2/lib/style.css';
import { onAuthStateFail, onAuthStateSuccess } from '@/redux/actions/authActions';
import configureStore from '@/redux/store/store';
import '@/styles/style.scss';
import WebFont from 'webfontloader';
import App from './App';
import firebase from '@/services/firebase';
import { toggleDarkMode } from "./redux/actions/darkModeActions"

WebFont.load({
  google: {
    families: ['Tajawal']
  }
});

const { store, persistor } = configureStore();
const darkMode = store.getState().darkMode;
const root = document.getElementById('app');
  
const array = Object.values(darkMode);
const darkModelo = array[0];
// Render the preloader on initial load
render(<Preloader />, root);

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail('Failed to authenticate'));
  }
  const handleToggleDarkMode = () => {
    store.dispatch(toggleDarkMode());
  };
  // then render the app after checking the auth state
  render(<App store={store} persistor={persistor} darkModelo={darkModelo} handleToggleDarkMode={handleToggleDarkMode} />, root);
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
