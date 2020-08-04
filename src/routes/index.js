import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './../pages/Home';
import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact to="/signin" from="/" />

      <Route path="/home" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
}
