import React,{useState} from "react";
import {Alert} from 'react-bootstrap';
import { Link,useNavigate} from "react-router-dom";
import "./login.css"

const Login = () => {
  const initial = {
    email : "",
    password : ""
  }
  const [formValue, setFormValue] = useState(initial);
  const [err, setError] = useState(null);
  const{email, password} = formValue;
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!email.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        setError("Le email n'est pas valide!");
    }else if (!password.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
       setError("Le mot de passe doit contenir minimum 8 caractères, une majuscule, un chiffre et un caractère spécial!")
    } else {
       navigate('/');
       localStorage.setItem('user', JSON.stringify({user : "connecté"}));
    }
}

const handleChange = (e) =>{
 let { name, value } = e.target;
 setFormValue({ ...formValue, [name]: value })
}
  return (
     <>
     <div className="createCompte">
     <div className="logs">
             <Link className="oros">
                 DIVISIMA
             </Link>
           <h1 className="createTitles">Se connecter</h1>
           </div> 
           {err && <Alert variant="danger">{err}</Alert>}
         <form className="formLogin" onSubmit={handleSubmit}>
         <div className="form-group mb-4">
               <input type="email" autoComplete="off"  className="loginInput" placeholder="Email" name="email" value={email} onChange={handleChange} />
             </div>
             <div className="form-group mb-4">
               <input type="password" autoComplete="off"  className="loginInput" placeholder="Mot de password" name="password" value={password} onChange={handleChange}/>
             </div>
           <button  type="submit" className="loginRegisterButton">Se connecter</button>
           <span className="spanCreate">
                N'avez pas un compter veuillez vous <Link to="/register">inscrire</Link>
           </span>
         </form>
       </div>
       </>
  )
}

export default Login
