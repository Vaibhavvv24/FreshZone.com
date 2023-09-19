import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import { Groceryprovider } from "./contexts/grocerycontext";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/cart-context";
import Checkout from "./pages/Checkout";
import Location from "./components/Location";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import Signup from "./pages/signup";
import { AuthProvider } from "./contexts/authcontext";
import Protected from "./components/protect";
import Profile from "./pages/Profile";
import Forgot from "./pages/forgot";
import Phonesignup from "./pages/phonesignup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <AuthProvider>
      <Groceryprovider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route path="location" element={<Location />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="contact" element={<Contact />} />
              <Route path="forgot" element={<Forgot />} />
              <Route
                path="profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route path="phonesignIn" element={<Phonesignup />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="checkout" element={<Checkout />} />
              <Route index element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </Groceryprovider>
    </AuthProvider>
  );
}

export default App;
