import Img1 from './image/1.png';
import Img2 from './image/2.png';
import Img3 from './image/3.png';
import Img4 from './image/4.png';
import Img5 from './image/5.png';
import Img6 from './image/6.png';
import Img7 from './image/7.png';
import Img8 from './image/8.png';
import React, { useState, useEffect } from 'react';
import './slice.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slice = (props) => {
  let sliceImg = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  return (
    <div className="slider">
      <Carousel>
        {sliceImg.map((x) => {
          return (
            <Carousel.Item>
              <img className="d-block a w-100" src={x} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slice;
