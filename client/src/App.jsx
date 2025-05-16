import { Routes, Route, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
