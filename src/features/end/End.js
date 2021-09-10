import React from 'react';
import { Link } from 'react-router-dom';
import './end.css';
import Img from '../../page/img/3.png';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { Form, Button } from 'react-bootstrap';

function End(props) {
  return (
    <>
      <div className="end_img">
        <img src={Img} />
      </div>
      <div class="end_row">
        <div class="col_1">
          <div class="end_col">
            <div class="end_title">
              <Link href="https://kfcvietnam.com.vn/vi/thuc-don.html">
                <span>Thực đơn</span>
              </Link>
            </div>
            <div class="end_title">
              <Link href="https://kfcvietnam.com.vn/vi/nha-hang.html">
                <span>Nhà hàng</span>
              </Link>
            </div>
            <div class="end_title">
              <Link href="https://kfcvietnam.com.vn/vi/khuyen-mai.html">
                <span>Tin khuyến mãi</span>
              </Link>
            </div>
            <div class="end_title">
              <Link href="https://kfcvietnam.com.vn/vi/dat-tiec.html">
                <span>Đặt tiệc sinh nhật</span>
              </Link>
            </div>
            <div class="end_title">
              <Link href="https://kfcvietnam.com.vn/vi/dang-ky.html">
                <span>Thành viên</span>
              </Link>
            </div>
          </div>
        </div>
        <div class="col_1">
          <div class="end_title">
            <Link href="https://kfcvietnam.com.vn/vi/thuc-don.html">
              <span>Giới thiệu</span>
            </Link>
          </div>
          <div class="end_text">
            <Link href="https://kfcvietnam.com.vn/vi/nha-hang.html">
              <span>KFC Việt Nam</span>
            </Link>
          </div>
          <div class="end_text">
            <Link href="https://kfcvietnam.com.vn/vi/khuyen-mai.html">
              <span>Tin tức</span>
            </Link>
          </div>
        </div>
        <div class="col_1">
          <div class="end_title">
            <Link href="https://kfcvietnam.com.vn/vi/thuc-don.html">
              <span>Nghề nghiệp</span>
            </Link>
          </div>
          <div class="end_text">
            <Link href="https://kfcvietnam.com.vn/vi/nha-hang.html">
              <span>Tuyển dụng</span>
            </Link>
          </div>
        </div>
        <div class="col_2">
          <div className="connect">
            <div className="connect-left">
              <div class="end_title">
                <Link href="https://kfcvietnam.com.vn/vi/thuc-don.html">
                  <span>Kết nối với KFC</span>
                </Link>
              </div>
              <div class="end_text">
                <Link href="https://kfcvietnam.com.vn/vi/nha-hang.html">
                  <span>Liên hệ</span>
                </Link>
              </div>
            </div>
            <div className="connect-right">
              <ImFacebook2 style={{ fontSize: '30px', margin: '0 5px' }} />
              <AiFillYoutube style={{ fontSize: '45px' }} />
              <AiFillInstagram style={{ fontSize: '40px' }} />
            </div>
          </div>
          <div className="col_2_bottom">
            <p>Đăng ký nhận thông tin ưu đãi</p>

            <Form className="form_col_2">
              <Form.Control type="email" placeholder="Nhập email" />
              <Button className="end_btn" variant="danger" type="submit">
                Đăng kí
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default End;
