import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


// server side rendering
// https://medium.com/atticus-engineering/server-side-rendering-with-react-and-typescript-8cebb4400b3c

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
