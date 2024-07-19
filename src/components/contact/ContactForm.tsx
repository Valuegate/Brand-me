import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserContactUs, {
  TContactPayload,
} from "@/hooks/mutations/useContactUs";
import { useTranslation } from "react-i18next";

import Pic1 from "@/assets/pic 1.png";
import Image from "next/image";

const ContactForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [credentials, setCredentials] = useState<TContactPayload>({
    name: "",
    email: "",
    message: "",
  });

  const { isError, isLoading, isSuccess, Contact } = useUserContactUs();

  useEffect(() => {
    if (isError) {
      toast.error(t("error"));
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("success"));
      setCredentials({ name: "", email: "", message: "" }); // Clear form details
      router.push("/contact");
    }
  }, [isSuccess, router]);

  const handleContact = () => {
    if (!credentials.name || !credentials.email || !credentials.message) {
      toast.error(t("fillFields"));
      return;
    }
    Contact(credentials);
  };

  return (
    <>
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
      <div className="overflow-hidden relative rounded-3xl">
        <Image
          src={Pic1}
          alt="image"
          className="w-full h-[700px] object-cover"
        />
        <div className="flex flex-col gap-10 items-center py-24 md:py-10 px-[30%] md:px-5 bg-gradient-to-b absolute top-0 left-0 z-5 from-light-blue-66 to-dark-blue h-full w-full">
          <h1 className="text-white font-cocogoose text-4xl md:text-2xl">
            {t("contactUs")}
          </h1>
          <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="name"
                className="text-white font-cocogoose-light font-bold text-lg"
              >
                {t("name")}
              </label>
              <input
                id="name"
                type="text"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    name: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-2 border-white rounded-lg bg-transparent h-16 text-white font-cocogoose-light px-4 font-bold"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="email"
                className="text-white font-cocogoose-light font-bold text-lg"
              >
                {t("email")}
              </label>
              <input
                id="email"
                type="text"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-2 border-white rounded-lg bg-transparent h-16 text-white font-cocogoose-light px-4 font-bold"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="message"
                className="text-white font-cocogoose-light font-bold text-lg"
              >
                {t("message")}
              </label>
              <input
                id="message"
                type="text"
                value={credentials.message}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    message: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-2 border-white rounded-lg bg-transparent h-16 text-white font-cocogoose-light px-4 font-bold"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleContact}
            className="font-cocogoose text-light-blue text-xl bg-white px-16 md:w-full py-2 md:py-3 rounded-md"
          >
            {isLoading && <Loader color="#1C274D" />}
            {!isLoading && t("send")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
