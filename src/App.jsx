import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaHome, FaLeaf, FaDrumstickBite, FaGlassWhiskey, FaLock, FaShoppingCart, FaBoxOpen, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";

// Import components
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Signing from "./Signing";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CartComponent from "./CartComponent";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Signup from "./Signup";
// import Orders from "./Orders";
import Orders from "./Orders"; // ✅ Correct


import './App.css';
import { logoutUser } from "./Store";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <header>
        <div className="logo">🛍️ FreshMart</div>

        {/* Navigation with User Authentication Check */}
        <nav className="icon">
          {/* Show Welcome Message and Log Out when authenticated */}
          {isAuthenticated ? (
            <div className="welcome-message">
              <span>Welcome, {currentUser.username}</span>
              <button onClick={() => dispatch(logoutUser())}>Log Out</button>
            </div>
          ) : (
            // Show Sign In button when not authenticated
            <div className="auth-links">
              <Link to="/signing"><FaLock /> Sign In</Link>
            </div>
          )}

          {/* Other links */}
          <Link to="/"><FaHome className="nav-icon home-icon" /> Home</Link>
          <Link to="/Veg"><FaLeaf className="nav-icon veg-icon" /> VegItems</Link>
          <Link to="/NonVeg"><FaDrumstickBite className="nav-icon nonveg-icon" /> NonVegItems</Link>
          <Link to="/Milk"><FaGlassWhiskey className="nav-icon milk-icon" /> MilkItems</Link>
          <Link to="/Chocolate"><GiChocolateBar className="nav-icon chocolate-icon" /> Chocolate</Link>
          <Link to="/CartComponent">
            <FaShoppingCart className="nav-icon cart-icon" /> Cart {cartCount > 0 ? `(${cartCount})` : ""}
          </Link>
          <Link to="/Orders"><FaBoxOpen className="nav-icon orders-icon" /> Orders</Link>
          <Link to="/AboutUs"><FaInfoCircle className="nav-icon about-icon" /> About Us</Link>
          <Link to="/ContactUs"><FaPhone className="nav-icon contact-icon" /> Contact Us</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/NonVeg" element={<Nonveg />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/Chocolate" element={<Chocolate />} />
          <Route path="/signing" element={<Signing />} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/CartComponent" element={<CartComponent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
