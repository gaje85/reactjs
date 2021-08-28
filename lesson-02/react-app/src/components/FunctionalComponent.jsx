/*
* This is a basic and simple example of a functional component.
*
* - They are very convenient and easy to declare a component.
* - A components name typically starts with first letter in each word of
*   the name being Upper-cased.
* - It takes a props (or properties object) as input arguments
* - It returns a React element to be rendered or displayed on the basis of the props and the business logic written
*   in the function
* - The props object will contain the key/values for the attributes that are set when the component is called. In this
*   case this component has an attribute called name which is made available on props.name
*
* - A functional component can be a very easy way to breakdown a page with a lot of sections into re-usable pieces of components
* - The props are read-only attributes that are passed into the functional component - they are not to be modified
*
* We will see a lot more of them when we study React hooks but for now this will do.
**/
function FunctionalComponent(props) {
  // Try uncommenting below line and see how things blow up
  // props.name = "Another name"
  return <h1>Hello {props.name}, I am a functional component</h1>
}

export default FunctionalComponent;
