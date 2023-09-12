import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../../Assets/img/01.png";
import img2 from '../../Assets/img/02.png';
import img3 from '../../Assets/img/03.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='w-100' src={img1} alt="01" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src={img2} alt="02" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src={img3} alt="03" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider