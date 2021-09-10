import './App.css';
import Page from './page/Page.js';
import { useState, useEffect, useContext } from 'react';
import Context from './features/context/Context';
import Login from './features/login/Login';
import End from './features/end/End.js';
import PageSignIn from './page/pageSignIn/PageSignIn.js';
import PageCart from './page/pageCart/PageCart';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './features/menu/Menu.js';
import ItemPage from './page/itemPage/ItemPage';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:2000/products').then((res) => {
      setData(res.data);
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Context products={data}>
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
            >
              <Page />
            </Route>
            <Route exact path="/" exact>
              <Redirect to="/combo-1-nguoi" exact></Redirect>
            </Route>
            <Route path="/sign-in" exact>
              <PageSignIn></PageSignIn>
            </Route>
            <Route path="/cart" exact>
              <PageCart></PageCart>
            </Route>
            <Route path="/:itemPage/:id">
              <ItemPage></ItemPage>
            </Route>
          </Switch>
          <Login></Login>
          <End></End>
        </div>
      </Context>
    );
  }
}
export default App;
