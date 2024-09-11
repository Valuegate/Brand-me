"use client";

import React, { useState, FC } from "react";
import { CircularProgress } from "@mui/material";
import Footer from "@/components/resuable/Footer/Footer";
import InputComponent from "@/components/resuable/InputComponent";
import NavBar from "@/components/resuable/NavBar/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation"; // For routing

const EmailVerification: FC = () => {
  const [otp, setOtp] = useState(""); // Store the OTP entered by the user
  const [loading, setLoading] = useState(false); // Loading state for submission
  const router = useRouter(); // To route to the home page

  const handleSubmit = () => {
    if (!otp) {
      toast.error("Please enter the email verification");
      return;
    }

    setLoading(true);

    // Simulate a delay for submission (dummy logic)
    setTimeout(() => {
      toast.success("Email Verification successfully");
      setLoading(false);

      // After "submitting" the email verification, route to the home page (just for demo purposes)
      router.push("/login");
    }, 1500); // Simulate a network delay
  };

  return (
    <div className="bg-white">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col items-center">
        <div className="mt-6 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 md:px-5 py-[2rem] md:py-10">
            <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose mb-4">
              Input the email verification here
            </h2>
            <InputComponent
              label="Email Verification"
              placeholder="Enter the code here"
              value={otp} // Bind to OTP state
              width="w-full"
              onChange={(e) => setOtp(e.target.value)} // Update OTP state on change
              type="text"
            />
            <div className="flex items-center justify-center mt-8">
              <button
                onClick={handleSubmit}
                className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailVerification;
