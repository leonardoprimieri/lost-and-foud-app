import React from 'react';

import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import LostItemsMap from '../pages/LostItemsMap';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NewLostItem from '../pages/NewLostItem';
import LeaveComment from '../pages/LeaveComment';
import Comments from '../pages/Comments';
import Admin from '../pages/Admin';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lost-items/new" component={NewLostItem} />
        <Route path="/lost-items" component={LostItemsMap} />

        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />

        <Route path="/comments" component={Comments} />
        <Route path="/leave-comment" component={LeaveComment} />

        <Route path="/admin" component={Admin} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
