import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css';
import { MyContext } from '../context/Context.js';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Login(props) {
  const value = useContext(MyContext);
  const { display, isDisplay } = value;

  const onSubmit = () => {
    console.log(document.getElementById('formBasicEmail').value);
    console.log(document.getElementById('formBasicPassword').value);
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
              <MdCancel onClick={isDisplay} />
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
            <Form action="/sub">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button onClick={onSubmit} variant="danger" type="submit">
                ĐĂNG NHẬP
              </Button>
              <p className="forgotPass">Quên mật khẩu</p>
              <Link className="signin" to="/sign-in">
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
