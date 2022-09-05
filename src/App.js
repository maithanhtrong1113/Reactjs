import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import AppContext from "./store/AppContext";
function App() {
  const [theme, setTheme] = useState("dark");
  const buttonHandle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <AppContext.Provider value={theme}>
      <button onClick={buttonHandle}>Chang Theme</button>
      <Content></Content>
    </AppContext.Provider>
  );
}
export default App;
