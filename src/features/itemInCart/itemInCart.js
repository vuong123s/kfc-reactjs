import React, { useContext, useState } from 'react';
import './itemInCart.css';
import { MyContent, MyContext } from '../context/Context';
import { Link } from 'react-router-dom';
import Img from './1.png';
import { Button } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';

export default function ItemInCart() {
  const value = useContext(MyContext);
  const { cart, setCart } = value;
  let [quan, setQuan] = useState(1);

  return (
    <div className="component">
      {cart.length > 0 && (
        <>
          <p className="hv-title">GIỎ HÀNG CỦA BẠN</p>
          <div className="info-cart">
            <div className="list-item">
              {cart.map((x, i) => {
                return (
                  <div className="item">
                    <div className="item-content">
                      <div className="content-top">
                        <div className="t-item">
                          <div className="l-item">
                            <h3>{x.name}</h3>
                            <ul>
                              {x.text !== undefined &&
                                x.text.map((i) => {
                                  return <li>{i}</li>;
                                })}
                            </ul>
                          </div>
                          <div className="r-item">
                            <FaPen />
                            <IoMdCloseCircle
                              onClick={() => {
                                let deleteList = [...cart];
                                deleteList.splice(i, 1);
                                setCart(deleteList);
                              }}
                              className="r-close"
                            />
                          </div>
                        </div>
                        <div className="b-item">
                          <div className="cal">
                            <BiPlusCircle
                              onClick={() => {
                                x.quantity = x.quantity + 1;
                                setQuan(quan + 1);
                              }}
                              className="space"
                            />
                            {x.quantity}
                            <BiMinusCircle
                              onClick={() => {
                                if (x.quantity > 1) {
                                  x.quantity = x.quantity - 1;
                                  setQuan(quan + 1);
                                }
                              }}
                              className="space"
                            />
                          </div>
                          <div>
                            {x.quantity * x.price}
                            <small>.000</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bill-cart">
              <div className="t-bill">
                <h3>Tong don hang</h3>
                <p>
                  {cart.length > 1
                    ? cart.reduce((a, b) => {
                        return a + b.quantity * b.price;
                      }, 0)
                    : cart[0].quantity * cart[0].price}
                  <small>.000đ</small>
                </p>
              </div>
              <div className="b-bill">
                <Button variant="danger" className="total-btn">
                  Thanh toan
                </Button>
                <Link to="/">
                  <Button variant="outline-dark" className="total-btn">
                    Quay lại thực đơn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <>
          <p className="no-title">GIỎ HÀNG CỦA BẠN</p>
          <div className="noItem">
            <img src={Img} />
            <p>Giỏ của bạn trống?</p>
            <p>Đặt hàng để thưởng thức công thức đặc biệt của KFC.</p>
            <Link to="/">
              <Button className="btn-cart" variant="danger">
                ĐẶT HÀNG NGAY
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
