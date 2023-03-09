import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./views/header/Header"; 
import Home from "./views/home/Home";
import Footer from './views/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route 
              index
              element={<Home />}
            />
          </Routes> 
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
