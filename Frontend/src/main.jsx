import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/shopContext.jsx';
import { EmailProvider } from './context/emailContext.jsx';
// import { CartProvider } from './Cart/context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <ShopProvider>
        <EmailProvider>
          <App />
        </EmailProvider>
      </ShopProvider>

    </BrowserRouter>


  </StrictMode>
)
