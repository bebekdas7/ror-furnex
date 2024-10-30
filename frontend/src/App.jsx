import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Collection from "./components/Collection";
import { Toaster } from "react-hot-toast";
import EditProfile from "./components/EditProfile";
import Product from "./components/Product";
import Order from "./components/Order";
import Myorder from "./components/Myorder";
import MyOrders from "./components/Myorder";
import Cart from "./components/Cart";

function App() {
  const userId = sessionStorage.getItem("userId");
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders userId={userId} />} />
        </Routes>

        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
