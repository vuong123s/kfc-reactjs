import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './login.css';

import { MyContext } from '../context/Context.js';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Login(props) {
  const value = useContext(MyContext);
  const { display, isDisplay, loginUser, checkLogin } = value;

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      email,
      pass,
    });
  };

  return (
    <div
      className="login-page"
      style={{ display: display === false ? 'none' : '' }}
    >
      <div className="login-page-style">
        <div className="login">
          <div className="login-card">
            <div className="cancel-icon">
              <MdCancel
                onClick={() => {
                  isDisplay();
                }}
              />
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col1"></div>
              <div className="col"></div>
              <div className="col1"></div>
              <div className="col"></div>
              <div className="col1"></div>
              <div className="col"></div>
              <div className="col1"></div>
              <div className="col"></div>
            </div>
            <h5 className="login-title">đăng nhập</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              {!!checkLogin && (
                <Alert style={{ padding: '0.3rem' }} variant="danger">
                  {checkLogin}
                </Alert>
              )}
              <Button variant="danger" type="submit">
                ĐĂNG NHẬP
              </Button>
              <p className="forgotPass">Quên mật khẩu</p>
              <Link
                onClick={() => {
                  setTimeout(() => {
                    window.location.reload();
                  });
                }}
                className="signin"
                to="/sign-in"
              >
                Đăng kí
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
