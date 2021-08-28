import React from 'react';
import './basic-events-styles.css';

class BasicEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "James Bond"
    };

    //we need to use bind for methods that where we we use `this`
    // Refer - https://reactjs.org/docs/faq-functions.html
    this.onButtonClick = this.onButtonClick.bind(this);

    // For other events in React - https://reactjs.org/docs/events.html
  }

  onButtonClick(event) {
    console.log("I got clicked! - ", this.state);
    console.log("Event I got - ", event.target);
  }

  render() {
    return (
      <div className="basic-events">
        <p>In this section we will take a quick look at a basic click event</p>
        <button className="click-me-button"
                onClick={this.onButtonClick}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default BasicEvents;
