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

WebFont.load({
  google: {
    families: ['Tajawal']
  }
});

const { store, persistor } = configureStore();
const root = document.getElementById('app');

// Utiliza createRoot para iniciar la renderización
const reactRoot = createRoot(root);

// Renderiza el preloader en la raíz de React
reactRoot.render(<StrictMode><Preloader /></StrictMode>);

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail('Failed to authenticate'));
  }
  // Luego de verificar el estado de autenticación, renderiza la aplicación principal
  reactRoot.render(
    <StrictMode>
      <App store={store} persistor={persistor} />
    </StrictMode>,
  );
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
