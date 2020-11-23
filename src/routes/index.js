import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LostItemsMap from '../pages/LostItemsMap';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NewLostItem from '../pages/NewLostItem';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lost-items/new" component={NewLostItem} />
        <Route path="/lost-items" component={LostItemsMap} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;