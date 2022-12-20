import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { routes } from './Assets/Routes/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Assets/Contexts/AuthProvider';

const router = routes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
