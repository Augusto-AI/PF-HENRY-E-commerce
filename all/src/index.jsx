import { Preloader } from '@/components/common';
import 'normalize.css/normalize.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom
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
<<<<<<< HEAD

// Utiliza createRoot para iniciar la renderización
const reactRoot = createRoot(root);

// Renderiza el preloader en la raíz de React
reactRoot.render(<StrictMode><Preloader /></StrictMode>);
=======
  
const array = Object.values(darkMode);
const darkModelo = array[0];
// Render the preloader on initial load
render(<Preloader />, root);
>>>>>>> 96398215b17fdc42bd6649293c80c24dfdf65228

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail('Failed to authenticate'));
  }
<<<<<<< HEAD
  // Luego de verificar el estado de autenticación, renderiza la aplicación principal
  reactRoot.render(
    <StrictMode>
      <App store={store} persistor={persistor} />
    </StrictMode>,
  );
=======
  const handleToggleDarkMode = () => {
    store.dispatch(toggleDarkMode());
  };
  // then render the app after checking the auth state
  render(<App store={store} persistor={persistor} darkModelo={darkModelo} handleToggleDarkMode={handleToggleDarkMode} />, root);
>>>>>>> 96398215b17fdc42bd6649293c80c24dfdf65228
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
