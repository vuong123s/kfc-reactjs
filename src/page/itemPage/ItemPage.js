import React, { useContext, useState, useEffect } from 'react';
import './itemPage.css';
import { MyContext } from '../../features/context/Context';
import { useRouteMatch } from 'react-router';
import Drink from './drink.png';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { Button } from 'react-bootstrap';

export default function ItemPage() {
  const match = useRouteMatch();
  const value = useContext(MyContext);
  const { products, setCart, cart } = value;

  const { itemPage, id } = match.params;
  let dataItem = products[itemPage.split('-').join('')][id - 1];
  const [total, setTotal] = useState(1);
  const [num, setNum] = useState(0);
  const [numItem, setNumItem] = useState(0);
  const [food, setFood] = useState('2 Miếng Gà Giòn Cay ');
  const [drink, setDrink] = useState('Pepsi Lon');

  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    if (num > 0) setNum(num - 1);
  };
  const pluses = () => {
    setNumItem(numItem + 1);
  };
  const minuses = () => {
    if (numItem > 0) setNumItem(numItem - 1);
  };
  const plusTotal = () => {
    setTotal(total + 1);
  };
  const minusTotal = () => {
    if (total > 1) setTotal(total - 1);
  };

  useEffect(() => {
    document.querySelectorAll('#d0').forEach((x) => {
      if (x.value === food) x.checked = true;
    });
    document.querySelectorAll('#drink1').forEach((x) => {
      if (x.value === drink) x.checked = true;
    });
  }, []);

  return (
    <div className="body">
      <div className="left">
        <h3 className="l-title">{dataItem.name}</h3>
        <p className="l-note">Moi chon 1 trong {} mon duoi day</p>
        <div className="l-choose-t">
          {dataItem.text[0].split('/').map((item, i) => {
            return (
              <div className="radio">
                <input
                  type="radio"
                  onClick={(e) => {
                    setFood(e.target.value);
                  }}
                  id={`d${i}`}
                  name="fav_language"
                  value={item}
                />
                 <label for={`d${i}`}>{item}</label>
              </div>
            );
          })}
        </div>
        <p className="l-note">Đổi size tráng miệng - thức uống</p>
        <div className="l-choose-b">
          <div className="drink">
            <img src={Drink} />
            <p>Pepsi Lon</p>
            <div className="radio">
              <input
                onClick={(e) => {
                  setDrink(e.target.value);
                }}
                type="radio"
                id="drink1"
                value="Pepsi Lon"
                name="drink"
              />
               <label for="drink1">Có sẵn</label>
            </div>
          </div>
          <div className="drink">
            <img src={Drink} />
            <p>Hộp Milo</p>
            <div className="radio">
              <input
                onClick={(e) => {
                  setDrink(e.target.value);
                }}
                type="radio"
                id="drink2"
                value="Hộp Milo"
                name="drink"
              />
               <label for="drink2">+2000đ</label>
            </div>
          </div>
        </div>
        <div className="addOns-title">
          <h3>Add-Ons</h3>
          <div className="add-on">
            <img src={Drink} />
            <div className="addOnText">
              <div className="text">
                <h6>1 khoai tay chien & 1 lon pepsi</h6>
                <p>25.000đ</p>
              </div>
              <div className="num-bought">
                <BiPlusCircle onClick={pluses} className="plus" />
                {numItem}
                <BiMinusCircle onClick={minuses} className="minus" />
              </div>
            </div>
          </div>
          <div className="add-on">
            <img src={Drink} />
            <div className="addOnText">
              <div className="text">
                <h6>Bánh trứng</h6>
                <p>50.000đ</p>
              </div>

              <div className="num-bought">
                <BiPlusCircle onClick={plus} className="plus" />
                {num}
                <BiMinusCircle onClick={minus} className="minus" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="bill">
          <h3>
            {total}x {dataItem.name}
          </h3>
          <ul className="selec">
            <li>{food}</li>
            <li>{drink}</li>
          </ul>
          <div className="quantity">
            <div className="quan">
              <BiPlusCircle onClick={plusTotal} className="plus" />
              {total}
              <BiMinusCircle onClick={minusTotal} className="minus" />
            </div>
            <p>{dataItem.price * total}</p>
          </div>

          {num > 0 && (
            <div className="quantity">
              <p>Bánh trứng ({num} cai) </p>
              <p>{num * 50000}</p>
            </div>
          )}

          {numItem > 0 && (
            <div className="quantity">
              <p>1 khoai tay chien & 1 lon pepsi ({numItem} cai) </p>
              <p>{numItem * 25000}</p>
            </div>
          )}
          <div className="total">
            <p>Tổng tiền</p>
            <p>{dataItem.price * total + numItem * 25000 + num * 50000}</p>
          </div>
          <Button
            onClick={() => {
              let pushItem = [
                {
                  name: dataItem.name,
                  price: dataItem.price,
                  text: [food, drink],
                  quantity: total,
                },
              ];
              if (num > 0)
                pushItem.push({
                  name: 'Bánh trứng',
                  price: 25000,
                  quantity: num,
                });
              if (numItem > 0)
                pushItem.push({
                  name: '1 khoai tay chien & 1 lon pepsi',
                  price: 50000,
                  quantity: numItem,
                });
              setCart([...cart, ...pushItem]);
            }}
            variant="danger"
            className="total-btn"
          >
            Thêm vào giỏ hàng
          </Button>
          <Button variant="outline-dark" className="total-btn">
            Quay lại thực đơn
          </Button>
        </div>
      </div>
    </div>
  );
}
