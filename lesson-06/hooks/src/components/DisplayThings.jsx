import {useCallback, useEffect, useState} from 'react';


function DisplayThings(props) {
  console.log("Display things running");
  /* obviously we can use the props.age directly,
  * but say we want to store it in local state so that we can modify it for our purposes
  * like via an input field or something else
  *
  * In this case lets just use a simple input field to take the value and update it
  *
  * */
  const [age, setAge] = useState(props.age);

  useEffect(() => {
    // This logic or effect will run whenever props.age changes
    console.log("Use effect checking for props.age change runs");
    setAge(props.age);
  }, [props.age]);

  useEffect(() => {
    console.log("Use effect fired for component mount");

    return () => {
      console.log("Use effect fired for component unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Use effect with nothing in dependency array");
  });

  const updateAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);


  const onButtonClick = useCallback(() => {
      props.updateParent(age)
  }, [props.updateParent, age])

  return (
    <div className="display-things">
      <h4>Hi, This is my age from parent component - {props.age}</h4>
      <h4>Hi, This is my age stored in child component - {age}</h4>
      <p>
        You can modify the age by entering a value in the input field and updating it locally.
      </p>
      <input type="text" value={age} onChange={updateAge}/>

      <button onClick={onButtonClick}>Update in Parent</button>
    </div>
  )
}

export default DisplayThings;
