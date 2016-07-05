import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {

  onEditChange(content){
    Meteor.call('bins.update', this.props.bin, content);
  }

  render(){
    if(!this.props.bin)
      return null

    return (
      <div className="col-xs-7">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={(e) => this.onEditChange(e)}
          options={{ mode: 'markdown', lineNumbers: true}}
        />
      </div>
    )
  }
}

export default BinEditor;
