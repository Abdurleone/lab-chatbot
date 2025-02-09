import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './App.jsx'; // Add the .jsx extension

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);