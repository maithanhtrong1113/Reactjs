import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Home from "./Components/Home";
import Support from "./pages/Support";
import Search from "./pages/Search";
import User from "./pages/User";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
