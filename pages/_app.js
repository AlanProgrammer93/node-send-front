//import '../styles/globals.css'
import React from 'react';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}

export default MyApp
