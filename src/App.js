import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(60);
  const ref = useRef(99);
  const handleStart = () => {
    ref.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(ref.current);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default App;
