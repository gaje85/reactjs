import React from 'react';
import AppContext from './ContextUtils';
import AnotherNestedComponent from './AnotherNestedComponent';

class NestedComponent extends React.Component {

  render() {
    return (
      <div className={`${this.context.theme}-nested-component`}>
        <p>This is from NestedComponent</p>
        <AnotherNestedComponent />
      </div>
    )
  }
}

NestedComponent.contextType = AppContext;

export default NestedComponent;
