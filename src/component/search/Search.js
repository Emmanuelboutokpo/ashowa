import React, {useState} from 'react'
import { Link} from "react-router-dom";
import "./search.css"
import { FaEye } from 'react-icons/fa';
import data from '../../data'
 
 

 
const Search = ({setCart,cart}) => {
  const [elements, setElements] = useState(data);
  const [filtrage, setFiltrage] = useState('Newtrending');
  const token = window.localStorage.getItem("user");

  const elementsFilters = elements.filter(
    (item) => item.cat === filtrage
    );  
   
    const handleItemClick = (item) => {
      console.log('data');
      const exist = cart.find((x) => x.id === item.id);
    
      if (exist) {
        setCart(
          cart.map((x) => (x.id === item.id) ? { ...x, qty: x.qty + 1 } : x)
        );
      }else {
        setCart([...cart, { ...item, qty: 1 }]);
      }
    }

  return (
    <>
   <div className="container menu">
     <h2 className="menuTitle">Nos vedettes </h2>
     <hr className='trait' />
     <div className="menuStyle">
        <div className={filtrage === 'Newtrending' ? 'selected' : 'menu-link'} onClick={()=>setFiltrage('Newtrending')}><img src="/img/icons/square.png" alt="squ"/><p>New trending</p></div>
        <div className={filtrage === 'casquette' ? 'selected' : 'menu-link'} onClick={()=>setFiltrage("casquette")}><img src="../../img/icons/hiphop.png" alt="hip" /><p>Casquette</p></div>
        <div className={filtrage === 'lacoste' ? 'selected' : 'menu-link'} onClick={()=>setFiltrage("lacoste")}><img src="../../img/icons/jersey.png" alt="jers" /><p>Lacoste</p></div>
        <div className={filtrage === 't-shirt' ? 'selected' : 'menu-link'}  onClick={()=>setFiltrage("t-shirt")} ><img src="../../img/icons/T-Shirt.png" alt="shi" /><p>Tee-shirt</p></div>
        <div className={filtrage === 'chemise' ? 'selected' : 'menu-link'} onClick={()=>setFiltrage("chemise")} ><img src="../../img/icons/pajama.png" alt="paj" /><p>Chemise</p></div>
      </div>
</div>
<section className="product-filter-section">
  <div className="container">
    <div className="row">
      {
       elementsFilters.map((item,id) =>(
      <div className="col-lg-3 col-sm-6" key={id}>
        <div className="product-item">
          <div className="pi-pic">
            <img src={item.img} alt="s" />
            <div className="pi-links">
              <button className="add-car"><i className="flaticon-bag bag" onClick={() => handleItemClick(item)}/></button>
              <Link to="" className="wishlist-btn"><i className="flaticon-heart" /></Link>
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
     
    </div>
    <div className="text-center pt-5">
      <Link to="/category" className="site-btn sb-line sb-dark"> Voir nos produits </Link>
    </div>
  </div>
</section>

</>
  )  
}

export default Search
