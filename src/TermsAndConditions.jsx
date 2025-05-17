import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-pink-100 text-blue-900 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-700 flex items-center gap-2">
          🔄 <span>Terms & Conditions</span>
        </h1>
        <p className="text-sm text-blue-500 mb-6">Last Updated: <span className="text-blue-800">[17/05/2025]</span></p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">1. Account Registration</h2>
        <p className="mb-4">You must be 18 years or older to register. You agree to provide accurate and up-to-date information. You are responsible for keeping your account credentials safe.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">2. Orders and Payments</h2>
        <p className="mb-4">All orders are subject to availability and confirmation. Prices may change without notice. We support multiple payment methods including UPI, cards, and wallets.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">3. Delivery</h2>
        <p className="mb-4">Estimated delivery times may vary. Ensure your delivery address and contact information are accurate to avoid delays.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">4. Returns & Refunds</h2>
        <p className="mb-4">Perishable items cannot be returned unless damaged or incorrect. Refunds will be processed within 5–7 business days if eligible.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">5. Prohibited Conduct</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Using the platform for illegal purposes</li>
          <li>Interfering with website functionality or security</li>
          <li>Abusing promotions or coupon systems</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">6. Intellectual Property</h2>
        <p className="mb-4">All content, including images and text, is the property of FreshMart or its vendors and protected by law.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">7. Limitation of Liability</h2>
        <p className="mb-4">FreshMart is not responsible for indirect or incidental damages resulting from use of the platform.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">8. Changes to Terms</h2>
        <p className="mb-6">We may update these terms at any time. Continued use of FreshMart implies acceptance of the updated terms.</p>

        <p className="mt-4 text-blue-800">
          For any questions, contact us at <span className="font-semibold text-blue-600">support@freshmart.com</span>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
