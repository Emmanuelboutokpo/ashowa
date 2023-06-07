import React from 'react'
import { Link } from "react-router-dom";
import { FaEye } from 'react-icons/fa';
import './pub.css'
const Pub = ({ item, cart, setCart }) => {
  const token = window.localStorage.getItem("user");

  /* Add to cart */
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
    <section>
      <div className='app__pub-images_card flex__app__center'>
        <img src={item.img} alt="d" />
        <div className="pub__image-icon">
          <button className="add-card" onClick={() => handleItemClick(item)} ><i className="flaticon-bag" /></button>
          <Link to="" className="wishlist-btn"><i className="flaticon-heart" /></Link>
          <Link className="titleDetail" to={token === null ? "/login" : `/product/${item.id}`}><FaEye className='svgEye' /></Link>
        </div>
        <div className="pi-text">
          <p className='pi-para'>{item.cat}</p>
          <h6 className='pi-price'>${item.price}</h6>
        </div>
      </div>
    </section>
  )
}

export default Pub
