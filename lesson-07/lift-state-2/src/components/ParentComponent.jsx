import React from 'react';
import InputChild from './InputChild';
import DisplayChild from './DisplayChild';

class ParentComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      randomInput: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      randomInput: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <InputChild randomInput={this.state.randomInput}
                    onInputChange={this.onChange}
        />
        <DisplayChild randomInput={this.state.randomInput}/>
      </div>
    );
  }
}

export default ParentComponent;
