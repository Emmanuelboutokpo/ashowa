import React from 'react'
import './contact.css'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../../component/footer/Footer'
import BackTop from '../../component/backToTop/BackTop'
import Navbar from '../../component/navbar/Navbar';
import Menu from '../../component/navbars/Menu';

const Contact = ({cartLength}) => {
  return (
    <div>
       <Navbar cartLength={cartLength} />
       <Menu />
      <div className="container my-5">
        <h3 className="contactForm mb-3">Contact information</h3>
      <Row className="g-2">
      <Col md className='mr-4'>
        <FloatingLabel className='mb-4' controlId="floatingInputGrid" label="Adresse" >
          <Form.Control type="text" placeholder="Adresse" />
        </FloatingLabel>
        <FloatingLabel className='mb-4' controlId="floatingInputGrid" label="Telephone">
          <Form.Control type="text" placeholder="Telephone" />
        </FloatingLabel>
        <FloatingLabel className='mb-4' controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel className='mb-4' controlId="floatingInputGrid" label="Website">
          <Form.Control type="url" placeholder="Website" />
        </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel className='mb-4' controlId="floatingInputGrid" label="Sujet">
          <Form.Control type="text" placeholder="Sujet" />
        </FloatingLabel>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
        <button className="btn btn-primary" type="submit">Envoyer message</button>
      </Col>
      </Row>
      </div>
      <Footer />
      <BackTop />
    </div>
  )
}

export default Contact
