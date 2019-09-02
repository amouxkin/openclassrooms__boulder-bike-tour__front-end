import React from "react"
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
    </Switch>
  </BrowserRouter>;