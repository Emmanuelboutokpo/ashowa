import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Menu from '../../component/navbars/Menu'
import Footer from '../../component/footer/Footer'
import {   useLocation } from "react-router-dom";
import data from '../../data'
import { Link} from "react-router-dom";
import BackTop from '../../component/backToTop/BackTop'

const Product = ({cartLength}) => {
  const search  = useLocation();
  const loc = search.pathname.split("/")[2];
   const datas=data.find((item, id)=> item.id === loc);
 /*
 const search = useLocation();
const loc = search.pathname.split("/")[2];
let datas;

if (loc) {
  datas = data.find((item) => item.id === loc);
} else {
  datas = data;
}
 */
  return (
  <div>
     <Navbar cartLength={cartLength} />
     <Menu />
  {/* Page info */}
  <div className="page-top-info">
    <div className="container">
      <h4>Catégorie de produit</h4>
    </div>
  </div>
  {/* Page info end */}
  {/* product section */}
  <section className="product-section">
    <div className="container">
      <div className="back-link">
        <Link to="/category"> &lt;&lt; Retour à la catégorie</Link>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="product-pic-zoom">
            <img className="product-big-img" src={datas.img} alt="prod" />
          </div>
        </div>
        <div className="col-lg-6 product-details">
          <h2 className="p-title">{datas.title}</h2>
          <h3 className="p-price">{datas.price}</h3>
          <h4 className="p-stock">Disponibilité : <span>{datas.onSale ? 'En Stock' : 'Finis'}</span></h4>
          <div className="p-rating">
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o fa-fade" />
          </div>
          <Link to="/cart" className="site-btn">ACHETEZ MAINTENANT</Link>
          <div id="accordion" className="accordion-area">
            <div className="panel">
              <div className="panel-header" id="headingOne">
                <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
              </div>
              <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="panel-body">
                  <p>{datas.description}</p>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-header" id="headingTwo">
                <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Détails de soins</button>
              </div>
              <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="panel-body">
                  <img src="/img/cards.png" alt="card" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-header" id="headingThree">
                <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Expédition &amp; Retour</button>
              </div>
              <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="panel-body">
                  <h4>Retours sous 7 jours</h4>
                  <p>Paiement à la livraison disponible<br />Livraison à domicile <span>3 - 4 jours</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="social-sharing">
            <Link to=""><i className="fa fa-google-plus" /></Link>
            <Link to=""><i className="fa fa-pinterest" /></Link>
            <Link to=""><i className="fa fa-facebook" /></Link>
            <Link to=""><i className="fa fa-twitter" /></Link>
            <Link to=""><i className="fa fa-youtube" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product section end */}
 
<Footer />
<BackTop />
</div>

  )
}

export default Product
