import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-brand flex flex-col gap-10 items-center py-24 md:py-10 px-[30%] md:px-5 w-full rounded-3xl">
      <h1 className="text-white font-cocogoose text-4xl md:text-2xl">Contact Us</h1> 
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-white font-cocogoose-light font-bold text-lg"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-white font-cocogoose-light font-bold text-lg"
          >
            Email
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-white font-cocogoose-light font-bold text-lg"
          >
            Message
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-white rounded-lg bg-brand h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
      </div>
      <button className="font-cocogoose text-light-blue text-xl bg-white px-16 md:w-full py-2 md:py-3 rounded-md">
        Send
      </button>
    </div>
  );
};

export default ContactForm;
