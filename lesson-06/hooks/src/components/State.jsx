import React from 'react';
import './styles.css';

/*
* - Dont call hooks in conditions or loops; always call at the top level
* - Call from a React Functional Component
**/

function State () {
  const [count, setCount] = React.useState(100);
  const [myState, setMyState] = React.useState({});
  // Your state can be a primitive or a complex object - choice is yours
  
  return (
    <div className="container">
      Count is {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Increment
      </button>
      <button onClick={() => setCount(100)}>
        Reset
      </button>
    </div>
  )
}

export default State;
