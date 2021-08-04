import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Menu from '../../features/menu/Menu.js';
import './pageSignIn.css';

function PageSignIn(props) {
  return (
    <div className="page">
      <div className="page-style">
        <Menu></Menu>
        <div className="register-form">
          <div className="register-title">
            <h1>HÃY LÀ MỘT THÀNH VIÊN KFC NGAY HÔM NAY</h1>
            <h7>
              Tận hưởng là thành viên KFC với các ưu đãi & khuyến mãi đặc biệt!
            </h7>
          </div>
          <div className="form-style">
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="" placeholder="Number Phone" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSignIn;
