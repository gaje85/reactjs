import React from 'react';

class ClassComponent extends React.Component {
  /*
  * A constructor is the method that is called before the component is mounted and rendered
  * It is the first method invoked in the lifecycle - it happens only once per lifecycle
  *
  * Mounting - this basically describes when this React component is attached into the DOM tree
  *
  * L
  **/
  constructor(props) {
    // Make sure to call super with props in the constructor, otherwise we cant use this.state or this.props here in this method
    super(props);
    this.state = {
      date: new Date(),
      name: "James Bond",
      sum: 0
    }
    console.log(`In constructor I got this prop - ${this.props.date}`);
  }

  /*
  * This is another lifecycle method which runs after the react component is mounted or attached into the DOM tree
  **/
  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      this.setupTimeTicker();
    }, 1000);
  }

  /*
  * Write a method which when called will update the state of the component with a new date object
  * We can achieve this with the help of the setState method. This method is automatically available in all
  * React Class components on the `this` object
  *
  * It accepts a new state object which is then merged with the existing state object
  **/
  setupTimeTicker() {

    //1. Make sure to never modify state directly like this.state.date = new Date();
    this.setState({
      date: new Date()
    });

    //2. State updates are asynchronous and batched. So calling set state like this twice may end up getting batched for performance reasons
    // Also, due to the async nature of the update - dont expect the current value on this.state to be updated when you are doing any logic for
    // updating to the newer state value

    // this.setState({
    //   sum: 10
    // });
    // this.setState({
    //   sum: 20
    // });

    /*
    * Below kinds of updates may not always work out - so caution!
    * */
    // this.setState({
    //   sum: this.state.sum + 1
    // });

    /*
    * setState also accept a fn as first parameter where we get the latest updated state and props that we can make use of
    * for such computations
    *
    * The second fn is a callback invoked on successful update of the state
    **/

    this.setState((state) => {
      console.log("In this setstate - ", state);
      return {
        sum: state.sum + 1
      };
    }, () => {
      console.log("I am callback that is invoked once a state update is done!");
    });

  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const datePassed = this.props.date;
    return (
      <>
        <h3>The current time is {datePassed.toLocaleTimeString()}</h3>
        <h3>The name is {this.state.name}</h3>
        <h3>The name is {this.state.sum}</h3>
        <h3>The current time is {this.state.date.toLocaleTimeString()}</h3>
      </>
    );
  }
}

export default ClassComponent;
