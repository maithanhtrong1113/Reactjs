import { useReducer } from "react";
import "./App.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
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
