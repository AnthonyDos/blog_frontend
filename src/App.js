import React from 'react';
import Header from "./views/header/Header"; 
import './App.css';
import Footer from './views/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route />
          </Routes> 
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
