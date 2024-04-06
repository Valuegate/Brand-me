import React, { useState } from "react";

import InputComponent from "../resuable/InputComponent";

const Password = () => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0">
      <h2 className="text-brand text-[20px] font-cocogoose">Password</h2>

      <div className="mt-12 flex flex-col gap-6">
        <InputComponent
          width="w-full"
          label="Current Password"
          value={password}
          type="password"
          placeholder="********"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputComponent
          width="w-full"
          label="New Password"
          type="password"
          value={newPassword}
          placeholder="********"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <InputComponent
          width="w-full"
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          placeholder="********"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full justify-center my-10">
        <button className="w-[400px] bg-brand rounded-lg h-[50px] text-white font-cocogoose">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Password;
