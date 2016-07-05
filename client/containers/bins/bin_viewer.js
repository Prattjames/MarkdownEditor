import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';
import {markdown} from 'markdown';

class BinViewer extends Component {

  render(){
    if(!this.props.bin)
      return null

    const rawHTML = markdown.toHTML(this.props.bin.content);
    return (
      <div className="col-xs-5" style={{overflow: 'hidden'}}>
        <h5>Output</h5>
        <Markdown source={this.props.bin.content} options={{html: true}} />
      </div>
    );
  }
}

export default BinViewer;
