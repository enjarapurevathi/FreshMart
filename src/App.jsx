import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaHome, FaLeaf, FaDrumstickBite, FaGlassWhiskey, FaLock, FaShoppingCart, FaBoxOpen, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";

import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Signing from "./Signing"; // still the same component, route path changes only
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CartComponent from "./CartComponent";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Signup from "./Signup";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Orders from "./Orders";

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
        <nav className="icon">
          {isAuthenticated ? (
            <div className="welcome-message">
              <span>Welcome, {currentUser.username}</span>
              <button onClick={() => dispatch(logoutUser())}>Log Out</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/signin"><FaLock /> Sign In</Link> {/* ✅ lowercase */}
            </div>
          )}
          <Link to="/"><FaHome className="nav-icon home-icon" /> Home</Link>
          <Link to="/Veg"><FaLeaf className="nav-icon veg-icon" /> VegItems</Link>
          <Link to="/NonVeg"><FaDrumstickBite className="nav-icon nonveg-icon" /> NonVegItems</Link>
          <Link to="/Milk"><FaGlassWhiskey className="nav-icon milk-icon" /> MilkItems</Link>
          <Link to="/Chocolate"><GiChocolateBar className="nav-icon chocolate-icon" /> Chocolate</Link>
          <Link to="/CartComponent"><FaShoppingCart className="nav-icon cart-icon" /> Cart {cartCount > 0 ? `(${cartCount})` : ""}</Link>
          <Link to="/Orders"><FaBoxOpen className="nav-icon orders-icon" /> Orders</Link>
          <Link to="/AboutUs"><FaInfoCircle className="nav-icon about-icon" /> About Us</Link>
          <Link to="/ContactUs"><FaPhone className="nav-icon contact-icon" /> Contact Us</Link>
          <Link to="/terms"><FaPhone className="nav-icon contact-icon" />Terms and Conditions</Link>
          <Link to="/privacy"><FaPhone className="nav-icon contact-icon" /> Privacy Policy</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/signin" element={<Signing />} />  {/* ✅ lowercase */}
          <Route path="/signup" element={<Signup />} />   {/* ✅ lowercase */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cartcomponent" element={<CartComponent />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
