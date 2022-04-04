import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import Orders from './pages/orders/orders';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Orders/>} path='/orders'></Route>
      </Routes>
    </div>
  );
}

export default App;
