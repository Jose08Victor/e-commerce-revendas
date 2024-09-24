import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AdminContextProvider } from './context/adminContext.tsx';
import { GlobalStyle } from './globalStyle.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <GlobalStyle />
        <App />
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);