import React from 'react'
import "./last.css"
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Pub from '../pub/Pub';
import data from '../../data';

const Last = ({cart, setCart}) => {
     const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (

    <div  className="event__bg" id="event">
    <h2 className="headtext__cormorants">DERNIERS PRODUITS</h2>
    <div className="app__pub-images">
        <div className="app__pub-images_container" ref={scrollRef}>
        {
             data.map((item, index) =>(
              <Pub key={index} item={item} setCart={setCart} cart={cart} />
             ))
        }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>

    </div>
  )
}

export default Last
