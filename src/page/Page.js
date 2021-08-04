import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../features/card/Card.js';
import Slice from '../features/slice/Slice.js';
import Menu from '../features/menu/Menu.js';
import Login from '../features/login/Login.js';
import './page.css';
import { useLocation } from 'react-router-dom';

function Page() {
  const [dataProducts, setDataProducts] = useState([]);
  const [typeMenu, setType] = useState('COMBO 1 NGUOI');
  const location = useLocation();
  //window.location.reload();
  let c;
  useEffect(async () => {
    let a = await axios.get('http://localhost:2000/products');
    let b = location.pathname.split('-').join('');
    c = b.substring(1);
    setDataProducts(a.data[c]);
    setType(location.pathname.split('-').join(' ').substring(1).toUpperCase());
  }, []);

  return (
    <div className="page">
      <div className="page-style">
        <Menu />
        <div className="slider-style">
          <Slice />
        </div>
        <h6 className="type-menu">{typeMenu}</h6>
        <div className="product-item">
          {dataProducts.map((x) => {
            return <Card name={x.name} price={x.price} text={x.text} />;
          })}
        </div>

        <Login></Login>
      </div>
    </div>
  );
}

export default Page;
