import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import "./banner.css"
const Banner = ({ thirsTitle, title, subtitle, email }) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <Link className="thirst">{thirsTitle}</Link>
          </div>
          {email && <div className="col foms">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2" className="signup" >SIGN UP</InputGroup.Text>
            </InputGroup>
          </div>}
        </div>
      </div>
      <div />
    </div>
  );
};

export default Banner;
