import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function AddDetails() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    nnnNumber: "",
    address: "",
    cardFront: null,
    cardBack: null,
  });

  const [images, setImages] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading
    setSubmitting(true);

    // Validate Inputs
    if (!formData.firstName.trim())
      return toast.error("First name is required");
    if (!formData.lastName.trim()) return toast.error("Last name is required");
    if (!formData.nnnNumber?.trim()) return toast.error("SSN is required");
    if (!formData.address.trim()) return toast.error("Address is required");
    if (!formData.cardFront) return toast.error("Please upload front ID image");
    if (!formData.cardBack) return toast.error("Please upload back ID image");

    // Prepare FormData for backend
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("middleName", formData.middleName);
    form.append("lastName", formData.lastName);
    form.append("nnnNumber", formData.nnnNumber);
    form.append("address", formData.address);

    // Images (names MUST match backend multer config)
    form.append("orderPictures", formData.cardFront);
    form.append("orderPictures", formData.cardBack);

    try {
      const res = await fetch("http://localhost:3001/api/auth/createOrder", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
        setSubmitting(false);
        return;
      }

      toast.success("Details submitted successfully!");

      // 🔥 Navigate to under review page after success
      navigate("/UnderReview");
    } catch (error) {
      console.log(error);
      toast.error("Network error");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center py-16 px-6 md:px-20">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Enter Your Details
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-xl">
            Please provide your legal name, SSN, and shipping address. Your
            details are{" "}
            <span className="font-semibold text-blue-600">
              100% secure and encrypted
            </span>
            .
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md"
            >
              {/* Name Fields */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="John"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Optional"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Doe"
                />
              </div>

              {/* NNN Number */}
              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-1">
                  Social Security Number (SSN){" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="nnnNumber"
                  value={formData.nnnNumber}
                  onChange={handleChange}
                  maxLength={11}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none tracking-widest"
                  placeholder="123-45-6789"
                />

                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <span className="text-green-600 font-bold text-lg">🔒</span>
                  Your SSN is fully encrypted and stored securely. We never
                  share your information.
                </p>
              </div>

              {/* Shipping Address */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-1">
                  Shipping Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="123 Main Street, City, State, ZIP"
                ></textarea>
              </div>

              {/* Card Front */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Drivers License Front <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="cardFront"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Please snap a clear picture of the front of your Drivers
                  License.
                </p>
              </div>

              {/* Card Back */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-1">
                  Drivers License Back <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="cardBack"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Please snap a clear picture of the back of your Drivers
                  License.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition flex items-center justify-center"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Details Submitted!
              </h2>
              <p className="text-gray-600">
                Thank you! Your details have been received and are securely
                stored.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AddDetails;
