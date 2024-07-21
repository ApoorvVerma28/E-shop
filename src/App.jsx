import React from "react";
import { Navigate } from "react-router-dom";
import MyState from "./context/MyState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import AllProducts from "./pages/allProducts/AllProducts";
import Dashboard from "./pages/Admin/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/addproduct/AddProduct";
import UpdateProduct from "./pages/updateproduct.jsx/UpdateProduct";
import Cart from "./pages/cart/Cart";
import Order from "./pages/Orders/Order";
import ProductInfo from "./pages/productInfo/ProductInfo";
import About from "./components/about/About";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<AllProducts />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutesForAdmin>
                  <Dashboard />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <AddProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <UpdateProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/order"
              element={
                <ProtectedRoutes>
                  <Order />
                </ProtectedRoutes>
              }
            />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </MyState>
    </>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "apoorvverma73@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
