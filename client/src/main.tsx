import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AdminContextProvider } from './context/adminContext.tsx';
import { GlobalStyle } from './globalStyle.tsx';

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <AdminContextProvider>
      <GlobalStyle/>
      <App />
    </AdminContextProvider>
  </StrictMode>,
);