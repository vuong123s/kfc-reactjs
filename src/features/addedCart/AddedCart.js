import React, { useState, useContext } from 'react';
import './addedCart.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import { MyContext } from '../context/Context';

export default function AddedCart(props) {
  const value = useContext(MyContext);
  const { isAdded, setIsAdded, data } = value;
  return (
    <div
      className="addedCart"
      style={{ display: isAdded === false ? 'none' : 'block' }}
    >
      <div className="body-aC">
        <h3>Bạn đã thêm:</h3>
        <IoMdCloseCircle
          onClick={() => {
            setIsAdded(false);
          }}
          className="i-addedCart"
        />
        <div className="b-addedCart">
          <p>1x {data.name}</p>
          <p>
            {data.price}
            <small>.000</small>
          </p>
        </div>
        <Button className="btn-aC" variant="danger">
          Gio hang & thanh toan
        </Button>
      </div>
    </div>
  );
}
