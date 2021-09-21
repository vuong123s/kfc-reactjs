import './App.css';
import Page from './page/Page.js';
import { useState, useEffect, useContext } from 'react';
import Context from './features/context/Context';
import Login from './features/login/Login';
import End from './features/end/End.js';
import PageSignIn from './page/pageSignIn/PageSignIn.js';
import PageCart from './page/pageCart/PageCart';
import AddedCart from './features/addedCart/AddedCart';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  generatePath,
} from 'react-router-dom';
import Menu from './features/menu/Menu.js';
import ItemPage from './page/itemPage/ItemPage';
import axios from 'axios';
import { BiChevronUpCircle } from 'react-icons/bi';
import ErrPage from './page/errPage/ErrPage';

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:2000/products').then((res) => {
      setData(res.data);
      setIsLoaded(true);
    });
  }, []);

  window.addEventListener('scroll', () => {
    let a = window.scrollY;
    if (a > 75) setScroll(true);
    else setScroll(false);
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Context products={data}>
        <div
          style={{ display: scroll === true ? 'block' : 'none' }}
          className="iconUp"
        >
          <BiChevronUpCircle
            onClick={() => {
              window.scroll(0, 0);
            }}
            className="up"
          />
        </div>

        <div className="App">
          <Menu></Menu>
          <Switch>
            <Route
              path={[
                '/combo-1-nguoi',
                '/combo-nhom',
                '/menu-uu-dai',
                '/mon-le',
              ]}
              exact
              component={Page}
            />
            <Route exact path="/" exact>
              <Redirect to="/combo-1-nguoi" exact></Redirect>
            </Route>
            <Route path="/sign-in" exact component={PageSignIn} />

            <Route path="/cart" exact component={PageCart} />
            <Route path="/:itemPage/:id" exact component={ItemPage} />
            <Route component={ErrPage} />
          </Switch>
          <Login></Login>
          <End></End>
        </div>
      </Context>
    );
  }
}
export default App;
