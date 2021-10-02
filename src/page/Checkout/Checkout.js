import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './checkout.css';
import { MyContext } from '../../features/context/Context';

export default function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('CN');
  const [address, setAddress] = useState('');

  const value = useContext(MyContext);
  const { cart, setCart } = value;

  async function handleSubmit(e) {
    console.log('sss');
    e.preventDefault();
    const token = async () => {
      return fetch('http://localhost:2000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address: { city, country, address },
          cart,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };
    token();
  }
  return (
    <div className="checkout">
      <h1>VUI LÒNG CUNG CẤP ĐỊA CHỈ GIAO HÀNG CỦA BẠN!</h1>
      <p>Thông tin này sẽ giúp đơn hàng của bạn được xử lý nhanh hơn</p>
      <div className="form">
        <h3>GIAO HÀNG TỚI</h3>
        <Form className="form-checkout" onSubmit={handleSubmit}>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Tên"
          />
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            type="numberphone"
            placeholder="Số điện thoại"
          />
          <Form.Select
            onChange={(e) => setCountry(e.target.value)}
            style={{ padding: '0.9rem 0.75rem', margin: '20px 0' }}
            label="Default select example"
          >
            <option value="CN">Canada</option>
            <option value="US">America</option>
            <option value="VN">Viet Nam</option>
          </Form.Select>
          <Form.Control
            onChange={(e) => setCity(e.target.value)}
            type="city"
            placeholder="Tỉnh, Thành phố"
          />

          <Form.Control
            onChange={(e) => setAddress(e.target.value)}
            type="address"
            placeholder="Địa chỉ"
          />

          <Button
            type="submit"
            className="btn-checkout"
            variant="danger"
            onClick={handleSubmit}
          >
            Tiếp tục
          </Button>
        </Form>
      </div>
    </div>
  );
}
