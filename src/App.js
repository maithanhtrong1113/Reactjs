import "./App.css";
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import NavBar from "./components/NavBar";

const ProductList = [
  { ProductName: "MacBook Surface 2022", ProductPrice: 299, id: 1 },
  { ProductName: "Acer ProMax", ProductPrice: 499, id: 2 },
  { ProductName: "Iphone XS Max", ProductPrice: 199, id: 3 },
];
function App() {
  const [list, setList] = useState(ProductList);
  const saveData = (receiveData) => {
    const data = {
      ...receiveData,
      id: Math.random(),
    };
    console.log(data);
    setList((preList) => {
      return [data, ...preList];
    });
  };
  const DateBuy = new Date();
  return (
    <div className="container">
      <h2>Cart</h2>
      <h1>{DateBuy.toDateString()}</h1>
      <InputForm onSubmitData={saveData} />
      {list.map((Product) => (
        <NavBar
          name={Product.ProductName}
          price={Product.ProductPrice}
          key={Product.id}
        />
      ))}
      {/* map chuyển mảng Obj thành mảng component */}
    </div>
  );
}

export default App;
