import React from 'react';
import ReactDOM from 'react-dom/client';
import Cajero from './Cajero';

import './index.css';

// Components
import Layout from './components/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
    <Cajero />
  </React.StrictMode>
);
