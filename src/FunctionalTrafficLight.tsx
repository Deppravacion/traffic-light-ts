import { useState } from "react";
import { FC } from 'react'
import { getLightColor } from "./utils";

const lightOptions = ['green', 'yellow', 'red']

export const FunctionalTrafficLight: FC = () => {
  const [lightOptionIndex, setLightOptionIndex] = useState(0)
  const nextStateFunction = () => {
    if (lightOptionIndex < (lightOptions.length - 1)) {
      setLightOptionIndex(lightOptionIndex + 1)
    } else {
      setLightOptionIndex(lightOptionIndex - (lightOptions.length - 1))
    }
  }
  const currColor = lightOptions[lightOptionIndex]
  
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={` circle ${getLightColor(currColor, 'red')}`}></div>
        <div className={` circle ${getLightColor(currColor, 'yellow')}`}></div>
        <div className={` circle ${getLightColor(currColor, 'green')}`}></div>
      </div>
      <button 
        className="next-state-button"
        onClick={() => nextStateFunction()}
      >Next State
      </button>
    </div>
  );
};



