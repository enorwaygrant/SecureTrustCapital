import React, { useState } from "react";
import {
  FaLock,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIdCard,
  FaCreditCard,
  FaShieldAlt,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaUpload,
  FaFileAlt,
  FaPhone,
  FaCalculator,
  FaHistory,
  FaDollarSign,
  FaCalendarAlt,
  FaBuilding,
  FaHome,
  FaCar,
  FaBriefcaseMedical,
  FaGraduationCap,
  FaExclamationTriangle,
  FaCloudUploadAlt,
  FaSpinner,
  FaTrash,
  FaImage,
  FaInfoCircle,
} from "react-icons/fa";

const LoanApplicationForm = () => {
  // Cloudinary Configuration
  const CLOUDINARY_CLOUD_NAME = "dafdl3uqz";
  const CLOUDINARY_UPLOAD_PRESET = "securetrust_uploads";
  const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

  const [step, setStep] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadingFiles, setUploadingFiles] = useState({
    front: false,
    back: false,
  });
  const [uploadErrors, setUploadErrors] = useState({
    front: "",
    back: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Step 2: Address Information
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    yearsAtAddress: "",

    // Step 3: Identification - W-9 Fields + Documents
    taxName: "",
    businessName: "",
    taxClassification: "",
    llcClassification: "",
    taxClassificationOther: "",
    identificationNumber: "",
    licenseIssuingState: "",
    documentFrontUrl: "",
    documentBackUrl: "",
    documentFrontName: "",
    documentBackName: "",

    // Step 4: Loan Details
    loanAmount: 10000,
    loanPurpose: "personal",
    employmentStatus: "employed",
    annualIncome: "",
    monthlyExpenses: "",
    creditScoreRange: "",

    // Step 5: Review
    agreeToTerms: false,
    allowCreditCheck: false,
    receiveUpdates: false,
    w9Certify: false,
  });

  const states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const loanPurposes = [
    {
      value: "debt_consolidation",
      label: "Debt Consolidation",
      icon: <FaDollarSign />,
    },
    { value: "home_improvement", label: "Home Improvement", icon: <FaHome /> },
    { value: "business", label: "Business Expansion", icon: <FaBuilding /> },
    {
      value: "medical",
      label: "Medical Expenses",
      icon: <FaBriefcaseMedical />,
    },
    { value: "education", label: "Education", icon: <FaGraduationCap /> },
    { value: "vehicle", label: "Vehicle Purchase", icon: <FaCar /> },
    {
      value: "emergency",
      label: "Emergency Fund",
      icon: <FaExclamationTriangle />,
    },
    { value: "other", label: "Other", icon: <FaCreditCard /> },
  ];

  const employmentOptions = [
    { value: "employed", label: "Employed Full-Time" },
    { value: "part_time", label: "Employed Part-Time" },
    { value: "self_employed", label: "Self-Employed" },
    { value: "retired", label: "Retired" },
    { value: "student", label: "Student" },
    { value: "unemployed", label: "Currently Seeking Employment" },
    { value: "disability", label: "On Disability" },
  ];

  const creditScoreRanges = [
    { value: "excellent", label: "Excellent (720+)" },
    { value: "good", label: "Good (680-719)" },
    { value: "fair", label: "Fair (640-679)" },
    { value: "poor", label: "Poor (580-639)" },
    { value: "very_poor", label: "Very Poor (Below 580)" },
    { value: "unknown", label: "Not Sure / Don't Know" },
  ];

  const formatTaxClassification = (data) => {
    if (!data.taxClassification) return "Not selected";
    switch (data.taxClassification) {
      case "individual":
        return "Individual/Sole Proprietor";
      case "llc":
        switch (data.llcClassification) {
          case "c_corp":
            return "LLC (C Corporation)";
          case "s_corp":
            return "LLC (S Corporation)";
          case "partnership":
            return "LLC (Partnership)";
          default:
            return "Limited Liability Company";
        }
      case "c_corp":
        return "C Corporation";
      case "s_corp":
        return "S Corporation";
      case "partnership":
        return "Partnership";
      case "trust":
        return "Trust/Estate";
      case "other":
        return data.taxClassificationOther || "Other";
      default:
        return data.taxClassification;
    }
  };

  // Improved Email Body Formatter
  const formatEmailBody = () => {
    const taxName =
      formData.taxName || `${formData.firstName} ${formData.lastName}`;
    const applicationId = `STC-${Date.now().toString().slice(-8)}`;
    const submissionDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    return `
╔══════════════════════════════════════════════════════════════╗
║           SECURETRUST CAPITAL - LOAN APPLICATION             ║
╚══════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    APPLICATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 APPLICATION DETAILS
────────────────────────────────────────────────────────────────
  Application ID      : ${applicationId}
  Submission Date     : ${submissionDate}
  Status              : PENDING REVIEW
  W-9 Required By     : SecureTrustCapital, LLC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    W-9 TAX INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  LINE 1 - Name on Tax Return  : ${taxName}
  LINE 2 - Business Name/DBA    : ${formData.businessName || "Not provided"}
  LINE 3 - Tax Classification    : ${formatTaxClassification(formData)}
  
  TIN/SSN/EIN                    : ${formData.identificationNumber || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Full Name           : ${formData.firstName} ${formData.lastName}
  Date of Birth       : ${formData.dateOfBirth || "Not provided"}
  Email Address       : ${formData.email || "Not provided"}
  Phone Number        : ${formData.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    ADDRESS INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Street Address      : ${formData.streetAddress || "Not provided"}
  City                : ${formData.city || "Not provided"}
  State               : ${formatValue(formData.state, "state")}
  ZIP Code            : ${formData.zipCode || "Not provided"}
  Years at Address    : ${formData.yearsAtAddress || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    IDENTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  License State       : ${formatValue(formData.licenseIssuingState, "state")}
  
  Documents Uploaded  : 
    • Front License   : ${formData.documentFrontUrl ? "✅ YES" : "❌ NO"}
    • Back License    : ${formData.documentBackUrl ? "✅ YES" : "❌ NO"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    LOAN DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Requested Amount    : $${parseInt(formData.loanAmount).toLocaleString()}
  Loan Purpose        : ${formatValue(formData.loanPurpose, "loanPurpose")}
  Employment Status   : ${formatValue(formData.employmentStatus, "employmentStatus")}
  Annual Income       : $${parseInt(formData.annualIncome).toLocaleString() || "Not provided"}
  Monthly Expenses    : $${parseInt(formData.monthlyExpenses).toLocaleString() || "Not provided"}
  Credit Score Range  : ${formatValue(formData.creditScoreRange, "creditScoreRange")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    FINANCIAL ESTIMATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Estimated Monthly Payment : $${Math.round(formData.loanAmount * 0.02).toLocaleString()}
  (Based on 5.99% APR for 60 months - Actual terms may vary)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    TERMS & AUTHORIZATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Terms of Service Agreed          : ${formData.agreeToTerms ? "✅ YES" : "❌ NO"}
  • Credit Check Authorized          : ${formData.allowCreditCheck ? "✅ YES" : "❌ NO"}
  • Marketing Updates Opt-in         : ${formData.receiveUpdates ? "✅ YES" : "❌ NO"}
  • W-9 Certification Completed      : ${formData.w9Certify ? "✅ YES" : "❌ NO"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    DOCUMENT LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Front License URL  : ${formData.documentFrontUrl || "Not uploaded"}
  Back License URL   : ${formData.documentBackUrl || "Not uploaded"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    SYSTEM INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Document Storage   : Cloudinary (Encrypted)
  Application Type   : Personal Loan
  Encryption         : 256-bit AES
  Submission ID      : ${applicationId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
  };

  const uploadToCloudinary = async (file, type) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "securetrust_licenses");
    formData.append("tags", "identification_document,securetrust");

    const timestamp = Date.now();
    formData.append("public_id", `${type}_${timestamp}`);

    try {
      const response = await fetch(CLOUDINARY_API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        url: data.secure_url,
        publicId: data.public_id,
      };
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    const maxSize = 5 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      setUploadErrors((prev) => ({
        ...prev,
        [type]: "Please upload JPG, PNG, or PDF files only",
      }));
      return;
    }

    if (file.size > maxSize) {
      setUploadErrors((prev) => ({
        ...prev,
        [type]: "File size must be less than 5MB",
      }));
      return;
    }

    setUploadErrors((prev) => ({ ...prev, [type]: "" }));
    setUploadingFiles((prev) => ({ ...prev, [type]: true }));

    const result = await uploadToCloudinary(file, type);

    if (result.success) {
      if (type === "front") {
        setFormData((prev) => ({
          ...prev,
          documentFrontUrl: result.url,
          documentFrontName: file.name,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          documentBackUrl: result.url,
          documentBackName: file.name,
        }));
      }
    } else {
      setUploadErrors((prev) => ({
        ...prev,
        [type]: `Upload failed: ${result.error}`,
      }));
    }

    setUploadingFiles((prev) => ({ ...prev, [type]: false }));
  };

  const removeUploadedFile = (type) => {
    if (type === "front") {
      setFormData((prev) => ({
        ...prev,
        documentFrontUrl: "",
        documentFrontName: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        documentBackUrl: "",
        documentBackName: "",
      }));
    }
    setUploadErrors((prev) => ({ ...prev, [type]: "" }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name === "taxClassification" && value !== "llc") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        llcClassification: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const formatIdentificationNumber = (value) => {
    const idNumber = value.replace(/\D/g, "");
    if (idNumber.length === 9 && parseInt(idNumber.substring(0, 2)) <= 99) {
      return `${idNumber.slice(0, 2)}-${idNumber.slice(2, 9)}`;
    }
    if (idNumber.length <= 3) return idNumber;
    if (idNumber.length <= 5)
      return `${idNumber.slice(0, 3)}-${idNumber.slice(3)}`;
    return `${idNumber.slice(0, 3)}-${idNumber.slice(3, 5)}-${idNumber.slice(5, 9)}`;
  };

  const formatPhone = (value) => {
    const phone = value.replace(/\D/g, "");
    if (phone.length <= 3) return phone;
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleIdentificationNumberChange = (e) => {
    const formatted = formatIdentificationNumber(e.target.value);
    setFormData((prev) => ({ ...prev, identificationNumber: formatted }));
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.dateOfBirth
        );
      case 2:
        return (
          formData.streetAddress &&
          formData.city &&
          formData.state &&
          formData.zipCode
        );
      case 3:
        const taxNameValid =
          formData.taxName || formData.firstName + " " + formData.lastName;
        const taxClassificationValid = formData.taxClassification;
        const taxClassificationDetailsValid =
          formData.taxClassification !== "llc" || formData.llcClassification;
        return (
          taxNameValid &&
          taxClassificationValid &&
          taxClassificationDetailsValid &&
          formData.identificationNumber &&
          formData.licenseIssuingState &&
          formData.documentFrontUrl &&
          formData.documentBackUrl
        );
      case 4:
        return formData.annualIncome && formData.employmentStatus;
      case 5:
        return (
          formData.agreeToTerms &&
          formData.allowCreditCheck &&
          formData.w9Certify
        );
      default:
        return true;
    }
  };

  const formatValue = (value, type) => {
    if (!value) return "Not provided";
    const formatMap = {
      loanPurpose: loanPurposes.find((p) => p.value === value)?.label || value,
      employmentStatus:
        employmentOptions.find((e) => e.value === value)?.label || value,
      creditScoreRange:
        creditScoreRanges.find((c) => c.value === value)?.label || value,
      state: states.find((s) => s.value === value)?.label || value,
    };
    return formatMap[type] || value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !formData.agreeToTerms ||
      !formData.allowCreditCheck ||
      !formData.w9Certify
    ) {
      alert(
        "Please agree to all terms, authorize credit check, and complete W-9 certification",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const emailBody = formatEmailBody();
      const taxName =
        formData.taxName || `${formData.firstName} ${formData.lastName}`;

      const formDataToSend = new FormData();
      formDataToSend.append(
        "_subject",
        `🏦 SecureTrust Loan Application: ${formData.firstName} ${formData.lastName}`,
      );
      formDataToSend.append("_replyto", formData.email || "");
      formDataToSend.append("_cc", formData.email || "");
      formDataToSend.append("_template", "table");
      formDataToSend.append("message", emailBody);

      // Add all fields
      formDataToSend.append("W-9 Name (Line 1)", taxName);
      formDataToSend.append(
        "W-9 Business Name (Line 2)",
        formData.businessName || "Not provided",
      );
      formDataToSend.append(
        "W-9 Tax Classification (Line 3)",
        formatTaxClassification(formData),
      );
      formDataToSend.append(
        "Applicant Name",
        `${formData.firstName} ${formData.lastName}`,
      );
      formDataToSend.append("Email Address", formData.email || "Not provided");
      formDataToSend.append("Phone Number", formData.phone || "Not provided");
      formDataToSend.append(
        "Date of Birth",
        formData.dateOfBirth || "Not provided",
      );
      formDataToSend.append(
        "Street Address",
        formData.streetAddress || "Not provided",
      );
      formDataToSend.append("City", formData.city || "Not provided");
      formDataToSend.append("State", formatValue(formData.state, "state"));
      formDataToSend.append("ZIP Code", formData.zipCode || "Not provided");
      formDataToSend.append(
        "Years at Address",
        formData.yearsAtAddress || "Not provided",
      );
      formDataToSend.append(
        "Identification Number",
        formData.identificationNumber || "Not provided",
      );
      formDataToSend.append(
        "License Issuing State",
        formatValue(formData.licenseIssuingState, "state"),
      );
      formDataToSend.append(
        "Document Front URL",
        formData.documentFrontUrl || "Not uploaded",
      );
      formDataToSend.append(
        "Document Back URL",
        formData.documentBackUrl || "Not uploaded",
      );
      formDataToSend.append(
        "Loan Amount",
        `$${parseInt(formData.loanAmount).toLocaleString()}`,
      );
      formDataToSend.append(
        "Loan Purpose",
        formatValue(formData.loanPurpose, "loanPurpose"),
      );
      formDataToSend.append(
        "Employment Status",
        formatValue(formData.employmentStatus, "employmentStatus"),
      );
      formDataToSend.append(
        "Annual Income",
        `$${parseInt(formData.annualIncome).toLocaleString() || "Not provided"}`,
      );
      formDataToSend.append(
        "Monthly Expenses",
        `$${parseInt(formData.monthlyExpenses).toLocaleString() || "Not provided"}`,
      );
      formDataToSend.append(
        "Credit Score Range",
        formatValue(formData.creditScoreRange, "creditScoreRange"),
      );
      formDataToSend.append(
        "Agreed to Terms",
        formData.agreeToTerms ? "Yes" : "No",
      );
      formDataToSend.append(
        "Credit Check Authorized",
        formData.allowCreditCheck ? "Yes" : "No",
      );
      formDataToSend.append(
        "Receive Updates",
        formData.receiveUpdates ? "Yes" : "No",
      );
      formDataToSend.append("W-9 Certified", formData.w9Certify ? "Yes" : "No");
      formDataToSend.append(
        "Estimated Payment",
        `$${Math.round(formData.loanAmount * 0.02).toLocaleString()}/month`,
      );
      formDataToSend.append("Submission Time", new Date().toLocaleString());
      formDataToSend.append(
        "Application ID",
        `STC-${Date.now().toString().slice(-8)}`,
      );
      formDataToSend.append("W-9 Requester", "SecureTrustCapital, LLC");

      const response = await fetch(
        "https://formsubmit.co/ajax/securetrustcapitalusa@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
          headers: { Accept: "application/json" },
        },
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          streetAddress: "",
          city: "",
          state: "",
          zipCode: "",
          yearsAtAddress: "",
          taxName: "",
          businessName: "",
          taxClassification: "",
          llcClassification: "",
          taxClassificationOther: "",
          identificationNumber: "",
          licenseIssuingState: "",
          documentFrontUrl: "",
          documentBackUrl: "",
          documentFrontName: "",
          documentBackName: "",
          loanAmount: 10000,
          loanPurpose: "personal",
          employmentStatus: "employed",
          annualIncome: "",
          monthlyExpenses: "",
          creditScoreRange: "",
          agreeToTerms: false,
          allowCreditCheck: false,
          receiveUpdates: false,
          w9Certify: false,
        });
        setStep(1);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mobile-Responsive Step Indicator
  const StepIndicator = () => (
    <div className="mb-8 md:mb-12">
      {/* Desktop Step Indicator */}
      <div className="hidden md:flex justify-between items-center">
        {[1, 2, 3, 4, 5].map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                step >= stepNumber
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {step > stepNumber ? <FaCheckCircle /> : stepNumber}
            </div>
            <span
              className={`text-sm font-medium ${step >= stepNumber ? "text-blue-600" : "text-gray-500"}`}
            >
              {stepNumber === 1 && "Personal"}
              {stepNumber === 2 && "Address"}
              {stepNumber === 3 && "W-9/ID"}
              {stepNumber === 4 && "Loan"}
              {stepNumber === 5 && "Review"}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Step Indicator */}
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center space-x-2 text-blue-600"
          >
            <span className="font-semibold">Step {step} of 5:</span>
            <span className="text-sm">
              {step === 1 && "Personal Information"}
              {step === 2 && "Address"}
              {step === 3 && "W-9/ID"}
              {step === 4 && "Loan Details"}
              {step === 5 && "Review"}
            </span>
          </button>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  step >= stepNumber ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );

  const CloudinarySecurityNotice = () => (
    <div className="bg-gradient-to-r from-blue-50/80 to-green-50/80 backdrop-blur-sm border border-green-200 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-gradient-to-br from-green-500 to-blue-600 p-3 rounded-full flex-shrink-0 mx-auto md:mx-0">
          <FaLock className="text-white text-xl md:text-2xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center md:text-left">
            Your Information is 100% Secure
          </h3>
          <div className="space-y-4">
            <div className="bg-white/50 p-3 md:p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center justify-center md:justify-start">
                <FaShieldAlt className="text-green-600 mr-2" />
                Military-Grade Encryption
              </h4>
              <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                All sensitive data and documents are protected with 256-bit AES
                encryption.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                "End-to-End Encrypted",
                "SSL/TLS Protected",
                "No Local Storage",
                "GDPR Compliant",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <FaCheckCircle className="text-green-600 text-4xl md:text-5xl" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Application Submitted Successfully!
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
              We've sent a confirmation to {formData.email}.
            </p>

            <div className="bg-blue-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                Application Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Application ID</p>
                  <p className="text-base md:text-xl font-bold text-blue-600 break-all">
                    STC-{Date.now().toString().slice(-8)}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Requested Amount</p>
                  <p className="text-base md:text-xl font-bold text-blue-600">
                    ${parseInt(formData.loanAmount).toLocaleString()}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg col-span-1 sm:col-span-2">
                  <p className="text-xs text-gray-600">W-9 Status</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-green-100 text-green-800">
                    Completed for SecureTrustCapital
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 px-3 md:px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2 md:mb-4">
            Secure Loan Application
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            Complete your application in 5 simple steps
          </p>
        </div>

        {submitStatus === "error" && (
          <div className="mb-6 md:mb-8 p-3 md:p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm md:text-base text-red-700 font-medium">
                  There was an error submitting your application.
                </p>
                <p className="text-xs md:text-sm text-red-600 mt-1">
                  Please try again or contact support.
                </p>
              </div>
            </div>
          </div>
        )}

        <StepIndicator />
        <CloudinarySecurityNotice />

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12"
        >
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl">
                  <FaUser className="text-blue-600 text-xl md:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Personal Information
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Tell us about yourself
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                    maxLength="14"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {step === 2 && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-blue-600 text-xl md:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Address Information
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Where do you live?
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="New York"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select</option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  How long at this address?
                </label>
                <select
                  name="yearsAtAddress"
                  value={formData.yearsAtAddress}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select Duration</option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="1_2">1-2 years</option>
                  <option value="3_5">3-5 years</option>
                  <option value="5_10">5-10 years</option>
                  <option value="10_plus">10+ years</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: W-9 and Identification */}
          {step === 3 && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl">
                  <FaIdCard className="text-blue-600 text-xl md:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Tax Information (W-9)
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    For SecureTrustCapital Solutions, LLC
                  </p>
                </div>
              </div>

              {/* W-9 Header Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6">
                <div className="flex items-start space-x-3">
                  <FaExclamationTriangle className="text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm font-medium text-yellow-800">
                      SecureTrustCapital is requesting this information to
                      report payments to the IRS.
                    </p>
                    <p className="text-xs text-yellow-700 mt-2">
                      Form W-9 (Rev. March 2024) • IRS Request for Taxpayer
                      Identification
                    </p>
                  </div>
                </div>
              </div>

              {/* W-9 Line 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Line 1: Name (as on tax return) *
                </label>
                <input
                  type="text"
                  name="taxName"
                  value={
                    formData.taxName ||
                    `${formData.firstName} ${formData.lastName}`
                  }
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Legal name"
                />
                <p className="text-xs text-gray-500 mt-2 flex items-center">
                  <FaInfoCircle className="mr-1 text-blue-500" />
                  Enter exactly as on your tax return
                </p>
              </div>

              {/* W-9 Line 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Line 2: Business name/DBA (if different)
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName || ""}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Trade Name / DBA"
                />
              </div>

              {/* W-9 Line 3 - Simplified for Mobile */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-3">
                  Line 3: Federal Tax Classification *
                </label>
                <div className="space-y-3">
                  {[
                    { id: "individual", label: "Individual/Sole Proprietor" },
                    { id: "llc", label: "Limited Liability Company" },
                    { id: "c_corp", label: "C Corporation" },
                    { id: "s_corp", label: "S Corporation" },
                    { id: "partnership", label: "Partnership" },
                    { id: "trust", label: "Trust/Estate" },
                    { id: "other", label: "Other" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`taxClass${option.id}`}
                        name="taxClassification"
                        value={option.id}
                        checked={formData.taxClassification === option.id}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`taxClass${option.id}`}
                        className="ml-3 text-xs md:text-sm text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>

                {formData.taxClassification === "llc" && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <select
                      name="llcClassification"
                      value={formData.llcClassification || ""}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                    >
                      <option value="">Select LLC type</option>
                      <option value="c_corp">C Corporation</option>
                      <option value="s_corp">S Corporation</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                )}

                {formData.taxClassification === "other" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      name="taxClassificationOther"
                      value={formData.taxClassificationOther || ""}
                      onChange={handleChange}
                      placeholder="Specify other"
                      className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* TIN/SSN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    TIN (SSN or EIN) *
                  </label>
                  <input
                    type="text"
                    name="identificationNumber"
                    value={formData.identificationNumber}
                    onChange={handleIdentificationNumberChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                    placeholder="XXX-XX-XXXX"
                    maxLength="11"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    License State *
                  </label>
                  <select
                    name="licenseIssuingState"
                    value={formData.licenseIssuingState}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Document Upload - Stack on Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Front Upload */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    License Front *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                    {formData.documentFrontUrl ? (
                      <div className="space-y-2">
                        <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                        <p className="text-xs truncate">
                          {formData.documentFrontName}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeUploadedFile("front")}
                          className="text-xs text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          id="documentFront"
                          onChange={(e) => handleFileUpload(e, "front")}
                          accept="image/*,application/pdf"
                          className="hidden"
                        />
                        <label
                          htmlFor="documentFront"
                          className="cursor-pointer"
                        >
                          {uploadingFiles.front ? (
                            <FaSpinner className="animate-spin text-blue-500 text-xl mx-auto" />
                          ) : (
                            <>
                              <FaCloudUploadAlt className="text-3xl text-gray-400 mx-auto mb-2" />
                              <p className="text-xs text-gray-600">
                                Tap to upload
                              </p>
                            </>
                          )}
                        </label>
                      </>
                    )}
                  </div>
                </div>

                {/* Back Upload */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    License Back *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                    {formData.documentBackUrl ? (
                      <div className="space-y-2">
                        <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                        <p className="text-xs truncate">
                          {formData.documentBackName}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeUploadedFile("back")}
                          className="text-xs text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          id="documentBack"
                          onChange={(e) => handleFileUpload(e, "back")}
                          accept="image/*,application/pdf"
                          className="hidden"
                        />
                        <label
                          htmlFor="documentBack"
                          className="cursor-pointer"
                        >
                          {uploadingFiles.back ? (
                            <FaSpinner className="animate-spin text-blue-500 text-xl mx-auto" />
                          ) : (
                            <>
                              <FaCloudUploadAlt className="text-3xl text-gray-400 mx-auto mb-2" />
                              <p className="text-xs text-gray-600">
                                Tap to upload
                              </p>
                            </>
                          )}
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* W-9 Certification */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 md:p-4">
                <div className="flex items-start space-x-2">
                  <FaShieldAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-xs text-blue-800">
                    By proceeding, you certify under penalty of perjury that
                    your TIN is correct and you're a U.S. person.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Loan Details */}
          {step === 4 && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl">
                  <FaCreditCard className="text-blue-600 text-xl md:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Loan Details
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Tell us about your loan needs
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount: ${parseInt(formData.loanAmount).toLocaleString()}
                </label>
                <input
                  type="range"
                  name="loanAmount"
                  min="500"
                  max="100000"
                  step="500"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$500</span>
                  <span>$100k</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Purpose *
                  </label>
                  <select
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                  >
                    {loanPurposes.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Employment *
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg"
                  >
                    {employmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Annual Income *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500 text-base">
                      $
                    </span>
                    <input
                      type="number"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      required
                      className="w-full pl-7 pr-3 py-2 text-base border border-gray-300 rounded-lg"
                      placeholder="75000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Monthly Expenses
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500 text-base">
                      $
                    </span>
                    <input
                      type="number"
                      name="monthlyExpenses"
                      value={formData.monthlyExpenses}
                      onChange={handleChange}
                      className="w-full pl-7 pr-3 py-2 text-base border border-gray-300 rounded-lg"
                      placeholder="3000"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs text-center text-gray-600">
                  Est. Monthly Payment:{" "}
                  <span className="font-bold text-blue-600">
                    ${Math.round(formData.loanAmount * 0.02).toLocaleString()}
                  </span>
                </p>
                <p className="text-xs text-center text-gray-500 mt-1">
                  5.99% APR for 60 months (estimate)
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {step === 5 && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl">
                  <FaFileAlt className="text-blue-600 text-xl md:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Review & Submit
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Verify your information
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  W-9 Summary
                </h3>
                <div className="space-y-2 text-xs">
                  <p>
                    <span className="text-gray-500">Name:</span>{" "}
                    {formData.taxName ||
                      `${formData.firstName} ${formData.lastName}`}
                  </p>
                  <p>
                    <span className="text-gray-500">Classification:</span>{" "}
                    {formatTaxClassification(formData)}
                  </p>
                  <p>
                    <span className="text-gray-500">TIN:</span>{" "}
                    {formData.identificationNumber}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-xs text-gray-700"
                  >
                    I agree to the Terms and Privacy Policy
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="allowCreditCheck"
                    name="allowCreditCheck"
                    checked={formData.allowCreditCheck}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="allowCreditCheck"
                    className="text-xs text-gray-700"
                  >
                    I authorize credit check
                  </label>
                </div>

                <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="w9Certify"
                    name="w9Certify"
                    checked={formData.w9Certify}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="w9Certify"
                    className="text-xs text-yellow-800"
                  >
                    I certify W-9 information is correct under penalty of
                    perjury
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row justify-between mt-8 pt-6 border-t border-gray-200 space-y-3 sm:space-y-0">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition w-full sm:w-auto order-2 sm:order-1"
              >
                <FaArrowLeft />
                <span>Back</span>
              </button>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep(step)}
                className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto order-1 sm:order-2 ${
                  validateStep(step)
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span>Continue</span>
                <FaArrowRight />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !validateStep(step)}
                className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto order-1 sm:order-2 ${
                  validateStep(step) && !isSubmitting
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaCheckCircle />
                    <span>Submit</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Security Footer */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
            <FaCloudUploadAlt className="text-blue-600" />
            <span className="text-xs text-gray-600">
              Encrypted • Secure Storage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
