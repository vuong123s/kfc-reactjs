import React, { useState, useContext, useEffect } from 'react';
import './menu.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiFillQqCircle } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';
import Img from './image/logo_pc.png';
import classNames from 'classnames';
import { MyContext } from '../context/Context.js';
import AddedCart from '../addedCart/AddedCart';
import styled from 'styled-components';

function Menu(props) {
  const value = useContext(MyContext);
  const { listItem } = value;
  const { isDisplay, isLogined, Logout, cart } = value;
  const [scroll, setScroll] = useState(false);
  const [check, setCheck] = useState(false);
  const [style, setStyle] = useState(true);
  const { pathname } = useLocation();
  window.addEventListener('scroll', () => {
    let a = window.scrollY;
    if (a > 75) setScroll(true);
    else setScroll(false);
  });
  useEffect(() => {
    setStyle(true);
  }, [pathname]);

  const BarStyle = styled.div`
    @media (max-width: 800px) {
      height: ${style === true ? '82px' : '100%'};
    } ;
  `;

  const MenuContain = styled.div`
    @media (max-width: 800px) {
      display: ${style === true ? 'none' : 'flex'};
    } ;
  `;
  return (
    <div className="bar">
      <BarStyle className="bar-style" media={{}}>
        <div className="bar-logo">
          <div className="style-img-bar-logo">
            <img src={Img} />
            <CgMenu
              onClick={() => setStyle(!style)}
              className="bar-logo-icon"
            />
          </div>
        </div>
        <div className={classNames('menu', { isScroll: scroll })}>
          <MenuContain className="menu-contain">
            <AddedCart />
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
                  <span
                    onClick={() => setCheck(!check)}
                    className="login-style"
                  >
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
          </MenuContain>
        </div>
      </BarStyle>
    </div>
  );
}

export default Menu;
