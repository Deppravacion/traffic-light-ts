import { Component } from "react";

const lightOptions = ['green', 'yellow', 'red']
export class ClassTrafficLight extends Component {
  state = {
    lightOptionIndex: 0,
  }

  nextStateFunction = (): void => {
    if (this.state.lightOptionIndex < (lightOptions.length - 1)) {
      this.setState({lightOptionIndex: this.state.lightOptionIndex + 1})
    } else {
      this.setState({lightOptionIndex: this.state.lightOptionIndex - (lightOptions.length - 1)})
    }
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={lightOptions[this.state.lightOptionIndex] == 'red' ? 'circle red' : 'circle black'}></div>
          <div className={lightOptions[this.state.lightOptionIndex] == 'yellow' ? 'circle yellow' : 'circle black'}></div>
          <div className={lightOptions[this.state.lightOptionIndex] == 'green' ? 'circle green' : 'circle black'}></div>
        </div>
        <button 
        className="next-state-button"
        onClick={this.nextStateFunction}
        >Next State</button>
      </div>
    );
  }
}
