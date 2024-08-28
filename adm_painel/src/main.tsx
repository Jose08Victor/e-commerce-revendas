import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AdminContextProvider from './context/adminContext.tsx'
import { GlobalStyle } from './globalStyle.tsx'

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <React.StrictMode>
    <AdminContextProvider>
      <GlobalStyle />
      <App />
    </AdminContextProvider>
  </React.StrictMode>,
);