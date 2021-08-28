import React from 'react';

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };

    this.toggleFlag = this.toggleFlag.bind(this);
  }

  toggleFlag() {
    this.setState((state) => {
      return {
        flag: !state.flag
      }
    });
  }

  render() {

    return (
      <div className="lifecycle">
        <button onClick={this.toggleFlag}>
          Toggle Components
        </button>

        {
          this.state.flag ?
            <ComponentA/>
            :
            <ComponentB/>
        }
      </div>
    )
  }
}


export default LifecycleComponent;

class ComponentA extends React.Component {
  constructor() {
    super();
    console.log("Component A constructor");
  }

  componentDidMount() {
    console.log("Component A is mounted");
  }

  componentWillUnmount() {
    console.log("Component A will unmount now!");
  }

  render() {
    console.log("Component A is rendering");
    return <div className="component-a">
      <h3>This is component A rendering</h3>
    </div>
  }
}

class ComponentB extends React.Component {
  constructor() {
    super();
    console.log("Component B constructor");
  }

  componentDidMount() {
    console.log("Component B is mounted");
  }

  componentWillUnmount() {
    console.log("Component B will unmount now!");
  }

  render() {
    console.log("Component B is rendering");
    return <div className="component-b">
      <h3>
        This is component B rendering
      </h3>
    </div>
  }
}
