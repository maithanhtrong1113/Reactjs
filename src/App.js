import { useState } from "react";
import Content from "./Components/Content.js";
function App() {
  const [show, setShow] = useState(false);
  const handlerShow = () => {
    setShow(!show);
  };
  console.log("parent render");
  return (
    <div>
      <div>hello</div>
      <Content show={false}></Content>
      <button onClick={handlerShow}>Show</button>
    </div>
  );
}
export default App;
