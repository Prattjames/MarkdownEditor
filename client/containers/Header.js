import React, {Component} from 'react';
import Accounts from './Accounts';
import {Link, browserHistory} from 'react-router';

class Header extends Component {

  onBinClick(e){
    e.preventDefault();
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`bin/${binId}`);
    });
  }

  render(){
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <h1 className="logo">Markbin</h1>
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={(e) => this.onBinClick(e)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
