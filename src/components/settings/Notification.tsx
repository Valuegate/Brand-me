import React from "react";
import ComboComponent from "../resuable/ComboComponent";

const Notification = () => {
  return (
    <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0">
      <h2 className="text-brand text-[20px] font-cocogoose">Notification</h2>

      <div className="mt-12 flex flex-col gap-6">
        <ComboComponent
          hint=""
          value="Notify me by email"
          options={["Notify me by email", "Notify me in-app"]}
          label="Whenever I finish with a course"
        />
        <ComboComponent
          hint=""
          value="Notify me by email"
          options={["Notify me by email", "Notify me in-app"]}
          label="Whenever I have any notification"
        />
      </div>
      <h2 className="text-brand text-[20px] font-cocogoose mt-12">
        Group Notifications
      </h2>
      <p className="mt-2 font-cocogoose-light font-bold text-brand text-[18px]">
        Set the optimal digest and email notification frequency to the groups
        you&apos;re in, to toggle post likes notifications.
      </p>
      
      <button className="w-[400px] md:w-full bg-brand mt-16 mb-10 rounded-lg h-[50px] text-white font-cocogoose">
          Update Profile
        </button>
      
    </div>
  );
};

export default Notification;
