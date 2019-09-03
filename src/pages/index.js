import React from "react"
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import 'normalize.css';
import Home from '../components/Home';

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>;