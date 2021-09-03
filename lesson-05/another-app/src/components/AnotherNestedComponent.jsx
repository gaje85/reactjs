import {useContext} from 'react';
import AppContext from './ContextUtils';

function AnotherNestedComponent() {
  const value = useContext(AppContext);

  return (
    <div className={`${value}-another-nested-component`}>
      <p>This is from AnotherNestedComponent</p>
    </div>
  )
}

export default AnotherNestedComponent;
