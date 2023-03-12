import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as PATH from "./config/path/pathClient";
import Header from "./views/header/Header"; 
import Home from "./views/home/Home";
import Footer from './views/footer/Footer';
import './App.css';
import Article from './views/article/Article';
import Login from './views/form/Login';
import Account from './views/account/Account';
import ProtectedPath from './config/securePath/ProtectedPath';
import { allArticlesService } from './services/ArticleService';


function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  allArticlesService();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route 
            index
            element={<Home />}
          />
          <Route 
            path={PATH.PATH_ARTICLE_ID + ":id"}
            element={<Article />}
          />
          <Route 
            path={PATH.PATH_LOGIN}
            element={<Login />}
          />
          <Route 
            path={PATH.PATH_ACCOUNT}
            element={
              <ProtectedPath isLoggedIn={isLoggedIn}>
                <Account />
              </ProtectedPath>
            }
          />
          <Route 
            path={PATH.ERROR_PATH}
            element={<Home />}
          />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
