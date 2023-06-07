import React from 'react';
import ReactDOM from 'react-dom/client';

const firstVariable = "Expert";
const secondVariable = "Developer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>{ `We are ${firstVariable} ${secondVariable}` }</h1>
    </>
  </React.StrictMode>
);