import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import './app.css';


ReactDOM.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
  document.getElementById('contents'),
);
