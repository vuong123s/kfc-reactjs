import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

export const MyContext = React.createContext();

function Context(props) {
  const { products } = props;
  const [display, setDisplay] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [verification, setVerification] = useState('');
  const [checkLogin, setCheckLogin] = useState('');
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);

  const isDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const checkLogin = localStorage.getItem('token');
    if (!checkLogin === false) {
      setIsLogined(true);
    }
  }, []);

  async function loginUser(credentials) {
    return fetch('http://localhost:2000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length > 3) {
          setIsLogined(true);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));
          setDisplay(false);
        } else {
          setCheckLogin(data.message);
        }
      });
  }

  async function registerUser(params) {
    return fetch('http://localhost:2000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length > 3) {
          setIsLogined(true);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));
          setDisplay(false);
        } else {
          setVerification(data.message);
        }
      });
  }

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLogined(false);
  };

  const listItem = (i) => {
    setCount(i);
  };
  return (
    <MyContext.Provider
      value={{
        display,
        isDisplay,
        loginUser,
        isLogined,
        setIsLogined,
        Logout,
        registerUser,
        verification,
        checkLogin,
        cart,
        setCart,
        products,
        listItem,
        count,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default Context;
