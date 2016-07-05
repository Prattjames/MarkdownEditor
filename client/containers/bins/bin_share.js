import React, {Component} from 'react';

class BinShare extends Component {

  onShareClick(){
    const email = this.refs.email.value;
    console.log(email);
    Meteor.call('bins.share', this.props.bin, email);
  }

  renderShareList(){
    return this.props.bin.sharedWith.map((email, i) => {
      return <button key={i} className="btn btn-default">{email}</button>
    });
  }

  render(){
    if(!this.props.bin)
      return null

    return (
      <footer className="bin-share col-xs-12">
        <div className="input-group">
          <input ref="email" type="text" className="form-control"/>

          <div className="input-group-btn">
            <button
              onClick={() => this.onShareClick()}
              className="btn btn-default"
            >
              Share Bin
            </button>
          </div>
        </div>
        <div className="share-with pull-left">Shared with :</div>
        <div className="btn btn-group">
          {this.renderShareList()}
        </div>
      </footer>
    )
  }
}

export default BinShare
