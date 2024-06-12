"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import { convertDate } from "@/functions/dateFunctions";
import { Loader } from "@mantine/core";

import { getMessages, iMessage } from "@/hooks/queries/useGetMessages";
import { globalKey } from "@/stores/globalStore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Messages = () => {
  const [messages, setMessages] = useState<iMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    getMessages(
      token,
      (res) => {
        let msgs = res.data.map((mg: any, i: number) => {
          return {
            username: mg.name,
            email: mg.email,
            message: mg.message,
            date: new Date(mg.timestamp),
          };
        });
        setMessages(msgs);
        setLoading(false);
      },
      (err) => {
        toast.error("Unable to retrieve your messages. Please try again");
        setLoading(false);
      }
    );
  }, []);

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
      <div className="fixed top-0 left-0 right-0 z-10">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <h2 className="font-cocogoose text-[28px] text-center">
        Support Messages
      </h2>
      {!loading && (
        <div className="px-20 md:px-[5%]">
          <div className="mt-16 flex flex-col w-full shadow-custom bg-white">
            <div className="w-full flex items-center h-16 border-b border-faint-border px-5">
              <h2 className="font-cocogoose text-[16px] text-black w-[5%]">
                S/N
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[20%]">
                Username
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[20%]">
                Email
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[40%]">
                Messages
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[15%]">
                Date
              </h2>
            </div>
            <div className="mt-5 flex flex-col">
              {messages.map((msg, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i !== messages.length - 1 &&
                      "border-b border-faint-border"
                    } flex w-full justify-between items-center px-5 py-3`}
                  >
                    <p className="font-cocogoose-light font-bold text-[16px] text-black w-[5%]">
                      {i + 1}
                    </p>

                    <p className="font-cocogoose-light font-bold text-[16px] text-black w-[19%]">
                      {msg.username}
                    </p>
                    <p className="font-cocogoose-light font-bold text-[16px] text-black w-[19%]">
                      {msg.email}
                    </p>
                    <p className="font-cocogoose-light font-bold text-[16px] text-black w-[40%]">
                      {msg.message}
                    </p>
                    <p className="font-cocogoose-light font-bold text-[16px] text-black w-[15%]">
                      {convertDate(msg.date)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="w-full h-64 flex items-center justify-center">
          <Loader size={"36px"} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Messages;
