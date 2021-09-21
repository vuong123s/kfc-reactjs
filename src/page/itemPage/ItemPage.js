import React, { useContext, useState, useEffect } from 'react';
import './itemPage.css';
import { MyContext } from '../../features/context/Context';
import { useRouteMatch } from 'react-router';
import Drink from './drink.png';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import ErrPage from '../errPage/ErrPage';
import { Link } from 'react-router-dom';

export default function ItemPage() {
  const match = useRouteMatch();
  const value = useContext(MyContext);
  const { products, addToCart } = value;

  const { itemPage, id } = match.params;
  let dataItem;
  if (
    products[itemPage.split('-').join('')] === undefined ||
    isNaN(Number(id)) === true
  ) {
    dataItem = 0;
  } else {
    dataItem = products[itemPage.split('-').join('')][id - 1];
  }
  const [total, setTotal] = useState(1);
  const [num, setNum] = useState(0);
  const [numItem, setNumItem] = useState(0);
  const [text, setText] = useState(
    dataItem !== 0
      ? dataItem.text.map((x) => {
          return x.split(' / ')[0];
        })
      : []
  );

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
    text.forEach((e, i) => {
      document.getElementById(`${i}0`).checked = true;
    });
  }, []);

  if (dataItem === 0) return <ErrPage></ErrPage>;

  return (
    <div className="body">
      <div className="left">
        <div className="itemPageContent">
          <h3 className="l-title">{dataItem.name}</h3>
          {dataItem.text.map((x, index) => {
            return (
              <>
                <p className="l-note">
                  Moi chon 1 trong {x.split(' / ').length} mon duoi day
                </p>
                {index === dataItem.text.length - 1 && (
                  <div className="l-choose-b">
                    {x.split(' / ').map((item, i) => {
                      return (
                        <div className="drink">
                          <img src={Drink} />
                          <p>{item}</p>
                          <div className="radio">
                            <input
                              onClick={(e) => {
                                let a = [...text];
                                a.splice(index, 1, e.target.value);
                                setText(a);
                              }}
                              type="radio"
                              id={`${index}${i}`}
                              value={item}
                              name={`${index}`}
                            />
                             
                            <label id={`${index}${i}`} for={`${index}${i}`}>
                              Có sẵn
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {index < dataItem.text.length - 1 && (
                  <div className="l-choose-t">
                    {x.split(' / ').map((item, i) => {
                      return (
                        <div className="radio">
                          <input
                            type="radio"
                            onClick={(e) => {
                              let a = [...text];
                              a.splice(index, 1, e.target.value);
                              setText(a);
                            }}
                            id={`${index}${i}`}
                            name={`${index}`}
                            value={item}
                          />
                           
                          <label id={`${index}${i}`} for={`${index}${i}`}>
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
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
                <BiPlusCircle onClick={pluses} className="space" />
                {numItem}
                <BiMinusCircle onClick={minuses} className="space" />
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
                <BiPlusCircle onClick={plus} className="space" />
                {num}
                <BiMinusCircle onClick={minus} className="space" />
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
            {text.map((x) => {
              return <li>{x}</li>;
            })}
          </ul>
          <div className="quantity">
            <div className="quan">
              <BiPlusCircle className="space" onClick={plusTotal} />
              {total}
              <BiMinusCircle className="space" onClick={minusTotal} />
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
            <p>Tổng tiền:</p>
            <p>{dataItem.price * total + numItem * 25000 + num * 50000}</p>
          </div>
          <Button
            onClick={() => {
              let pushItem = [
                {
                  name: dataItem.name,
                  price: dataItem.price,
                  text: text,
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
              addToCart(pushItem);
            }}
            variant="danger"
            className="total-btn"
          >
            Thêm vào giỏ hàng
          </Button>
          <Link to="/">
            <Button variant="outline-dark" className="total-btn">
              Quay lại thực đơn
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
