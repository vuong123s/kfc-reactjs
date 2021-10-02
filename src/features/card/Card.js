import React, { useState, useRef, useContext } from 'react';
import './card.css';
import A from './a.png';
import classNames from 'classnames';
import { MyContext } from '../context/Context.js';
import { Link } from 'react-router-dom';

function Card(props) {
  const { name, price, text, id } = props;
  const [check, setCheck] = useState(false);
  let b = false;
  const [a, setA] = useState({
    height: '1px',
  });
  const getHeight = useRef();
  const onClick = () => {
    setCheck(!check);
    setA({
      height: check === true ? '1px' : `${getHeight.current.clientHeight}px`,
    });
  };
  const value = useContext(MyContext);
  const { addToCart, setIsAdded, setData } = value;

  const pathname = window.location.pathname;

  return (
    <div className="cards">
      <div className="card-style">
        <img src="https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg" />
        <div className="bottom-card">
          <h5>{name}</h5>
          <p>
            <span className="price">
              {price}
              <small>.000đ</small>
            </span>
          </p>
          <div
            style={a}
            className={classNames('show-text', { 'show-list': check })}
          >
            <ul ref={getHeight}>
              {text.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </div>
          <div
            onClick={onClick}
            className={classNames('img', { rotate: check })}
          >
            <img src={A} />
          </div>
          <div className="all-button">
            <Link to={`${id}`} className="button">
              CUSTOMIZE
            </Link>
            <div
              onClick={() => {
                addToCart([
                  {
                    name,
                    price,
                    text: text.map((x) => {
                      return x.split(' / ')[0];
                    }),
                    quantity: 1,
                    id,
                  },
                ]);
                setIsAdded(true);
                setTimeout(() => {
                  setIsAdded(false);
                }, 4000);
                setData(props);
              }}
              className="button red"
            >
              ORDER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
