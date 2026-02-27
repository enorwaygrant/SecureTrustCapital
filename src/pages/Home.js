import React from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaLock,
  FaHandHoldingUsd,
  FaChartLine,
  FaClock,
  FaBuilding,
  FaGlobeAmericas,
  FaCertificate,
  FaMoneyBillWave,
  FaBalanceScale,
  FaAward,
  FaHandshake,
  FaUserTie,
  FaHome,
  FaCar,
  FaBriefcaseMedical,
  FaGraduationCap,
} from "react-icons/fa";
import ImgOne from "../images/img1.jpeg";
import ImgTwo from "../images/img2.jpeg";
import ImgThree from "../images/img3.jpeg";
import ImgFive from "../images/img5.jpeg";
import ImgSix from "../images/img6.jpeg";
import ImgSeven from "../images/img7.jpeg";
import ImgEight from "../images/img8.jpeg";
import ImgNine from "../images/img9.jpg";

// Import placeholder images for testimonials
const testimonialImages = {
  michael: ImgOne,
  sarah: ImgTwo,
  david: ImgThree,
  amanda:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  james: ImgFive,
  lisa: ImgSix,
  robert: ImgSeven,
  emily: ImgEight,
  william: ImgNine,
  jennifer:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
};

const Home = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Austin, TX",
      amount: "$250,000",
      text: "Secured a business expansion loan within 48 hours. The zero-deposit policy saved me $50K upfront. Most professional lending experience I've had in 20 years of business.",
      rating: 5,
      timeAgo: "3 weeks ago",
      verified: true,
      occupation: "Business Owner",
      image: testimonialImages.michael,
    },
    {
      name: "Sarah Johnson, MD",
      location: "Miami, FL",
      amount: "$175,000",
      text: "As a medical professional starting my own practice, I needed significant funding. SecureTrust delivered with no upfront fees and unparalleled security measures. Funded in 72 hours.",
      rating: 5,
      timeAgo: "1 month ago",
      verified: true,
      occupation: "Medical Doctor",
      image: testimonialImages.sarah,
    },
    {
      name: "David Chen",
      location: "San Francisco, CA",
      amount: "$450,000",
      text: "Real estate investment needed quick, substantial funding. Traditional banks wanted 20% deposit - SecureTrust required $0. Their security protocols gave me complete peace of mind.",
      rating: 5,
      timeAgo: "2 months ago",
      verified: true,
      occupation: "Real Estate Investor",
      image: testimonialImages.david,
    },
    {
      name: "Amanda Williams",
      location: "Chicago, IL",
      amount: "$325,000",
      text: "Consolidated $300K+ in business debt. The transparency was refreshing - no hidden fees, no pressure. Saved thousands monthly with their competitive rates.",
      rating: 5,
      timeAgo: "6 weeks ago",
      verified: true,
      occupation: "Tech Executive",
      image: testimonialImages.amanda,
    },
    {
      name: "James Wilson",
      location: "Denver, CO",
      amount: "$200,000",
      text: "Commercial property renovation funded in record time. Applied Monday, approved Tuesday, funds cleared Thursday. Their no-deposit policy is revolutionary.",
      rating: 5,
      timeAgo: "1 month ago",
      verified: true,
      occupation: "Property Developer",
      image: testimonialImages.james,
    },
    {
      name: "Lisa Thompson",
      location: "Seattle, WA",
      amount: "$500,000",
      text: "Manufacturing business expansion funded entirely through SecureTrust. Their security measures exceeded bank standards. Process was seamless from start to finish.",
      rating: 5,
      timeAgo: "3 months ago",
      verified: true,
      occupation: "Manufacturing CEO",
      image: testimonialImages.lisa,
    },
    {
      name: "Robert Garcia",
      location: "New York, NY",
      amount: "$750,000",
      text: "Largest loan I've ever secured - and the easiest process. Zero deposit saved me $150K upfront. Their agent personally walked me through every protection measure.",
      rating: 5,
      timeAgo: "4 months ago",
      verified: true,
      occupation: "Hospitality Group Owner",
      image: testimonialImages.robert,
    },
    {
      name: "Emily Chen",
      location: "Los Angeles, CA",
      amount: "$125,000",
      text: "Medical practice expansion funded stress-free. Their 256-bit encryption and FDIC backing made the large transfer completely worry-free. Exceptional service.",
      rating: 5,
      timeAgo: "5 weeks ago",
      verified: true,
      occupation: "Dental Practice Owner",
      image: testimonialImages.emily,
    },
    {
      name: "William Taylor",
      location: "Dallas, TX",
      amount: "$600,000",
      text: "Multi-property investment package funded entirely through SecureTrust. Their security protocols are military-grade. Saved over $120K in upfront deposits.",
      rating: 5,
      timeAgo: "2 months ago",
      verified: true,
      occupation: "Investment Portfolio Manager",
      image: testimonialImages.william,
    },
  ];

  const features = [
    {
      icon: <FaLock className="text-2xl" />,
      title: "Military-Grade Security",
      desc: "256-bit SSL encryption with real-time fraud monitoring",
      detail: "Bank-level security with FDIC insurance up to $250,000",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "$0 Deposit Required",
      desc: "Never pay upfront fees or deposits",
      detail: "Save thousands compared to traditional lenders",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "24-Hour Funding",
      desc: "Fast approval and same-day funding available",
      detail: "Average approval time: 5.2 minutes",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Competitive Rates",
      desc: "APR starting at 3.99% for qualified applicants",
      detail: "Rates as low as half of national averages",
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "Flexible Terms",
      desc: "12 to 84 month terms available",
      detail: "Customizable repayment schedules",
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Fully Licensed",
      desc: "NMLS licensed in all 50 states",
      detail: "Compliant with federal lending regulations",
    },
  ];

  const loanTypes = [
    {
      icon: <FaHome className="text-3xl text-blue-600" />,
      name: "Real Estate Loans",
      amount: "Up to $2,000,000",
      desc: "Residential and commercial property financing",
    },
    {
      icon: <FaBriefcaseMedical className="text-3xl text-blue-600" />,
      name: "Business Expansion",
      amount: "Up to $1,500,000",
      desc: "Growth capital for established businesses",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      name: "Professional Practice",
      amount: "Up to $750,000",
      desc: "Funding for medical, dental, and legal practices",
    },
    {
      icon: <FaCar className="text-3xl text-blue-600" />,
      name: "Commercial Equipment",
      amount: "Up to $500,000",
      desc: "Heavy machinery and business vehicle financing",
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  // Smooth scroll function
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle footer link clicks
  const handleFooterLinkClick = (e, section) => {
    e.preventDefault();
    // You can add navigation logic here
    console.log(`Navigate to ${section}`);
    // Example: navigate to different pages or scroll to sections
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  SecureTrust Capital
                </h1>
                <p className="text-sm text-gray-600">
                  FDIC Insured • $0 Deposit Required
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "home")}
                  className="text-blue-700 font-semibold hover:text-blue-900 cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#loans"
                  onClick={(e) => handleSmoothScroll(e, "loans")}
                  className="text-gray-700 hover:text-blue-900 cursor-pointer"
                >
                  Loan Types
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => handleSmoothScroll(e, "testimonials")}
                  className="text-gray-700 hover:text-blue-900 cursor-pointer"
                >
                  Success Stories
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <a href="/SecureTrustCapital/ApplyForm">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Bank Background */}
      <section
        id="home"
        className="relative text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 41, 107, 0.85), rgba(0, 41, 107, 0.9)), url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-3 mb-8 border border-white/30">
              <FaShieldAlt className="text-green-300 text-lg" />
              <span className="text-sm font-medium">
                Trusted by 50,000+ Customers Nationwide
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Major Funding
              <span className="block text-yellow-300 mt-2">
                With Zero Upfront Deposit
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl">
              Access $500 to $2,000,000 in business and personal financing. 100%
              secure platform with bank-level protection. No hidden fees, no
              upfront deposits - just transparent, professional lending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="/SecureTrustCapital/ApplyForm">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold px-10 py-5 rounded-lg text-lg flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <FaHandHoldingUsd className="mr-3 text-xl" />
                  Apply Now - Get Pre-Approved
                </button>
              </a>
            </div>

            {/* Stats Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">
                    $2.3B+
                  </div>
                  <p className="text-blue-100 font-medium">Loans Funded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">
                    $0
                  </div>
                  <p className="text-blue-100 font-medium">Upfront Deposits</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">
                    4.9★
                  </div>
                  <p className="text-blue-100 font-medium">Customer Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">
                    24h
                  </div>
                  <p className="text-blue-100 font-medium">Avg. Funding Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Why SecureTrust Stands Apart
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Professional lending solutions with enterprise-grade security and
              unprecedented transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-2">
                  {feature.desc}
                </p>
                <p className="text-gray-600">{feature.detail}</p>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Enterprise-Grade Security Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex flex-col items-center">
                <FaBuilding className="text-4xl text-white mb-3" />
                <span className="text-white font-semibold">FDIC Insured</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGlobeAmericas className="text-4xl text-white mb-3" />
                <span className="text-white font-semibold">256-bit SSL</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAward className="text-4xl text-white mb-3" />
                <span className="text-white font-semibold">BBB A+ Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-4xl text-white mb-3" />
                <span className="text-white font-semibold">
                  PCI DSS Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section
        id="loans"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Major Financing Solutions
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From business expansion to real estate investment - substantial
              funding with zero upfront deposit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="mb-6">{loan.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {loan.name}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {loan.amount}
                </p>
                <p className="text-gray-600 mb-6">{loan.desc}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Simple 3-Step Process
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  1
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Apply Online
                </h4>
                <p className="text-gray-600">
                  5-minute secure application. No impact on credit score.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  2
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Get Pre-Approved
                </h4>
                <p className="text-gray-600">
                  Instant decision. Review your personalized loan terms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  3
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Receive Funds
                </h4>
                <p className="text-gray-600">
                  Funds deposited within 24 hours. No deposit required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Major Success Stories
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Real professionals, substantial funding, zero upfront deposits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 border border-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.occupation}
                      </p>
                      <p className="text-sm text-blue-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                      VERIFIED
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="ml-2 text-sm text-gray-500">
                    {testimonial.timeAgo}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Loan Secured</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {testimonial.amount}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Deposit Saved</p>
                      <p className="text-lg font-bold text-green-600">
                        {testimonial.amount.includes("250")
                          ? "$50,000"
                          : testimonial.amount.includes("175")
                            ? "$35,000"
                            : testimonial.amount.includes("450")
                              ? "$90,000"
                              : testimonial.amount.includes("325")
                                ? "$65,000"
                                : testimonial.amount.includes("200")
                                  ? "$40,000"
                                  : testimonial.amount.includes("500")
                                    ? "$100,000"
                                    : testimonial.amount.includes("750")
                                      ? "$150,000"
                                      : testimonial.amount.includes("125")
                                        ? "$25,000"
                                        : testimonial.amount.includes("600")
                                          ? "$120,000"
                                          : "$50,000"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Metrics */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12">
            <div className="text-center text-white mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Billions in Trusted Financing
              </h3>
              <p className="text-blue-100 text-xl">
                Real impact across all 50 states
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  $2.3B+
                </div>
                <p className="text-blue-100 font-medium">Total Loans Funded</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  50K+
                </div>
                <p className="text-blue-100 font-medium">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  4.93★
                </div>
                <p className="text-blue-100 font-medium">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  $0
                </div>
                <p className="text-blue-100 font-medium">Upfront Deposits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Major Funding?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of successful professionals and businesses who've
              accessed substantial capital with zero upfront deposit through our
              100% secure platform.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <a href="/SecureTrustCapital/ApplyForm">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold px-12 py-6 rounded-xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <FaHandHoldingUsd className="inline mr-3" />
                  Apply Now - No Deposit Required
                </button>
              </a>
              <a href="/SecureTrustCapital/ApplyForm">
                <button className="bg-white hover:bg-blue-50 text-blue-900 font-bold px-12 py-6 rounded-xl text-xl border-2 border-white shadow-2xl hover:shadow-3xl transition">
                  <FaUserTie className="inline mr-3" />
                  Speak With a Capital Advisor
                </button>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
                <div className="flex items-center space-x-3">
                  <FaLock className="text-green-300 text-xl" />
                  <span className="font-medium">
                    256-bit Military Encryption
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-green-300 text-xl" />
                  <span className="font-medium">FDIC Insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-300 text-xl" />
                  <span className="font-medium">No Credit Impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHandshake className="text-green-300 text-xl" />
                  <span className="font-medium">NMLS Licensed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">SecureTrust Capital</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Professional lending solutions with enterprise security and zero
                upfront deposit requirements.
              </p>
              <div className="flex items-center space-x-2">
                <FaAward className="text-yellow-400" />
                <span className="text-sm text-gray-300">
                  BBB Accredited A+ Rating
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("personal-loans")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Personal Loans
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("business-loans")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Business Loans
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("real-estate")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Real Estate Financing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("loan-calculator")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Loan Calculator
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("security")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Security Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("faq")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("rates")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Rates & Terms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("success-stories")}
                    className="text-gray-400 hover:text-white transition cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    Success Stories
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Available Days</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3"></div>
                <p className="text-gray-400">
                  Monday - Friday: 8AM - 8PM EST
                  <br />
                  Saturday: 9AM - 5PM EST
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="mb-4">
              © 2019 SecureTrust Capital. All rights reserved. NMLS ID #1234567
            </p>
            <p className="text-sm">
              SecureTrust Capital is an Equal Housing Lender. We do not business
              in New York. All loans subject to credit approval. Rates and terms
              subject to change. No upfront deposit required. All applications
              protected by 256-bit SSL encryption.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
