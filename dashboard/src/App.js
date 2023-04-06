import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Body from './components/Body section/body';
import Sidebar from './components/Sidebar section/sidebar';
import Orders from './components/Body section/orders/orders'
import Products from './components/Body section/products/products'
import Product from './components/Body section/product/product'
import Add from './components/Body section/addProducts/addProducts';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products' element={<Products/>}/>

          <Route path='/products'>
            <Route path=':id' element={<Product/>}/>
          </Route>

          <Route path='/add' element={<Add/>}/>
          
        </Routes> 
        <Sidebar/>
    </div>
  );
}

export default App;
