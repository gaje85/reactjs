import React from 'react';

class TempReader extends React.Component {
  constructor() {
    super();

    // necessary to bind as always
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("Child component on change - ", e.target.value);
    this.props.onTempChange(this.props.type, e.target.value);
  }


  render() {
    const type = this.props.type === 'CELSIUS' ? 'Celsius' : 'Fahrenheit';

    return (
      <div className="temp-reader-container">
        <label htmlFor="temperature">
          Enter temperature in {type}
        </label>
        <br/>
        <input type="text"
               name="temperature"
               value={this.props.temperature}
               onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TempReader;
