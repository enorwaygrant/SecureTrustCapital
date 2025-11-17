import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import logo from "../images/logo.jpg";
import imageOne from "../images/image1.jpg";
import imageTwo from "../images/image2.jpg";
import imageThree from "../images/image3.jpg";
import imageFour from "../images/image4.jpg";
import imageFive from "../images/image5.jpg";
import imageSix from "../images/image6.jpg";
import imageSeven from "../images/image7.jpg";
import imageEight from "../images/image8.jpg";
import imageNine from "../images/image9.jpg";
import imageTen from "../images/image10.jpg";
import imageEleven from "../images/image11.jpg";

function Home() {
  const [shippingCode, setShippingCode] = useState("");
  const navigate = useNavigate();

  // Example shipping codes stored locally (replace with API later)
  const shippingCodes = {
    // "ZX94-US-582019447-A1": { status: "/UnderReview" },
    // "ZX94-US-582019447-A1": { status: "approved" },
    "ZX94-US-582019447-A1": { status: "active" },
  };

  const handleNavigate = () => {
    const code = shippingCode.trim();

    // ❌ If empty input
    if (code === "") {
      toast.error("Please enter your shipping code");
      return;
    }

    // ❌ If code does not exist in system
    if (!shippingCodes[code]) {
      toast.error("Invalid Shipping Code");
      return;
    }

    // Get status of code
    const status = shippingCodes[code].status;

    // 🔄 Navigate based on status
    if (status === "under_review") {
      navigate("/UnderReview");
      return;
    }

    if (status === "approved") {
      navigate("/OnTheWay");
      return;
    }

    if (status === "active") {
      navigate("/Products");
      return;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <Toaster position="top-center" />
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm py-4 px-4 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-black-600 tracking-wide">
            ZeroShipExpress
          </h1>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full bg-white shadow-sm py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              100% Free Shipping Anywhere in the USA 🇺🇸
            </h2>

            <p className="text-gray-600 text-base md:text-xl">
              Door-to-door delivery with{" "}
              <span className="font-semibold">zero shipping fees</span>. Just
              verify your USA identity, enter your shipping code, and enjoy
              instant free delivery.
            </p>

            {/* INPUT */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full">
              <input
                type="text"
                placeholder="Enter your shipping code..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={shippingCode}
                onChange={(e) => setShippingCode(e.target.value)}
              />

              <button
                onClick={handleNavigate}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
              >
                Go
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Your shipping code unlocks all free delivery products in your
              region.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-56 sm:h-72 md:h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={imageThree}
              alt="Free Shipping Promo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VERIFY IDENTITY */}
      <section id="verify" className="max-w-6xl mx-auto py-14 px-4 md:px-20">
        <div className="bg-blue-50 p-6 md:p-10 rounded-2xl shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Verify Your USA Identity
          </h3>

          <p className="text-gray-700 text-base md:text-lg">
            Verification ensures fairness, prevents fraud, and guarantees real
            U.S. residents receive our 100% free shipping benefits.
          </p>

          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Quick identity check — under 2 minutes.</li>
            <li>Private and encrypted — your data is safe.</li>
            <li>Instant access to free door delivery.</li>
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto py-14 px-4 md:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* CARD 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageOne}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2">
              Fast Door Delivery
            </h3>
            <p className="text-gray-600">
              Free and fast USA delivery straight to your doorstep.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageFour}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2">
              Zero Shipping Fees
            </h3>
            <p className="text-gray-600">
              No hidden charges. No surprises. Always 100% free shipping.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageTwo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2">
              Nationwide Coverage
            </h3>
            <p className="text-gray-600">
              Every state. Every city. Every doorstep in the USA.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-14 px-4 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Zero Ship Express?
          </h3>

          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
            The first and only platform offering 100% free nationwide delivery,
            trusted by thousands of verified U.S. residents.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10">
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow">
              <h4 className="text-xl md:text-2xl font-bold text-blue-700">
                100% Free
              </h4>
              <p className="text-gray-600 mt-3">
                No fees. No tricks. Every order ships free.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow">
              <h4 className="text-xl md:text-2xl font-bold text-blue-700">
                Trusted
              </h4>
              <p className="text-gray-600 mt-3">
                Secure identity system that protects real users.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow">
              <h4 className="text-xl md:text-2xl font-bold text-blue-700">
                Fast as Prime
              </h4>
              <p className="text-gray-600 mt-3">
                Delivery that rivals major carriers — without the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-6xl mx-auto py-14 px-4 md:px-20">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          How It Works
        </h3>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 text-base md:text-lg">
          A simple and secure process designed to give you free doorstep
          delivery instantly.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-12">
          {/* STEP 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow text-center">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageFive}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-lg md:text-xl">
              1. Enter Shipping Code
            </h4>
            <p className="text-gray-600 mt-2">
              Your unique code unlocks free product listings.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow text-center">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageSix}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-lg md:text-xl">2. Verify Identity</h4>
            <p className="text-gray-600 mt-2">
              Quick and secure U.S. identity verification.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow text-center">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={imageEight}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-lg md:text-xl">
              3. Get Free Delivery
            </h4>
            <p className="text-gray-600 mt-2">
              Enjoy 100% free doorstep delivery.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="max-w-6xl mx-auto py-14 px-4 md:px-20"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Users Are Saying
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* CARD 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src={imageNine}
              alt="Avatar"
              className="w-20 h-20 mx-auto rounded-full bg-gray-200 object-cover"
            />
            <p className="text-gray-700 mt-4 italic">
              “I still can't believe shipping is really free. My items arrived
              faster than Amazon!”
            </p>
            <h3 className="font-bold text-lg mt-3">Sarah W.</h3>
            <p className="text-sm text-gray-500">Texas</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src={imageTen}
              alt="Avatar"
              className="w-20 h-20 mx-auto rounded-full bg-gray-200 object-cover"
            />
            <p className="text-gray-700 mt-4 italic">
              “Amazing service! Verified my identity and got same-week delivery
              for free.”
            </p>
            <h3 className="font-bold text-lg mt-3">Michael D.</h3>
            <p className="text-sm text-gray-500">California</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src={imageEleven}
              alt="Avatar"
              className="w-20 h-20 mx-auto rounded-full bg-gray-200 object-cover"
            />
            <p className="text-gray-700 mt-4 italic">
              “This is the future of shipping. Zero cost and super reliable.”
            </p>
            <h3 className="font-bold text-lg mt-3">Emily R.</h3>
            <p className="text-sm text-gray-500">Florida</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Zero Ship Express
              </h2>
            </div>

            <p className="mt-4 text-blue-100 text-sm leading-relaxed">
              We are the first USA-based platform offering 100% free shipping to
              every home nationwide. No fees, no tricks — just truly free
              delivery.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Verify Identity
              </li>
              <li className="hover:text-white transition cursor-pointer">
                How It Works
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Free Delivery Program
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Track Delivery
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Shipping Code Issues
              </li>
            </ul>
          </div>

          {/* CONTACT */}
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
    </div>
  );
}

export default Home;
