import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-green-600 flex items-center gap-2">
        🕵️‍♂️ <span>Privacy Policy</span>
      </h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: <span className="text-black">[Insert Date]</span></p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong className="text-gray-900">Personal Data:</strong> Name, email, address, payment info</li>
        <li><strong className="text-gray-900">Usage Data:</strong> IP address, browser info, site behavior</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>To fulfill and deliver your orders</li>
        <li>To improve user experience and services</li>
        <li>To send promotional content <span className="text-sm text-gray-500">(with your permission)</span></li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">3. Sharing of Information</h2>
      <p className="text-gray-700">We do not sell your data. We may share it with delivery partners, payment gateways, or legal authorities as required.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">4. Data Security</h2>
      <p className="text-gray-700">We use encryption and secure servers. While we take reasonable steps, no method is 100% secure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">5. Your Rights</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Access or correct your personal data</li>
        <li>Request deletion of your information</li>
        <li>Unsubscribe from marketing emails</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">6. Cookies</h2>
      <p className="text-gray-700">We use cookies to enhance your experience. You can manage cookie settings through your browser.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">7. Third-Party Links</h2>
      <p className="text-gray-700">Our website may contain links to external websites. We are not responsible for their privacy practices.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">8. Policy Updates</h2>
      <p className="text-gray-700">We may update this policy occasionally. Please review it periodically for changes.</p>

      <p className="mt-6 text-gray-700">
        For privacy concerns, reach out to <span className="text-green-600 font-medium">privacy@freshmart.com</span>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
