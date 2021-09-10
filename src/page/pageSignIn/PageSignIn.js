import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Menu from '../../features/menu/Menu.js';
import './pageSignIn.css';
import { MyContext } from '../../features/context/Context';
import { Redirect, useHistory } from 'react-router-dom';

function PageSignIn(props) {
  const value = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const { registerUser, verification } = value;
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await registerUser({
      email,
      pass,
      username,
      rePass,
    });
    history.push('/combo-1-nguoi');
  };

  return (
    <div className="register-form">
      <div className="register-title">
        <h1>HÃY LÀ MỘT THÀNH VIÊN KFC NGAY HÔM NAY</h1>
        <h7>
          Tận hưởng là thành viên KFC với các ưu đãi & khuyến mãi đặc biệt!
        </h7>
      </div>
      <div className="form-style">
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="name"
              placeholder="Ten"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Mat khau"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setRePass(e.target.value)}
              type="password"
              placeholder="Nhap lai mat khau"
            />
          </Form.Group>
          {!!verification && (
            <Alert style={{ padding: '0.3rem' }} variant="danger">
              {verification}
            </Alert>
          )}

          <Button onClick={handleSubmit} variant="danger" type="submit">
            Dang ki
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PageSignIn;
