// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './componante/layout/index.jsx';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './componante/languageSlector/en.json'; // Import translations for English
import hiTranslation from './componante/languageSlector/hi.json'; // Import translations for Hindi
import bnTranslation from './componante/languageSlector/bn.json'; // Import translations for Bangla

// Initialize i18next
i18next.init({
  lng: 'hi', // Default language
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    bn: {
      translation: bnTranslation,
    },
    // Add more languages and translations here
  },
});
 console.log(i18next)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
    <BrowserRouter>
        <Layout>
          <App />
        </Layout>
    </BrowserRouter>
      </I18nextProvider>
  </React.StrictMode>
);
