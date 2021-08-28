import React from 'react';
import "./form-styles.css";
import {doPOST} from './Utils';

class Forms extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "x@gmail.com",
      loggedIn: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

  }

  onInputChange(event) {
    console.log("Event fired when input changes - ", event);

    if(event.target.id === "email") {
      this.setState({
        email: event.target.value
      });
    } else if (event.target.id === "password") {
      this.setState({
        password: event.target.value
      });
    }
  }

  onButtonClick(event) {
    console.log("Button clicked ", event);
    console.log("Form submitted ", this.state);
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    // The actual login URL was not working, so ended up using the create user url for the heck of it.
    // Dont worry the idea is still the same
    doPOST("https://reqres.in/api/register", payload)
      .then(body => {
        console.log("I got a response -", body);
        this.setState({
          loggedIn: true
        });
      }).catch(err => {
        console.log("I got an error - ", err);
      this.setState({
        loggedIn: false
      });
    })
  }

  render() {
    return (
      <div className="form-container">
        <div>
          <label htmlFor="email">
            Enter an email
          </label>
          <input type="text"
                 onChange={this.onInputChange}
                 name="name"
                 defaultValue={this.state.email}
                 id="email"/>
        </div>
        <br/>
        <div>
          <label htmlFor="password">
            Enter a password
          </label>
          <input type="password"
                 onChange={this.onInputChange}
                 name="password"
                 id="password"/>
        </div>
        <br/>
        <div>
          <button type="button"
                  onClick={this.onButtonClick}
          >
            Click Me!!
          </button>
        </div>

        {
          this.state.loggedIn ?
            <h2 className="login-success">I am logged in!</h2>
            :
            <h2 className="login-failure">I am not logged in :(</h2>
        }
      </div>
    );
  }
}

export default Forms;
