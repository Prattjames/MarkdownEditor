import React, {Component} from 'react';
import Header from '../containers/Header';
import {Bins} from '../../imports/collections/Bins';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default App;
