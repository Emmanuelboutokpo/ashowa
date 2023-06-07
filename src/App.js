import React,{useState,useEffect} from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Login from './pages/logins/Login';
import Register from './pages/registers/Register';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import PrivateRouteLogin from './component/hoc/PrivateRouteLogin';

const App = () =>{  
  useEffect(() => {
    const isUserLoggedIn = () => {
      const token = localStorage.getItem("user");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user);
      }
    }
    isUserLoggedIn()
  }, []);

  const [cart, setCart] = useState([]);
   let cartLength = cart.length
   
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home cartLength={cartLength} cart={cart} setCart={setCart} />} />
        <Route exact path='/' element={<PrivateRouteLogin />}>
          <Route exact path='/login' element={<Login />} />
        </Route>
        <Route exact path='/contact' element={<Contact cartLength={cartLength}/>} />
        <Route exact path='/about' element={<About cartLength={cartLength} />} />
        <Route exact path='/category' element={<Category cartLength={cartLength} cart={cart} setCart={setCart} />} />
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/product/:id' element={<Product cartLength={cartLength} cart={cart} setCart={setCart}/>} />
        <Route exact path='/cart' element={<Cart cartLength={cartLength} cart={cart} setCart={setCart} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
)
};

export default App;
