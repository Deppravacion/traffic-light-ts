import { useState } from "react";
import { FC } from 'react'

const lightOptions = ['green', 'yellow', 'red']

export const FunctionalTrafficLight: FC = () => {
  const [lightOptionIndex, setLightOptionIndex] = useState(0)
  const nextStateFunction = ():void => {
    if (lightOptionIndex < (lightOptions.length - 1)) {
      setLightOptionIndex(lightOptionIndex + 1)
    } else {
      setLightOptionIndex(lightOptionIndex - (lightOptions.length - 1))
    }
  }
  
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={lightOptions[lightOptionIndex] == 'red' ? 'circle red' : 'circle black'}></div>
        <div className={lightOptions[lightOptionIndex] == 'yellow' ? 'circle yellow' : 'circle black'}></div>
        <div className={lightOptions[lightOptionIndex] == 'green' ? 'circle green' : 'circle black'}></div>
      </div>
      <button 
        className="next-state-button"
        onClick={() => nextStateFunction()}
      >Next State
      </button>
    </div>
  );
};



