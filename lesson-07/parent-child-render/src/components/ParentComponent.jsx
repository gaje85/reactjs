import React from 'react';
import ChildComponent from './ChildComponent';

import './parent-styles.css';

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      datetime: new Date().toLocaleTimeString()
    };

    this.updateDateTime = this.updateDateTime.bind(this);
  }

  updateDateTime() {
    this.setState({
      datetime: new Date().toLocaleTimeString()
    });
  }

  render() {
    console.log("Parent component render fired");
    return (
      <div className="parent-component">
        <h3>Value of datetime: {this.state.datetime}</h3>
        <button onClick={this.updateDateTime}>
          Update date time in parent component
        </button>
        <ChildComponent datetime={this.state.datetime}/>
      </div>
    );
  }
}

export default ParentComponent;
