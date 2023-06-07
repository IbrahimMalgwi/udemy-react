import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header />
      <h1>Welcome to my site</h1>     
    </>
  </React.StrictMode>
);