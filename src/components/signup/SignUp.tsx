"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Link from "next/link";
import { TbMessage } from "react-icons/tb";
import { GiPadlock } from "react-icons/gi";
import InputComponent from "../resuable/InputComponent";

import { globalKey } from "@/stores/globalStore";
import Image from "next/image";
import Sort from "@/assets/Sort.png";
import { Formik, Form } from "formik";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import useAccountRegister, {
  TSignupPayload,
} from "@/hooks/mutations/useAccountRegister";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [credentials, setCredentials] = useState<TSignupPayload>({
    first_name: "",
    email: "",
    password: "",
    last_name: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [confirm, setConfirm] = useState<string>("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const { isError, isLoading, isSuccess, Signup, error, data } =
    useAccountRegister();

  useEffect(() => {
    if (isError) {
      setErrorMsg(t("errorOccurred"));
      let data = error.response?.data as any;
      toast.error(data.errors.email[0]);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("accountCreated"));
      router.push("/emailverification");
    }
  }, [isSuccess]);

  const handleSignup = () => {
    if (credentials.password !== confirm) {
      toast.error(t("passwordsDoNotMatch"));
      return;
    }

    setErrorMsg(""); // Clear previous error message
    Signup(credentials);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose">
                {t("signUp")}
              </h2>
              <Link
                className="text-brand text-[20px] md:text-[16px] underline leading-[15px] font-cocogoose"
                href={"/login"}
              >
                {t("logIn")}
              </Link>
            </div>

            <div className="mt-10">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  first_name: "",
                  last_name: "",
                  password2: "",
                }}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                }}
              >
                {() => (
                  <Form method="POST">
                    <div className="flex items-center gap-8">
                      <div className="mt-8 md:hidden">
                        <TbMessage className="w-[50px] h-[50px]" />
                      </div>
                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label
                          htmlFor="email"
                          className="font-cocogoose-light font-bold text-[16px] text-brand"
                        >
                          {t("email")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={credentials.email}
                          onChange={(e) => {
                            let res = e.target.value.trim();
                            res = res.toLowerCase();
                            setCredentials({
                              ...credentials,
                              email: res,
                            });
                          }}
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
                        <label
                          htmlFor="email"
                          className="font-cocogoose-light font-bold text-[16px] text-brand"
                        >
                          {t("password")}
                        </label>

                        <div className="relative w-full">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="********"
                            onChange={(e) => {
                              e.stopPropagation();
                              setCredentials({
                                ...credentials,
                                password: e.target.value,
                              });
                              setIsPasswordValid(e.target.value.length >= 6);
                            }}
                            className={`focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand ${
                              !isPasswordValid ? "border-error-500" : ""
                            }`}
                          />
                          <div
                            className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setShowPassword(!showPassword);
                            }}
                          >
                            {showPassword ? (
                              <IoMdEyeOff fill="#1C274D" size={"20px"} />
                            ) : (
                              <IoMdEye fill="#1C274D" size={"20px"} />
                            )}
                          </div>
                        </div>
                        {!isPasswordValid && (
                          <p className="text-error text-sm mt-1">
                            {t("passwordLengthError")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-8 mt-4">
                      <div className="mt-8 md:hidden">
                        <GiPadlock className="w-[50px] h-[50px]" />
                      </div>

                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label
                          htmlFor="re-password"
                          className="font-cocogoose-light font-bold text-[16px] text-brand"
                        >
                          {t("confirmPassword")}
                        </label>

                        <div className="relative w-full">
                          <input
                            type={showPassword1 ? "text" : "password"}
                            id="re-password"
                            name="re-password"
                            placeholder="********"
                            onChange={(e) => {
                              e.stopPropagation();
                              setConfirm(e.target.value);
                            }}
                            className="focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand"
                          />
                          <div
                            className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setShowPassword1(!showPassword1);
                            }}
                          >
                            {showPassword1 ? (
                              <IoMdEyeOff fill="#470912" size={"20px"} />
                            ) : (
                              <IoMdEye fill="#470912" size={"20px"} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="mt-8 md:hidden">
                        <Image src={Sort} alt={""} width={50} height={50} />
                      </div>
                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label
                          htmlFor="firstname"
                          className="font-cocogoose-light font-bold text-[16px] text-brand"
                        >
                          {t("firstName")}
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              first_name: e.target.value,
                            })
                          }
                          placeholder={t("enterFirstName")}
                          className="focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="mt-8 md:hidden">
                        <Image src={Sort} alt={""} width={50} height={50} />
                      </div>
                      <div className="mb-4 flex flex-col gap-1 w-full">
                        <label
                          htmlFor="lastname"
                          className="font-cocogoose-light font-bold text-[16px] text-brand"
                        >
                          {t("lastName")}
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              last_name: e.target.value,
                            })
                          }
                          placeholder={t("enterLastName")}
                          className="focus:outline-none bg-[#FFFFFF00] w-full font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand"
                        />
                      </div>
                    </div>

                    <div className="my-4 ml-20 gap-4 flex w-full items-center">
                      {/* <div className="mt-8 md:hidden">
                        <Image src={Sort} alt={""} width={50} height={50} />
                      </div> */}
                      {/* <div className="mb-4 flex gap-1"> */}
                      <input
                        type="checkbox"
                        id="is"
                        name="is"
                        onChange={(e) => setTermsAgreed(e.target.checked)}
                        className="focus:outline-none bg-[#FFFFFF00] font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg w-[30px] h-[30px] placeholder:text-brand-49 text-brand"
                      />
                      <label
                        htmlFor="is"
                        className="font-cocogoose font-bold text-[16px] text-brand"
                      >
                        {t("click")}
                      </label>
                      {/* </div> */}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button
                        type="submit"
                        disabled={
                          isLoading ||
                          !credentials.email ||
                          !credentials.password ||
                          !credentials.first_name ||
                          !credentials.last_name ||
                          !termsAgreed ||
                          !isPasswordValid
                        }
                        className={`${
                          isLoading
                            ? "bg-primary-300 cursor-not-allowed"
                            : "bg-primary-500 hover:bg-primary-600"
                        } text-white bg-brand py-2 px-8 font-cocogoose font-bold text-[24px] rounded-3xl ${
                          isLoading ? "" : "transition duration-300"
                        }`}
                        onClick={handleSignup}
                      >
                        {t("signUp")}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12" />
      <Footer />
    </div>
  );
};

export default SignUp;
