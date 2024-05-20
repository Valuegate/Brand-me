import { Loader } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserContactUs, { TContactPayload } from '@/hooks/mutations/useContactUs';

const ContactForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<TContactPayload>({
    name: "",
    email: "",
    message: "",
  });
  // const [errorMsg, setErrorMsg] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  // const [isLoading, setLoading] = useState<boolean>(false);

  const { isError, isLoading, isSuccess, Contact, error } = useUserContactUs();

  useEffect(() => {
    if (isError) {
      toast.error("An error occurred. Please try again later");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your message has been sent. Thank you for contacting us.");
      setCredentials({ name: "", email: "", message: "" }); // Clear form details
      router.push("/contact");
    }
  }, [isSuccess, router]);

  const handleContact = () => {
    if (!credentials.name || !credentials.email || !credentials.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    Contact(credentials);
  };

  return (
    <>
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
      <div className="bg-brand flex flex-col gap-10 items-center py-24 md:py-10 px-[30%] md:px-5 w-full rounded-3xl">
        <h1 className="text-white font-cocogoose text-4xl md:text-2xl">Contact Us</h1>
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="name"
              className="text-white font-cocogoose-light font-bold text-lg"
            >
              Name
            </label>
            <input
            id='name'
              type="text"
              value={credentials.name}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  name: e.target.value,
                })
              }
              className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="email"
              className="text-white font-cocogoose-light font-bold text-lg"
            >
              Email
            </label>
            <input
            id='email'
              type="text"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                })
              }
              className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="message"
              className="text-white font-cocogoose-light font-bold text-lg"
            >
              Message
            </label>
            <input
            id='message'
              type="text"
              value={credentials.message}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  message: e.target.value,
                })
              }
              className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
            />
          </div>
        </div>
        <button
          type='submit'
          onClick={handleContact}
          className="font-cocogoose text-light-blue text-xl bg-white px-16 md:w-full py-2 md:py-3 rounded-md">
          {isLoading && <Loader color='#1C274D' />}
                {!isLoading && "Send"}
        </button>
      </div>
    </>
  );
};

export default ContactForm;
