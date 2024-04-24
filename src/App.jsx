import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/Comman/Navbar";
import DashBoard from "./Pages/Dashboard";
import Footer from "./Components/Comman/Footer";
import { useDispatch } from "react-redux";
import { getProducts } from "./Redux/features/product/productAction";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Watchlist from "./Pages/Watchlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCategoryPage from "./Pages/ProductCategoryPage";
import { bringToCart } from "./Redux/features/Cart/CartActions";
import { bringToOrders } from "./Redux/features/orders/orderActions";
import { getFromWatchList } from "./Redux/features/Watchlist/watchlistaction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()); // Always fetch products
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/category/:category" element={<ProductCategoryPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
