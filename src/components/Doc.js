import { useContext } from "react";
import AppContext from "../store/AppContext";
import "./Doc.css";
function Doc() {
  const theme = useContext(AppContext);

  return <p className={theme}>vanw badsjjansjdnjasjbbdasdk</p>;
}
export default Doc;
