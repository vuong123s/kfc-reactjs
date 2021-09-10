import React, { useState, useContext } from 'react';
import './menu.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AiFillQqCircle } from 'react-icons/ai';
import Img from './image/logo_pc.png';
import classNames from 'classnames';
import { MyContext } from '../context/Context.js';

function Menu(props) {
  const value = useContext(MyContext);
  const { listItem } = value;
  const { isDisplay, isLogined, setIsLogined, Logout, cart } = value;
  const [scroll, setScroll] = useState(false);
  const [check, setCheck] = useState(false);
  window.addEventListener('scroll', () => {
    let a = window.scrollY;
    if (a > 75) setScroll(true);
    else setScroll(false);
  });

  return (
    <div className="bar-style">
      <div className="bar-logo">
        <div className="style-img-bar-logo">
          <img src={Img} />
        </div>
      </div>
      <div className={classNames('menu', { isScroll: scroll })}>
        <div className="menu-content">
          <NavLink onClick={() => listItem(1)} to="/combo-1-nguoi">
            <div className="list-style">COMBO 1 NGƯỜI</div>
          </NavLink>
          <NavLink onClick={() => listItem(2)} to="/combo-nhom">
            <div className="list-style">COMBO NHÓM</div>
          </NavLink>
          <NavLink onClick={() => listItem(3)} to="/menu-uu-dai">
            <div className="list-style">MENU ƯU ĐÃI</div>
          </NavLink>
          <NavLink onClick={() => listItem(4)} to="/mon-le">
            <div className="list-style">MÓN LẺ</div>
          </NavLink>
        </div>
        <div className="cart-style">
          <Link className="cart" to="/cart">
            <FaShoppingCart className="cart-icon-style" />
            <span className="itemCart">{cart.length}</span>
          </Link>

          {!isLogined && (
            <span onClick={isDisplay} className="login-style">
              Đăng nhập
            </span>
          )}

          {isLogined && (
            <>
              <span onClick={() => setCheck(!check)} className="login-style">
                <AiFillQqCircle size={20} />
                <ul
                  style={{ display: check === true ? 'block' : 'none' }}
                  onClick={Logout}
                  className="login-bar"
                >
                  <li>Đăng xuất</li>
                </ul>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
