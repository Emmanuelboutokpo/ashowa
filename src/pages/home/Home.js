import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import './home.css'
import Publicite from '../../component/publication/Publicite'
import Menu from '../../component/navbars/Menu'
import Last from '../../component/last/Last'
import Search from '../../component/search/Search'
import Footer from '../../component/footer/Footer'
import BackTop from '../../component/backToTop/BackTop'
const Home = ({cart,setCart, cartLength}) => {
  
  return (
    <div>
        <Navbar cartLength={cartLength} /> 
        <Menu /> 
        <Publicite />    
        <Last cart={cart} setCart={setCart} />    
        <Search cart={cart} setCart={setCart} />
        <Footer />
        <BackTop/>
    </div>
  )
}

export default Home
