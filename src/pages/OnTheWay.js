import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Truck, Package } from "lucide-react";
import logo from "../images/logo.jpg";

function OnTheWay({ orderCode }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center py-10 px-6 md:px-20">
      <img
        src={logo}
        className="w-20 h-20 rounded-full shadow mb-6"
        alt="logo"
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Your Order Is On The Way 🚚
      </h1>

      <p className="text-gray-600 text-center max-w-md mb-10">
        Sit tight! Your package has left our facility and is currently in
        transit to your delivery address.
      </p>

      {/* Progress Tracker */}
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md">
        <div className="relative">
          {/* Line Connector */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>

          {/* Step 1 */}
          <div className="flex items-start mb-10 relative">
            <CheckCircle className="w-10 h-10 text-green-500 bg-white rounded-full z-10" />
            <div className="ml-6">
              <p className="text-lg font-semibold text-gray-900">
                Order Placed
              </p>
              <p className="text-gray-600 text-sm">
                We received your order successfully.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start mb-10 relative">
            <CheckCircle className="w-10 h-10 text-green-500 bg-white rounded-full z-10" />
            <div className="ml-6">
              <p className="text-lg font-semibold text-gray-900">Processing</p>
              <p className="text-gray-600 text-sm">
                Your details and documents are being verified.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start mb-10 relative">
            <Package className="w-10 h-10 text-blue-500 bg-white rounded-full z-10" />
            <div className="ml-6">
              <p className="text-lg font-semibold text-gray-900">Shipped</p>
              <p className="text-gray-600 text-sm">
                Your item has been packaged and dispatched.
              </p>
            </div>
          </div>

          {/* Step 4 - Active */}
          <div className="flex items-start relative">
            <Truck className="w-10 h-10 text-blue-600 bg-white rounded-full z-10 animate-bounce" />
            <div className="ml-6">
              <p className="text-lg font-semibold text-gray-900">On The Way</p>
              <p className="text-gray-600 text-sm">
                Your package is currently in transit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-10">
        Tracking Code:{" "}
        <span className="font-semibold">
          {orderCode || "ZX94-US-582019447-A1"}
        </span>
      </p>
    </div>
  );
}

export default OnTheWay;
