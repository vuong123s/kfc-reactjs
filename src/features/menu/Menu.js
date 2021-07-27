import React, { useState } from 'react';
import './menu.css'
import {FaShoppingCart} from 'react-icons/fa'
import { Link, NavLink } from "react-router-dom";
import Img from './image/logo_pc.png'
import classNames from 'classnames';

function Menu(props) {
    let styleFixed = {}
    let b = false
    const [scroll, setScroll] = useState(false)
    window.addEventListener('scroll', () => {
        let a = window.scrollY
        if (a > 75) setScroll(true)
        else setScroll(false)
    })

    return (
        <div>
            <div>
                <div className='bar-logo'>
                    <div className='style-img-bar-logo'>
                        <img src={Img} />
                    </div>
                    <div></div>
                </div>
                <div className={classNames('menu', {'isScroll': scroll})}>
                    <div className="menu-content">
                        <NavLink to='/combo-1-nguoi'><div className='list-style'>COMBO 1 NGƯỜI</div></NavLink>
                        <NavLink to='/combo-nhom'><div className='list-style'>COMBO NHÓM</div></NavLink>
                        <NavLink to='/menu-uu-dai'><div className='list-style'>MENU ƯU ĐÃI</div></NavLink>
                        <NavLink to='/mon-le'><div className='list-style'>MÓN LẺ</div></NavLink>
                    </div>
                    <div className='cart-style'>
                        <Link to='#'><FaShoppingCart className='cart-icon-style' /></Link>
                        <span className='login-style'><Link to='#'>Đăng nhập</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;