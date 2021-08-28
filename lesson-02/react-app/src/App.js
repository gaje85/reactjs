import logo from './logo.svg';
import './App.css';
import Syntax from './components/Syntax';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import LifecycleComponent from './components/LifecycleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Syntax />
      <div>
        <h3>Using functional components</h3>
        <FunctionalComponent name="James Bond"/>
        <FunctionalComponent name={"Lara Croft"}/>
        <ClassComponent date={new Date()}/>
      </div>
    </div>

    // <LifecycleComponent/>
  );
}

export default App;
