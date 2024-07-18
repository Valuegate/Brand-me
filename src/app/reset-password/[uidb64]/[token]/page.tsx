// pages/reset-password/[uidb64]/[token].tsx
"use client";

import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { GiPadlock } from "react-icons/gi";
import Footer from "@/components/resuable/Footer/Footer";
import InputComponent from "@/components/resuable/InputComponent";
import NavBar from "@/components/resuable/NavBar/NavBar";

const ResetPassword:FC<{params:any}> = ({params}) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { uidb64, token } = params;

  useEffect(() => {
    if (!uidb64 || !token) {
      setMessage("Invalid link. Please request a new password reset link.");
    }
  }, [uidb64, token]);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('https://brandme-2.onrender.com/api/accounts/set-new-password/', {
        password,
        confirm_password: confirmPassword,
        uidb64,
        token
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error resetting password. Ensure all fields have at least 6 characters.");
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
              Reset Password
            </h2>
            <div className="flex items-center gap-8 mt-10">
              <div className="mt-8 md:hidden">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Password"
                placeholder="Enter new password"
                value={password}
                width="w-full"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={"password"}
              />
            </div>
            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8 md:hidden">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Confirm Password"
                placeholder="Confirm new password"
                value={confirmPassword}
                width="w-full"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type={"password"}
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <button
                onClick={handleSubmit}
                className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
              >
                Submit
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

export default ResetPassword;
