import "./NavBar.css";
function NavBar(props) {
  return (
    <div className="Item">
      <h3>{props.name}</h3>
      <button className="ButtonPrice">${props.price}</button>
    </div>
  );
}
export default NavBar;
