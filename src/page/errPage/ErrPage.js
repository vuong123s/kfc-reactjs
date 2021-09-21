import React from 'react';
import './errPage.css';
import Img from './err.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

export default function ErrPage() {
  return (
    <div className="errP">
      <img className="errP-img" src={Img} />
      <h2>RẤT TIẾC! CHÚNG TÔI XIN LỖI</h2>
      <p>
        Trang bạn đang truy cập có thể đã bị xóa, đã thay đổi tên hoặc tạm thời
        không có.
      </p>
      <Button variant={'danger'}>
        <Link to="/">
          <AiOutlineLeft />
          Quay lai thuc don
        </Link>
      </Button>
    </div>
  );
}
