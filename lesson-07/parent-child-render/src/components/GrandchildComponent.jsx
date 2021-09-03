import React from 'react';

class GrandchildComponent extends React.Component {
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
    console.log("Grand child component render fired");
    return (
      <div style={{border: "1px solid green"}}>
        <h4>Date time from parent component - {this.props.datetime}</h4>
        <h4>Random number of child component - {this.props.randomNum}</h4>
      </div>
    );
  }
}

export default GrandchildComponent;
