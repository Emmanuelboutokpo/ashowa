import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Alert} from 'react-bootstrap';
import "./register.css"

const Register = () => {
  const initial = {
    nom : "",
    prenom : "",
    numero : "",
    email : "",
    password : "",
    confirmPassword : ""
  }

  const [formValue, setFormValue] = useState(initial);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [err, setError] = useState(null);
  const{nom,prenom,numero,email, password,confirmPassword} = formValue;
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
  
     if (!nom.match(/^[a-zA-Z0-9_.-]*$/) || nom==="") {
      setError("Le champs nom n'est pas valide !")
    } else if (!prenom.match(/^[a-zA-Z0-9_.-]*$/) || prenom==="") {
      setError("Le champs prenom n'est pas valide !")
    } else if (!numero.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
      setError("Le champs numero n'est pas valide  !")
    }
    else if (!email.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        setError("le champs email n'est pas valide !");
    }else if (!password.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
       setError("Le mot de passe doit contenir minimum 8 caractères, une majuscule, un chiffre et un caractère spécial!")
    } else if (!confirmPassword.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
      setError("La confirmation de mot de passe  doit contenir minimum 8 caractères, une majuscule, un chiffre et un caractère spécial!")
   }
    else if (password !== confirmPassword) {
      setError("Les deux mots de passe ne pas conformes!")
    } else {
       navigate('/login');    
    } 
}

const handleTogglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

const handleToggleConfirmPasswordVisibility = () => {
  setShowConfirmPassword(!showConfirmPassword);
};

const handleChange = (e) =>{
 let { name, value } = e.target;
 setFormValue({ ...formValue, [name]: value })
}
  return (
     <div className="register">
       <div className="logs">
        <Link className="oros">
            DIVISIMA
         </Link>
         <h1 className="createTitle">Créer un compte</h1>
      </div>
      {err && <Alert variant="danger">{err}</Alert>}
    <form onSubmit={handleSubmit}>
    <Row className="g-2">
      <Col md className='mr-4'>
        <FloatingLabel className='mb-4' label="Nom" >
          <Form.Control type="text"name='nom' placeholder="Nom" value={nom} onChange={handleChange} />
        </FloatingLabel>
        <FloatingLabel className='mb-4'label="Prenom">
          <Form.Control type="text" name='prenom' placeholder="Prenom" value={prenom} onChange={handleChange}/>
        </FloatingLabel>
        <FloatingLabel className='mb-4' label="Numero de telephone">
          <Form.Control type="text" name='numero' placeholder="+22995959595"value={numero} onChange={handleChange} />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel className='mb-4' label="Adress Email">
          <Form.Control type="email" placeholder="Adress Email" name='email'value={email} onChange={handleChange} />
        </FloatingLabel>
      <FloatingLabel className='mb-4'  label="Password">
          <Form.Control  type={showPassword ? 'text' : 'password'} autoComplete="off" name='password' placeholder="Mot de passe" value={password} onChange={handleChange} />
        <button  type="button" onClick={handleTogglePasswordVisibility}>
          {showPassword ? 'Cacher' : 'Afficher'}
        </button>
        </FloatingLabel>
        <FloatingLabel className='mb-4' label="Confirmer le mot de passe">
          <Form.Control type={showConfirmPassword ? 'text' : 'password'} autoComplete="off" name='confirmPassword' placeholder="Confirmer votre mot de passe" value={confirmPassword} onChange={handleChange}/>
        <button type="button" onClick={handleToggleConfirmPasswordVisibility}>
          {showConfirmPassword ? 'Cacher' : 'Afficher'}
        </button>
        </FloatingLabel>
      </Col>
        <input className="btn btn-primary" type="submit" value="S'inscrire " />
      </Row>
          <span className="spanCreate mt-2">
           Avez-vous un compte?  <Link to="/login">Se connecter</Link>
          </span>  
    </form>
    </div>
  )
}

export default Register
