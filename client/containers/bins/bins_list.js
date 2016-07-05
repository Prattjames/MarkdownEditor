import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/Bins';
import {Link} from 'react-router';
import * as _ from 'lodash';

class BinsList extends Component {

  onBinRemove(bin){
    Meteor.call('bins.remove', bin);
  }

  renderBins(){
    return this.props.bins.map(bin => {
      return <li className="list-group-item" key={bin._id}>
      <Link to={`bin/${bin._id}`}>Bin: {bin._id}</Link>
      <span className="pull-right">
        <button onClick={() => this.onBinRemove(bin)} className="btn btn-danger">
          Remove
        </button>
      </span>
      </li>
    })
  }

  render(){
    if(!this.props.bins || this.props.bins.length === 0){ return (<div>Waiting for bins</div>); }
    let firstBin = _.head(this.props.bins);

    return (
      <div>
        <h3>{this.props.bins && !firstBin.ownerId && "Public Bins : "}</h3>
        <ul className="list-group" >{this.renderBins()}</ul>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return {bins: Bins.find({}).fetch()};
}, BinsList);
