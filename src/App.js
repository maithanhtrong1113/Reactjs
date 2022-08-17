import { useReducer } from "react";
import "./App.css";

const countReducer = (state, action) => {
  if (action.type === "INCREASE") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREASE") {
    return {
      count: state.count - 1,
    };
  }
};

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const handleClickIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleClickDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div className="Count">
      <div className="App">
        <h1>Hello {state.count}</h1>
      </div>
      <div className="button">
        <button onClick={handleClickDecrease}>-</button>
        <button onClick={handleClickIncrease}>+</button>
      </div>
    </div>
  );
}
export default App;
