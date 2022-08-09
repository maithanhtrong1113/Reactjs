import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  const DateBuy = new Date();
  const ProductList = [
    { ProductName: "MacBook Surface 2022", ProductPrice: 299 },
    { ProductName: "Acer ProMax", ProductPrice: 499 },
    { ProductName: "Iphone XS Max", ProductPrice: 199 },
  ];
  return (
    <div className="container">
      <h2>Cart</h2>
      <h1>{DateBuy.toDateString()}</h1>
      <NavBar
        name={ProductList[0].ProductName}
        price={ProductList[0].ProductPrice}
      ></NavBar>
      <NavBar
        name={ProductList[1].ProductName}
        price={ProductList[1].ProductPrice}
      ></NavBar>
      <NavBar
        name={ProductList[2].ProductName}
        price={ProductList[2].ProductPrice}
      ></NavBar>
    </div>
  );
}

export default App;
