import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import imageOne from "../images/product2.jpg";
import imageTwo from "../images/product3.jpg";
import imageThree from "../images/product1.jpg";
import imageFour from "../images/product4.jpg";

function Products() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Premium Black Watch",
      desc: "Elegant stainless steel watch with a luxury feel.",
      img: imageOne,
      priceUSD: 59.99,
    },

    {
      id: 2,
      name: "Black Designer Shades",
      desc: "Stylish sunglasses with UV protection.",
      img: imageFour,
      priceUSD: 39.99,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-between">
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <>
          <div className="max-w-6xl mx-auto py-16 px-6 md:px-20">
            {/* Header */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Products Available for Shipping
            </h1>
            <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
              Choose your free items under this shipping code. 100% Free
              Delivery — No fees, no hidden charges.
            </p>

            {/* Cart-style list layout */}
            <div className="space-y-5">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex gap-4"
                >
                  {/* Left Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-2">
                      <p className="text-xl font-bold text-gray-900">
                        ${item.priceUSD.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.desc.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ship Now Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("/VerifyIdentity")}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition text-lg"
              >
                Ship Now
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-blue-700 text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 md:px-20 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {/* Logo & About */}
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                  <h2 className="text-xl md:text-2xl font-bold">
                    Zero Ship Express
                  </h2>
                </div>
                <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                  We are the first USA-based platform offering 100% free
                  shipping nationwide.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li className="hover:text-white">About Us</li>
                  <li className="hover:text-white">Verify Identity</li>
                  <li className="hover:text-white">How It Works</li>
                  <li className="hover:text-white">Free Delivery Program</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li className="hover:text-white">FAQs</li>
                  <li className="hover:text-white">Help Center</li>
                  <li className="hover:text-white">Track Delivery</li>
                  <li className="hover:text-white">Shipping Code Issues</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>Email: support@zeroship.com</li>
                  <li>Phone: +1 (800) 000-0000</li>
                  <li>Address: 200 Free Ship Ave, USA</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-800 py-4 text-center text-blue-200 text-sm">
              © 2025 Zero Ship Express — 100% Free Shipping Nationwide
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default Products;
