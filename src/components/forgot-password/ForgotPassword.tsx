"use client";

import React, { useState, FC } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Footer from "@/components/resuable/Footer/Footer";
import InputComponent from "@/components/resuable/InputComponent";
import NavBar from "@/components/resuable/NavBar/NavBar";

const ForgotPassword: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post('https://brandme-2.onrender.com/api/accounts/password-reset/', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending reset password link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col items-center">
        <div className="mt-6 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 md:px-5 py-[2rem] md:py-10">
            <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose mb-4">
              Forgot Password
            </h2>
            <InputComponent
              label="Email"
              placeholder="Enter your email"
              value={email}
              width="w-full"
              onChange={(e) => setEmail(e.target.value)}
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
            {message && (
              <div className="mt-4 text-center text-red-500">{message}</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
