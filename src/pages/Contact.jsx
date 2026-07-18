import React from "react";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Contact Us
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

        <p className="text-gray-600 mb-6">
          Have a question or need help booking an appointment? Feel free to
          contact us using the details below.
        </p>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📍 Address:</span> 123 Street,
            Haryana, India
          </p>

          <p>
            <span className="font-semibold">📞 Phone:</span> +91 98765 43210
          </p>

          <p>
            <span className="font-semibold">📧 Email:</span> support@medicare.com
          </p>

          <p>
            <span className="font-semibold">🕒 Hours:</span> Mon - Sat, 9:00 AM
            - 6:00 PM
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;