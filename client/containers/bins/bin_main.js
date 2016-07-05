import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/Bins';
import BinEditor from './bin_editor';
import BinViewer from './bin_viewer';
import BinShare from './bin_share';

class BinMain extends Component {

  render(){
    console.log(this.props.bin);
    return (
      <div>
        <BinEditor bin={this.props.bin} />
        <BinViewer bin={this.props.bin} />
        <BinShare bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer(({ params: {binId}}) => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return { bin: Bins.findOne(binId) };
}, BinMain);
