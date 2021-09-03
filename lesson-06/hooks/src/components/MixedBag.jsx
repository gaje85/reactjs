import {useState, useCallback} from 'react';
import DisplayThings from './DisplayThings';


function MixedBag() {
  const [displayFlag, setDisplayFlag] = useState(false);
  const [age, setAge] = useState(20);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const toggleDisplay = useCallback(() => {
    setDisplayFlag(!displayFlag);
  }, [displayFlag])

  const updateAgeFromChild = useCallback((ageFromChild) => {
    setAge(ageFromChild);
  }, []);


  return (
    <div className="mixed-bag">
      <h4>Age in mixed bag component - {age}</h4>
      <button onClick={incrementAge}>Click me</button>
      <br/>
      <br/>
      <button onClick={toggleDisplay}>Toggle child component</button>

      {
        displayFlag &&
        <DisplayThings age={age}
                       updateParent={updateAgeFromChild}
        />
      }

    </div>
  );
}

export default MixedBag;
