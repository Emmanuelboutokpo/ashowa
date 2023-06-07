import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Menu from '../../component/navbars/Menu'
import Footer from '../../component/footer/Footer'
import { Link} from "react-router-dom";
import BackTop from '../../component/backToTop/BackTop';
import './cart.css'
const Cart = ({cart,setCart, cartLength}) => {
  console.log(cart);
   /*Add items */
   const handleButtonAdd = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(cart.map((x) => (x.id === item.id) ? { ...x, qty: x.qty + 1 } : x))
    }
  }

  /* Minus buttons */
  const handleButtonDel = (productRemove) => {
    const exist1 = cart.find((x) => x.id === productRemove.id);
    if (exist1.qty === 1) {
      setCart(cart.filter((items) => items !== productRemove))
    } else {
      cart.forEach((items) => {
        if (items.id === productRemove.id) {
          productRemove.qty = productRemove.qty - 1
        }
      });
      setCart(cart.filter((items) => items));
    }
  }
  const totalPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);

  return (
  <div>
     <Navbar cartLength={cartLength} />
     <Menu />

  <div className="page-top-info">
    <div className="container">
      <h4>Panier </h4>
    {/*   <div className="site-pagination">
        <a href>Home</a> /
        <a href>Your cart</a>
      </div> */}
    </div>
  </div>
  {/* Page info end */}
  {/* cart section end */}
  <section className="cart-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="cart-table">
            <h3>Ton panier</h3>
            <div className="cart-table-warp">
              <table>
                <thead>
                  <tr>
                    <th className="product-th">Produits</th>
                    <th className="quy-th">Catégorie</th>
                    <th className="quy-th">Quantité</th>
                    <th className="total-th">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item,id)=>(
                  <tr key={id}>
                    <td className="product-col">
                      <img src={item.img} alt="img" />
                      <div className="pc-title">
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                      </div>
                        </td>
                        <td className="size-col"><h4>{item.cat}</h4></td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty"><span className="dec qtybtn" onClick={() => handleButtonDel(item)}>-</span>
                              <input type="text" value={item.qty} />
                              <span className="inc qtybtn" onClick={() => handleButtonAdd(item)}>+</span></div>
                          </div>

                        </td>
                        <td className="total-col"><h4>${item.price}</h4></td>
                      </tr>

                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="total-cost">
              <h6>Total <span>${totalPrice}</span></h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-right">
          <form className="promo-code-form">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </form>
          <Link className="site-btn">Proceed to checkout</Link>
          <Link className="site-btn sb-dark">Continue shopping</Link>
        </div>
      </div>
    </div>
  </section>
  {/* cart section end */}
  <Footer />
  <BackTop/>
</div>

  )
}

export default Cart
