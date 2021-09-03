import NestedComponent from './NestedComponent';
import AnotherNestedComponent from './AnotherNestedComponent';
import AppContext from './ContextUtils';

function ParentComponent(){

  return (
    <AppContext.Consumer>
      {
        themeVal => (
          <div className={`${themeVal.theme}-parent-component`}>
            <p>This is from ParentComponent</p>
            <NestedComponent />
            <AnotherNestedComponent />
          </div>
        )
      }
    </AppContext.Consumer>
  );
}

export default ParentComponent;
