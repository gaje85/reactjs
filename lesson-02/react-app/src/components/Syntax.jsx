/*
 * Notice how React is not imported here anywhere or there is no mention of React at all
 * That's because with React 17, the need for importing React into all of your components goes away and its done implicitly
 * when the JSX transformation happens.
 *
 * With React 16 and before, we would have to do an import like below:
 * import React from 'react';
 *
 **/

/*
 * Typically in files where we write JSX code, we keep the file extension to be .jsx - this is done to make it clear the file has
 * jsx code in it for the next developer coming in. However, its not necessary for the app itself.
 *
 * Try renaming the extension to .js - make sure to kill your create-react-app server and start it again - there seems to be some bug
 * which prevents hot reloading from working when file extensions are changed like this.
 *
 **/

/*
 * JSX lets us mix HTML into regular JS and write code. Why are we doing this?
 * In teh react world, the idea that html is html and JS is JS is not taken as such - they feel that a UI layout typically gets interspersed
 * with JS logic, so it didnt make sense to strictly keep them apart for the sake of conventions.
 *
 * What React folks say is lets just group all necessary things of a particular logic or function together into something called as Components.
 * A component is basically a self contained unit of code that has all the necessary things to render something onto a page - the html, css, and the js logic as well
 *
 * More obout components later.
 *
 * For now on JSX - JSX basically lets us mix HTML and JS together and write code for the layout
 * All JSX code is basically transpiled into React.createElement() - meaning we can write React code without JSX however
 * that would be a little tedious by invoking various methods. So the easier option is to use JSX which is transpiled by Babel
 * into React.createElement()
 **/

function Syntax() {
  // This is an element that you see in this next line
  // A bunch of these React elements are put together to form a React Component - in this case, Syntax is a component
  const h3Element = <h3>Hello, how are you?</h3>;
  const name = "James Bond";

  const spyDetails = {
    name: "James Bond",
    age: 25
  };

  const nestedElements = (
    <ul>
      <li>{spyDetails.name}</li>
      <li>{spyDetails.age}</li>
    </ul>
  );

  return (
    <div className="container">
      {h3Element}
      <h3>My name is {name}</h3>
      <h3>My age is {getTheAge()}</h3>
      <ul>
        <li>{spyDetails.name}</li>
        <li>{spyDetails.age}</li>
      </ul>
      {nestedElements}
    </div>
  );
}

function getTheAge() {
  return 25;
}

export default Syntax;
