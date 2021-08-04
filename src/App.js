import logo from './logo.svg';
import './App.css';
import Page from './page/Page.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Context from './features/context/Context';

import PageSignIn from './page/pageSignIn/PageSignIn.js';
import { Switch, Route, Router, Redirect } from 'react-router-dom';

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  return (
    <Context>
      <div className="App">
        <Switch>
          <Route
            path={['/combo-1-nguoi', '/combo-nhom', '/menu-uu-dai', '/mon-le']}
          >
            <Page />
          </Route>
          <Route exact path="/">
            <Redirect to="/combo-1-nguoi"></Redirect>
          </Route>
          <Route path="/sign-in">
            <PageSignIn></PageSignIn>
          </Route>
        </Switch>
      </div>
    </Context>
  );
}
export default App;
