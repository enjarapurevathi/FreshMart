import "./Cart.css";
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart, DecrementQuantity, IncrementQuantity, orderDetails, RemoveFromCart } from './Store';
import { useNavigate } from "react-router-dom";
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential
} from 'firebase/auth';
import { auth } from "./firebaseConfig";
import QRCode from "react-qr-code";
import { toast, ToastContainer } from "react-toastify";

function CartComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const navigate = useNavigate();

const [phone, setPhone] = useState("");
const [otp, setOtp] = useState("");
const [verificationId, setVerificationId] = useState("");
const [otpVerified, setOtpVerified] = useState(false);


  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponCodeDiscountPer, setCouponDiscountPer] = useState(0);
  const [couponName, setCouponName] = useState("");
  const [userEmail, setUserEmail] = useState('');
  const [showThankyou, setShowThankyou] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderId, setOrderId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const couponCodeRef = useRef();
  const taxPercentage = 5;
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrement = (item) => {
    if(item)
    dispatch(IncrementQuantity(item));
    toast.success(`"${item.name}" added successfully`);
  }

  const handleDecrement = (item) => 
    {
      if(item.quantity === 1){
          dispatch(RemoveFromCart(item));
          toast.warn(`"${item.name}"item will be removing"`);
       } 
       else{
       dispatch(DecrementQuantity(item));
           toast.warn(`"${item.name}"do you want to remove`);
       }
      }
      const addToCart = (item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // Item exists, increment its quantity
    dispatch(IncrementQuantity(item));
  } else {
    // New item, set default quantity
    item.quantity = 1; // Change to 11 if you want a different default
    dispatch(AddToCart(item));
  }
};

 const handleRemove = (item) => {
  if (item) {
    dispatch(RemoveFromCart(item));
    toast.error(`"${item.name}" removed from cart.`);
  } else {
    toast.error("Something went wrong while removing the item.");
  }
};


  const handleDiscountClick = (percentage) => {
    setDiscountPercentage(percentage);
    setCouponDiscountPer(0);
    setCouponName("");
  };

  const handleCouponPer = () => {
    const code = couponCodeRef.current.value.trim().toUpperCase();
    switch (code) {
      case 'SAVE10':
        setCouponDiscountPer(10);
        setCouponName('SAVE10');
        break;
      case 'SAVE40':
        setCouponDiscountPer(40);
        setCouponName('SAVE40');
        break;
      case 'SAVE50':
        setCouponDiscountPer(50);
        setCouponName('SAVE50');
        break;
      default:
        alert('Invalid coupon code');
        setCouponDiscountPer(0);
        setCouponName("");
    }
  };

  const calculateAmounts = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const appliedDiscount = discountPercentage || couponCodeDiscountPer;
    const discountAmount = (totalPrice * appliedDiscount) / 100;
    const afterDiscount = totalPrice - discountAmount;
    const tax = (afterDiscount * taxPercentage) / 100;
    const finalAmount = afterDiscount + tax;

    return {
      totalPrice: totalPrice.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      afterDiscount: afterDiscount.toFixed(2),
      tax: tax.toFixed(2),
      finalAmount: finalAmount.toFixed(2),
      appliedDiscount
    };
  };

  const {
    totalPrice,
    discountAmount,
    afterDiscount,
    tax,
    finalAmount,
    appliedDiscount
  } = calculateAmounts();

  const handleCompletePurchase = () => {
  if (!userEmail) {
    alert("You must be logged in to complete the payment.");
    navigate('/Signing');
    return;
  }

  // 🎉 5-second confetti animation
  const duration = 5000;
  const interval = 300;
  const end = Date.now() + duration;

  const confettiInterval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(confettiInterval);
    } else {
      confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0, y: 1 } });
      confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 1 } });
      confetti({ particleCount: 100, angle: 90, spread: 70, origin: { x: 0.5, y: 1 } });
      confetti({ particleCount: 100, angle: 90, spread: 70, origin: { x: 0.5, y: 0} });
    }
  }, interval);

  // ... rest of your existing order logic ...
  const newOrderId = 'ORD_' + new Date().getTime();
  const purchaseDateTime = new Date().toLocaleString();

  const orderListDetails = {
    orderId: newOrderId,
    date: purchaseDateTime,
    items: [...cartItems], // Preserve current cart before clearing
    finalprice: parseFloat(finalAmount),
  };

  // Prepare email template parameters (flattened)
 const templateParams = {
  order_id: newOrderId,  // Order ID
  email: userEmail,  // User Email
  orders: cartItems.map(item => ({
    name: item.name,
    units: item.quantity,
    price: (item.price * item.quantity).toFixed(2)  // Total price for the item
  })),
  cost: {
    shipping: "0.00",  // Shipping cost (can be dynamic)
    tax: Number(tax).toFixed(2),  // Tax amount
    total: Number(totalPrice).toFixed(2)  // Total before discounts
  },
  discount_applied: discountPercentage || couponCodeDiscountPer,  // Discount applied (in percentage)
  discountAmount: Number(discountAmount).toFixed(2),  // Discount amount in INR
  finalAmount: Number(finalAmount).toFixed(2)  // Final amount after applying discount and tax
};


  setOrderId(newOrderId);
  setShowThankyou(true);
  setShowCelebration(true);

  // Save order to Redux
  dispatch(orderDetails(orderListDetails));

  // Send email via EmailJS
  emailjs.send(
    'service_oyztry9',       // Your EmailJS service ID
    'template_aj0iph8',      // Your EmailJS template ID
    templateParams,
    'IIKCOFnZYdm9rxeJh'      // Your EmailJS public key
  ).then(() => {
    console.log('✅ Order confirmation email sent successfully!');
    setCardDetails({ cardNumber: '', expiryDate: '', cvv: '' });
    setPaymentMethod('');
    dispatch(ClearCart()); // ✅ Clear the cart after sending email
    navigate("/Orders");   // ✅ Navigate after email send
  }).catch((error) => {
    console.error('❌ Failed to send email:', error);
    alert("Failed to send confirmation email. Please try again.");
  });
};


  const handleCardPayment = () => {
    alert("Card payment completed! ✅");
    setPaymentMethod('card');
    handleCompletePurchase();
  };

 const handleSendOtp = () => {
   const formattedPhone = `+${phone.trim()}`;
   setupRecaptcha();
   const appVerifier = window.recaptchaVerifier;

   signInWithPhoneNumber(auth, formattedPhone, appVerifier)
     .then((confirmationResult) => {
       setVerificationId(confirmationResult.verificationId);
       alert("OTP sent successfully!");
     }).catch((error) => {
       console.error("SMS not sent:", error);
       alert("Error sending OTP. Please check the number and try again.");
     });
 };


  const handleVerifyOtp = () => {
   if (!verificationId || !otp) {
     alert("Please enter the OTP.");
     return;
   }

   const credential = PhoneAuthProvider.credential(verificationId, otp);
   signInWithCredential(auth, credential)
     .then((result) => {
       console.log("✅ OTP Verified", result);
       setOtpVerified(true);
       alert("OTP verified successfully!");
     })
     .catch((error) => {
       console.error("❌ OTP Verification Failed", error);
       alert("Invalid OTP or expired. Please try again.");
     });
 };


  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log("reCAPTCHA solved:", response);
        },
        'expired-callback': () => {
          console.warn("reCAPTCHA expired. Solve again.");
        }
      }, auth);
    }
  };

  const OrderSummaryPreview = () => (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Order Confirmation - {orderId}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Item</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Unit Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{item.price.toFixed(2)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>
        <p><strong>Discount Applied:</strong> {appliedDiscount}% (−₹{discountAmount})</p>
        <p><strong>Tax:</strong> ₹{tax}</p>
        <p><strong>Shipping:</strong> ₹0.00</p>
        <p><strong>Final Amount:</strong> ₹{finalAmount}</p>
      </div>
    </div>
  );

  const renderedCartItems = cartItems.length === 0 ? (
    <h3>Your cart is empty</h3>
  ) : (
    cartItems.map(item => (
      <div key={item.id} className="cart-item-row">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">₹{item.price}</div>
        <div className="quantity-controls">
          <button onClick={() => handleDecrement(item)}>-</button>
          <div className="item-quantity">{item.quantity}</div>
          <button onClick={() => handleIncrement(item)}>+</button>
        </div>
        <button onClick={() => handleRemove(item)} className="remove-btn">Remove</button>
      </div>
    ))
  );

  return (
            
    <div>
              <ToastContainer position='top-center' autoClose={5000}/>
      <div className="cart-message">
        {showThankyou || showCelebration ? (
          <div className="celebration-message">
            {showThankyou && (
              <>
                <h2 style={{ color: 'green' }}>
                  Thank you for your purchase! Redirecting to orders...
                </h2>
                <OrderSummaryPreview />
              </>
            )}
            {showCelebration && (
              <div>
                <h3>🎉 Congratulations! 🎉</h3>
                <p>Your purchase was successful. We hope you enjoy your products! 🎁</p>
              </div>
            )}
          </div>
        ) : cartItems.length === 0 ? (
          <h1>Cart is Empty 🛒</h1>
        ) : (
          <div className="cart-page-wrapper">
            <div className="cart-container">
              <h1>Your Cart</h1>

              <div className="cart-items">{renderedCartItems}</div>

              <div className="discount-buttons">
                <button onClick={() => handleDiscountClick(10)}>10% Discount</button>
                <button onClick={() => handleDiscountClick(20)}>20% Discount</button>
                <button onClick={() => handleDiscountClick(30)}>30% Discount</button>
                <div className="coupon-section">
                  <input type="text" ref={couponCodeRef} placeholder="Enter Coupon Code" className="coupon-input" />
                  <button onClick={handleCouponPer} className="apply-coupon-btn">Apply Coupon</button>
                </div>
              </div>

              <div className="email-input-section">
                <label htmlFor="userEmail">Enter your Email for Receipt:</label>
                <input type="email" id="userEmail" placeholder="example@mail.com" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
              </div>

              <div className="cart-summary">
                <h5>Total Items: {cartCount}</h5>
                <p>Total Amount: ₹{totalPrice}</p>
                <p>Discount ({appliedDiscount}%): -₹{discountAmount}</p>
                <p>Applied Coupon {couponName ? `(${couponCodeDiscountPer}%)` : "None"}</p>
                <p>Tax ({taxPercentage}%): +₹{tax}</p>
                <p><strong>Final Amount: ₹{finalAmount}</strong></p>
                
      <div className="phone-auth-container">
  <div className="phone-auth-card">
    <h3>📱 Phone Authentication</h3>
    <input
      type="text"
      placeholder="Enter phone number (+91...)"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <button onClick={handleSendOtp} style={{color:"red",backgroundColor:"pink"}}>Send OTP</button>

    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
    />
    <button onClick={handleVerifyOtp} style={{color:"red",backgroundColor:"pink"}}>Verify OTP</button>

    <div id="recaptcha-container"></div>

        </div>
      </div>
      {paymentMethod === 'upi' && (
                  <div className="qr-payment-box">
                    <h3>Scan this QR to Pay</h3>
                    <QRCode value={`upi://pay?pa=7675835038@axl&pn=YourBusinessName&am=${finalAmount}&cu=INR&tn=CartPurchase`} size={200} />
                    <p>Amount: ₹{finalAmount}</p>
                    <p>UPI ID: 7675835038@axl</p>
                    <button onClick={handleCompletePurchase} className="complete-purchase-btn">✅ I have completed payment</button>
                  </div>
                )}

      {paymentMethod === 'card' && (
                  <div className="card-payment-box">
                    <h3>Enter Card Details</h3>
                    <form>
                      <input type="text" placeholder="Card Number" value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
                      <input type="text" placeholder="MM/YY" value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
                      <input type="text" placeholder="CVV" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
                      <button type="button" onClick={handleCardPayment}>✅ Pay with Card</button>
                    </form>
                  </div>
                )}
              </div>

              <div className="payment-options">
                <h3>Select Payment Method</h3>
                <button onClick={() => setPaymentMethod('upi')} className="scanner-pay-btn">📱 Pay with UPI Scanner</button>
                <button onClick={() => setPaymentMethod('card')} className="card-pay-btn">💳 Pay with Card</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default CartComponent;
