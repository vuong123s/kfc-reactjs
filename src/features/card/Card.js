import React, { useState, useRef } from 'react';
import './card.css'
import A from "./a.png"
import classNames from 'classnames';

function Card(props) {
    const [check, setCheck] = useState(false)
    let b = false
    const [a, setA] = useState({
        height: '1px',
    })
    const getHeight = useRef()
    const onClick = () => {
        setCheck(!check)
        setA({height: (check === true)?'1px' : `${getHeight.current.clientHeight}px`})
        console.log(typeof getHeight.current.clientHeight)
    }
    return (
        <div className="card" >
            <img src="https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg" />
            <div>
                <h5>
                    <span>COMBO FRIED CHICKEN D</span>
                </h5>
                <p>
                    <span className="price">
                        89<small>.000đ</small>
                    </span>
                </p>
                <div style={a} className={classNames('show-text', {'show-list': check})}>
                    <ul ref={getHeight}>
                        <li>1 Pc of Hot & Spicy Chicken / 1 Pc of Non Spicy Crispy Chicken / 1 Pc of Original Recipe Chicken</li>
                        <li>1 Pc Flava Roast Burger / 1 Pc Zinger Burger</li>
                        <li>1 Pepsi Can</li>
                    </ul>
                </div>
                <div onClick={onClick} className={classNames('img',{'rotate': check})}><img src={A} /></div>
                <div className="all-button">
                    <div className="button">CUSTOMIZE</div>
                    <div className="button red">ORDER</div>
                </div>
            </div>
        </div>
    );
}

export default Card;