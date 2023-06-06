import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

function App(): JSX.Element {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <h4>TS  what tha H !?</h4>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight />
          </div>
          <div className="right">
            <ClassTrafficLight />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
