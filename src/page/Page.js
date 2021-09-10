import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from '../features/card/Card.js';
import Slice from '../features/slice/Slice.js';
import Menu from '../features/menu/Menu.js';
import Login from '../features/login/Login.js';
import './page.css';
import { useLocation } from 'react-router-dom';
import Img1 from './img/1.png';
import Img2 from './img/2.png';
import End from '../features/end/End.js';
import { MyContext } from '../features/context/Context.js';

function Page() {
  const [dataProducts, setDataProducts] = useState([]);
  const [typeMenu, setType] = useState('COMBO 1 NGUOI');
  const location = useLocation();
  const value = useContext(MyContext);
  const { products, count } = value;

  //window.location.reload();
  let c;
  useEffect(() => {
    let b = location.pathname.split('-').join('');
    c = b.substring(1);
    setDataProducts(products[c]);
    setType(location.pathname.split('-').join(' ').substring(1).toUpperCase());
  }, [count]);

  return (
    <>
      <div className="slider-style">
        <Slice />
      </div>
      <h6 className="type-menu">{typeMenu}</h6>
      <div className="product-item">
        {dataProducts.map((x) => {
          return <Card name={x.name} price={x.price} text={x.text} id={x.id} />;
        })}
      </div>
      <div className="bigorder_app">
        <img src={Img1} />
        <img src={Img2} />
      </div>
    </>
  );
}

export default Page;
