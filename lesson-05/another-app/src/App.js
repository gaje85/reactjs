import React from 'react';
import AppContext from './components/ContextUtils';
import ParentComponent from './components/ParentComponent';

import './App.css';
import ChildrenProp from './components/ChildrenProp';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    console.log("Toggle color was clicked");
    if (this.state.theme === "dark") {
      this.setState({
        theme: "light"
      });
    } else if (this.state.theme === "light") {
      this.setState({
        theme: "dark"
      });
    }
  }

  render() {
    const myContext = {theme: this.state.theme};
    console.log("App.js --- ", myContext)
    return (
      <div className={`${this.state.theme}-app`}>
        <button onClick={this.toggleTheme}>Toggle Color</button>
        <AppContext.Provider value={myContext}>
          <ParentComponent />
        </AppContext.Provider>

        {/* Learn about props.children with this */}
        {/*<ChildrenProp />*/}

      </div>
    );
  }
}

export default App;
