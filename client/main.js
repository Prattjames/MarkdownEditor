import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import BinsList from './containers/bins/bins_list';
import BinMain from './containers/bins/bin_main';

Meteor.startup(() => {

  let routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BinsList} />
        <Route path="bin/:binId" component={BinMain} />
        <Route path="*" component={BinsList} />
      </Route>
    </Router>
  );

  render(
    routes,
    document.querySelector('.container-fluid')
  );
})
