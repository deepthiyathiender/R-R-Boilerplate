import React from 'react';
import { Route } from 'react-router';
import App from 'containers/app';
import Favs from 'components/Favs'

export const routes = (
  <Route>
    <Route path="/" component={App} >
        <Route path="/favs" component={Favs} />
    </Route>
  </Route>
);

export default routes;
