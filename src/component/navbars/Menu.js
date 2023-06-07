import React from 'react'
import { Link} from "react-router-dom";
import "./menu.css"
 
const Menu = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid menus">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <Link to="/" className="nav-link"  data-toggle aria-haspopup="true" aria-expanded>Accueil</Link>
        </li>
        <li className="nav-item">
        <Link to="/category" className="nav-link"  data-toggle aria-haspopup="true" aria-expanded>Catégorie</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link"  data-toggle aria-haspopup="true" aria-expanded>A propos</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className="nav-link"  data-toggle aria-haspopup="true" aria-expanded>Contact</Link>
        </li>
      </ul>
    </div>
     </div>
   </nav>

  )
}

export default Menu

