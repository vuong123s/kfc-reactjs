import React, { useState, useRef } from 'react';
import './card.css';
import A from './a.png';
import classNames from 'classnames';

function Card(props) {
  const { name, price, text } = props;
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
  return (
    <div className="cards">
      <div className="card-style">
        <img src="https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg" />
        <div className="bottom-card">
          <h5>
            <span>{name}</span>
          </h5>
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
            <div className="button">CUSTOMIZE</div>
            <div className="button red">ORDER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
