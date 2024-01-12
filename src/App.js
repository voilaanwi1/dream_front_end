import React from 'react';
import Router from './Router';
import './assets/style.css'
import { Routers } from './Router';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </>
  );
}

export default App;
