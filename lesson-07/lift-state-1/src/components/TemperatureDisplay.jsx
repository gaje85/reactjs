import React from 'react';
import TempReader from './TempReader';
import {convertToCelsius, convertToFahrenheit} from './TempUtils';
import BoilingPoint from './BoilingPoint';

class TemperatureDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: "100",
      type: "CELSIUS"
    };
    this.onTempChange = this.onTempChange.bind(this);
  }


  onTempChange(type, temperature) {
    console.log(`On Temp Change of ${type} - `, temperature);


    this.setState({
      type: type,
      temperature: temperature
    });
  }

  render() {
    const type = this.state.type;
    const temperature = this.state.temperature;
    const tempInC = type === 'FAHRENHEIT' ? convertToCelsius(temperature) : temperature;
    const tempInF = type === 'CELSIUS' ? convertToFahrenheit(temperature) : temperature;

    return (
      <div className="container">
        <TempReader type="CELSIUS"
                    temperature={tempInC}
                    onTempChange={this.onTempChange}/>
        <TempReader type="FAHRENHEIT"
                    temperature={tempInF}
                    onTempChange={this.onTempChange}/>

        <BoilingPoint temperature={this.state.temperature}/>
      </div>
    );
  }
}


export default TemperatureDisplay;
