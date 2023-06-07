import React from 'react'
import { Link} from "react-router-dom";
import './navbar.css'
const Navbar = ({cartLength}) => {
  
  const token = window.localStorage.getItem("user");
  const handleLogout = () => {
    alert("Voulez-vous vous deconnecter?");
    localStorage.clear();
 }
  return (
<header className="header-section">
  <div className="header-top">
    <div className="container-fluid">
      <div className="row justify">
        <div className="col-lg-2 text-center text-lg-left">
          {/* logo */}
         <Link to='/' className="site-logo">
            <img src="/img/logo.png" alt="z" />
          </Link>
        </div>
       {/*  <div className="col-xl-6 col-lg-5">
          <form className="header-search-form">
            <input type="text" placeholder="Search on d ...." />
            <button><i className="flaticon-search" /></button>
          </form>
        </div> */}
        <div className="col-xl-4 col-lg-5">
          <div className="user-panel">
            <div className="up-item">
              <i className="flaticon-profile" />
              <Link to="/login">Connexion</Link> | {token && <Link to="/login" onClick={handleLogout}>Deconnexion</Link>} 
            </div>
            <div className="up-item">
              <div className="shopping-card">
                <i className="flaticon-bag" />
                <span>{cartLength}</span>
              </div>
              <Link to="/cart">Panier</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Navbar
