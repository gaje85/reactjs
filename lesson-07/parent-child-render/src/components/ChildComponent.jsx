import React from 'react';
import GrandchildComponent from './GrandchildComponent';

import './child-styles.css';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: Math.random()
    };

    this.updateRandom = this.updateRandom.bind(this);
  }

  updateRandom() {
    this.setState({
      randomNum: Math.random()
    });
  }

  render() {
    console.log("Child component render fired");
    return (
      <div className="child-component">
        <h4>Date time from parent component - {this.props.datetime}</h4>
        <h4>Random number of child component - {this.state.randomNum}</h4>
        <button onClick={this.updateRandom}>
          Update random in child component
        </button>

        <GrandchildComponent datetime={this.props.datetime}
                             randomNum={this.state.randomNum}
        />
      </div>
    );
  }
}

export default ChildComponent;
