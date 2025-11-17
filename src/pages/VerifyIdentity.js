import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import logo from "../images/logo.jpg";

function VerifyIdentity({ orderCode }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-6 md:px-20">
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <>
          <div className="bg-white p-10 rounded-2xl shadow-md max-w-lg text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Details Submitted!
            </h1>

            <p className="text-gray-700 mb-4">
              Thank you! We will verify your details and get back to you within
              the next 24 hours.
            </p>

            <p className="text-gray-600 mb-6">
              Use your{" "}
              <span className="font-semibold text-blue-600">Order Code:</span>{" "}
              <span className="font-bold">
                {orderCode || "ZX94-US-582019447-A1"}
              </span>{" "}
              to check your order status during this period.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-4 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition"
            >
              Go Back to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default VerifyIdentity;
