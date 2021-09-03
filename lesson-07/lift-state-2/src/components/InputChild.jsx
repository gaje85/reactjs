import React from 'react';

class InputChild extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="input-container">
        <label htmlFor="random">
          Enter something here:
        </label>
        <input type="text"
               name="random"
               value={this.props.randomInput}
               onChange={this.props.onInputChange}
        />
      </div>
    );
  }
}

export default InputChild;
