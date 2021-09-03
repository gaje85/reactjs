import {useCallback, useState} from 'react';

function StateAndCallback() {
  const [count, setCount] = useState(100);

  const incrementCount = () => {
    setCount(currentCount => {
      return currentCount + 1;
    });
  };

  const decrementCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(100);
  }

  const incCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const resCount = useCallback(() => {
    setCount(count);
  }, [count]);

  return (
    <div className="container">
      Count is {count}
      <br/>
      <button onClick={incrementCount}>
        Increment
      </button>
      <button onClick={incCount}>
        Increment Memoized
      </button>
      <button onClick={decrementCount}>
        Decrement
      </button>
      <button onClick={decCount}>
        Decrement Memoized
      </button>
      <button onClick={resetCount}>
        Reset
      </button>
      <button onClick={resCount}>
        Reset Memoized
      </button>
    </div>
  )
}

export default StateAndCallback;
