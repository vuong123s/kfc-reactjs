import React, { useContext, useState } from 'react';
import './itemInCart.css';
import { MyContent, MyContext } from '../context/Context';
import Img from './1.png';
import { Button } from 'react-bootstrap';

export default function ItemInCart() {
  const value = useContext(MyContext);
  const { cart } = value;
  return (
    <div>
      <div className="title">
        <p>GIỎ HÀNG CỦA BẠN</p>
      </div>

      {cart.length > 0 &&
        cart.map((x) => {
          console.log(x);
          return (
            <div className="item">
              <div className="item-content">
                <div className="content-top">
                  <h3>{x.name}</h3>
                </div>
              </div>
            </div>
          );
        })}

      {cart.length === 0 && (
        <div className="noItem">
          <img src={Img} />
          <p>Giỏ của bạn trống?</p>
          <p>Đặt hàng để thưởng thức công thức đặc biệt của KFC.</p>
          <Button className="btn-cart" variant="danger">
            ĐẶT HÀNG NGAY
          </Button>
        </div>
      )}
    </div>
  );
}
