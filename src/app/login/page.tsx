"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/resuable/NavBar/NavBar"
import Footer from "@/components/resuable/Footer/Footer";
import Link from "next/link";

import { TbMessage } from "react-icons/tb";
import { GiPadlock } from "react-icons/gi";
import useLogin, { TLoginPayload } from '@/hooks/mutations/useLogin';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from '@mantine/core';
import { Form, Formik } from "formik";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginPage = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState<TLoginPayload>({
    email: "",
    password: "",
  });

  const { isError, isLoading, isSuccess, login, error, data } = useLogin();

  if (isSuccess) {
    // Set token to local storage
    localStorage.setItem("userToken", data?.access);
    localStorage.setItem("userEmail", data?.email);
    console.log(data);

    router.push("/profile");
  }

  useEffect(() => {
    if (isError && error.response) {
      let data = error.response.data as any;
      toast.error(data.detail);
    }
  }, [error, isError]);

  const handleLogin = () => {
    login(credentials);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col items-center md:w-full">
        <div className="flex justify-center items-center flex-col gap-5 md:w-full">
          <Link
            href={""}
            className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
          >
            Log In With Linkedin
          </Link>
          <Link
            href={""}
            className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
          >
            Log In With Google
          </Link>
          <Link
            href={""}
            className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
          >
            Log In With Facebook
          </Link>
        </div>

        <div className="mt-16 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 md:px-5 py-[2rem] md:py-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose">
                Log In
              </h2>
              <Link
                className="text-brand text-[20px] md:text-[16px] underline leading-[15px] font-cocogoose"
                href={"/sign-up"}
              >
                Sign Up
              </Link>
            </div>
            <div className='mt-10'>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                }}
              >
                {({ handleChange }) => (
                  <Form>
                    <div className="flex items-center gap-8">
                      <div className="mt-8 md:hidden">
                        <TbMessage className="w-[50px] h-[50px]" />
                      </div>
                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label htmlFor="email" className="font-cocogoose-light font-bold text-[16px] text-brand">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          // onChange={handleChange}
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              email: e.target.value,
                            })
                          }
                          placeholder="mail@email.com"
                          className="focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-8 mt-4">
                      <div className="mt-8 md:hidden">
                        <GiPadlock className="w-[50px] h-[50px]" />
                      </div>
                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label htmlFor="email" className="font-cocogoose-light font-bold text-[16px] text-brand">
                          Password
                        </label>
                        <div className="relative w-full">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="********"
                            onChange={(e) =>
                              setCredentials({
                                ...credentials,
                                password: e.target.value,
                              })
                            }
                            className="focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand"
                          />
                          <button
                            className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <IoMdEyeOff fill="#1C274D" size={"20px"} />
                            ) : (
                              <IoMdEye fill="#1C274D" size={"20px"} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <Link href={"/forgot-password"}>
              <p className="text-brand text-[15px] hover:underline leading-[15px] font-cocogoose pl-[5rem] md:pl-0 mt-4 md:mt-6">
                Forgot password
              </p>
            </Link>
            <div className="flex items-center justify-center mt-8">
              <button
                // onClick={() => {
                //   window.localStorage.setItem(
                //     globalKey,
                //     JSON.stringify({
                //       token: "1234567890",
                //     })
                //   );
                //   window.location.assign("/profile");
                // }}
                type='submit'
                onClick={handleLogin}
                className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
              >
                {isLoading ? (
                  <Loader
                    color="#fff"
                    className="flex items-center justify-center"
                  />
                ) : (
                  "Log In"
                )}
              </button>
            </div>
                  </Form>
                )}
              </Formik>
            </div>

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
