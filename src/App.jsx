import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import RegisterUserForm from "./pages/RegisterUserForm";
import { LoginForm } from "./pages/LoginForm";

function App() {
  return (
    <div className="bg-gray-100 h-lvh">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

const AppLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/womens" element={<ShopCategory category="kids" />} />
        <Route path="/kids" element={<ShopCategory category="mens" />} />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterUserForm />} />
      </Routes>
    </>
  );
};

export default App;
