import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import User from './User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <User name="Ibbi" expertise="Software Engineering" />

      <User name="Mike" expertise="Python" />

      <User name="Jane" expertise="Java" />
    </>
  </React.StrictMode>
);