import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./publicite.css"
const Publicite = () => {
  return (
    <div className='container-fluid space'>
      <div className="row rows">
      <Carousel fade={true} controls={false}>
      <Carousel.Item>
        
          <Carousel.Caption>
            <p className='p'>BIENVENUE CHEZ DIVISIMI</p>
          </Carousel.Caption>
        <div>
         
        </div>
      </Carousel.Item>
     
     <Carousel.Item>
     
        <Carousel.Caption>
            <p className='pa'>Nous sommes passionnés par la création d'habits uniques qui reflètent le style et la personnalité de chacun.</p>      
          </Carousel.Caption>
      
      </Carousel.Item>  
    </Carousel>
      </div>
    </div>
  )
}

export default Publicite
