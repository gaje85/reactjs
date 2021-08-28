import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
 * Below strict mode is a developer utility provided by React to test, its not necessary per se.
 * But having said that its a good to have feature which can detect bad behavior in your code
 * More details here - https://reactjs.org/docs/strict-mode.html
 *
 * You can try removing the <React.StrictMode></React.StrictMode> tags alone with the <App /> left behind and things will be fine.
 * Of course you wont get the benefits of React being strict here
 *
 **/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Uncomment below code to understand how React updates DOM only as much as its needed
// setInterval is a method which lets us run some logic at a fix period of time - logic and time interval is in our control

// setInterval(() => {
//   const element = (
//     <div className="container">
//       <h1>Hello!!!</h1>
//       <h3>{new Date().toLocaleTimeString()}</h3>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }, 1000);

