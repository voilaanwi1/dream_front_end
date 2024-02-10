import React from 'react';
import Router from './Router';
import './assets/style.css';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <>
        <BrowserRouter>
        
         <Header />
            <Router />
            <Footer />;
        </BrowserRouter>
           
        </>
    );
}

export default App;
