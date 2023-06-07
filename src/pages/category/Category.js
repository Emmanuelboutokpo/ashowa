import React, { useState } from 'react'
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/navbar/Navbar'
import Menu from '../../component/navbars/Menu'
import data from '../../data'
import { FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";
import BackTop from '../../component/backToTop/BackTop';
import './category.css'

const Category = ({ cart, setCart, cartLength }) => {
  const token = window.localStorage.getItem("user");
  //const [elements, setElements] = useState(data);
  const [filtrage, setFiltrage] = useState('Newtrending');

  const elementsFilters = data.filter(
    (item) => item.cat === filtrage
  );

  const handleItemClick = (item) => {
    const exist = cart.find((x) => x.id === item.id);

    if (exist) {
      setCart(
        cart.map((x) => (x.id === item.id) ? { ...x, qty: x.qty + 1 } : x)
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }
  return (
    <div>
      <Navbar cartLength={cartLength} />
      <Menu />
      {/* Page info */}
      <div className="page-top-info">
        <div className="container">
          <h4>Categories de produit</h4>
          {/* <div className="site-pagination">
        <a href>Home</a> /
        <a href>Shop</a> /
      </div> */}
        </div>
      </div>
      {/* Page info end */}
      {/* Category section */}
      <section className="category-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="filter-widget">
                <h2 className="fw-title">Categories</h2>
                <ul className="category-menu">
                  <li><Link to="#" onClick={() => setFiltrage('Newtrending')}>Midi Dresses </Link></li>
                  <li><Link to="#" onClick={() => setFiltrage('chemise')}>Chemise</Link></li>
                  <li><Link to="#" onClick={() => setFiltrage('casquette')}>Casquette</Link></li>
                  <li><Link to="#" onClick={() => setFiltrage('t-shirt')}>T-shirt</Link></li>
                  <li><Link to="#" onClick={() => setFiltrage('lacoste')}>Lacoste</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row">
                {
                  elementsFilters.map((item, index) => (
                    <div className="col-lg-4 col-sm-6" key={index}>
                      <div className="product-item">
                        <div className="pi-pic">
                          {item.onSale === true && <div className="tag-sale">En stock</div>}
                          <img src={item.img} alt="e" />
                          <div className="pi-links">
                            <Link to="#" className="add-car"><i className="flaticon-bag" onClick={() => handleItemClick(item)} /></Link>
                            <Link to="#" className="wishlist-btn"><i className="flaticon-heart" /></Link>
                            <Link className="titleDetail" to={token === null ? "/login" : `/product/${item.id}`}><FaEye className='svgEye' /></Link>
                          </div>
                        </div>
                        <div className="pi-texts">
                          <p>{item.cat}</p>
                          <h6>${item.price}</h6>
                        </div>
                      </div>
                    </div>
                  ))
                }

                <div className="text-center w-100 pt-3">
                  <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category section end */}
      <Footer />
      <BackTop />
    </div>
  )
}

export default Category
