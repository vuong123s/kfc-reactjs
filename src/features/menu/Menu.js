import React, { useState, useContext } from 'react';
import './menu.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Img from './image/logo_pc.png';
import classNames from 'classnames';
import { MyContext } from '../context/Context.js';

function Menu(props) {
  const value = useContext(MyContext);
  const { isDisplay } = value;
  let styleFixed = {};
  let b = false;
  const [scroll, setScroll] = useState(false);
  window.addEventListener('scroll', () => {
    let a = window.scrollY;
    if (a > 75) setScroll(true);
    else setScroll(false);
  });
  const reloadData = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };
  return (
    <div className="bar-style">
      <div className="bar-logo">
        <div className="style-img-bar-logo">
          <img src={Img} />
        </div>
      </div>
      <div className={classNames('menu', { isScroll: scroll })}>
        <div className="menu-content">
          <NavLink onClick={reloadData} to="/combo-1-nguoi">
            <div className="list-style">COMBO 1 NGƯỜI</div>
          </NavLink>
          <NavLink onClick={reloadData} to="/combo-nhom">
            <div className="list-style">COMBO NHÓM</div>
          </NavLink>
          <NavLink onClick={reloadData} to="/menu-uu-dai">
            <div className="list-style">MENU ƯU ĐÃI</div>
          </NavLink>
          <NavLink onClick={reloadData} to="/mon-le">
            <div className="list-style">MÓN LẺ</div>
          </NavLink>
        </div>
        <div className="cart-style">
          <Link to="#">
            <FaShoppingCart className="cart-icon-style" />
          </Link>
          <span onClick={isDisplay} className="login-style">
            Đăng nhập
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
