import { Component } from "react";
import { getLightColor } from "./utils";

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
    const currColor = lightOptions[this.state.lightOptionIndex]
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={` circle ${getLightColor(currColor, 'red')}`}></div>
          <div className={` circle ${getLightColor(currColor, 'yellow')}`}></div>
          <div className={` circle ${getLightColor(currColor, 'green')}`}></div>
        </div>
        <button 
        className="next-state-button"
        onClick={this.nextStateFunction}
        >Next State</button>
      </div>
    );
  }
}
