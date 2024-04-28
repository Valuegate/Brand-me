import React, { useState, useEffect } from "react";

import { useUserStore } from "@/stores/userStore";

import InputComponent from "../resuable/InputComponent";

import { globalKey } from "@/stores/globalStore";

const Profile = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const bio = useUserStore((state) => state.bio);
  const location = useUserStore((state) => state.location);

  useEffect(() => {
    let localData: string | null = window.localStorage.getItem(globalKey);
    if (localData !== null) {
      let data = JSON.parse(localData);
      let full_name: string = data.full_name;

      let names = full_name.split(" ");
      setEmail(data.email);
      setFirstName(names[0]);
      setLastname(names[1]);
    }
  }, []);

  return (
    <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0 ">
      <h2 className="text-brand text-[20px] font-cocogoose">Profile</h2>
      <div className="mt-5 flex gap-10 items-center">
        <div className="w-[60px] h-[60px] rounded-full bg-brand" />
        <h3 className="text-brand text-[16px] font-cocogoose">
          Change Profile Picture
        </h3>
      </div>
      <div className="mt-12 flex flex-col gap-6">
        <div className="flex md:flex-col md:gap-6 gap-10 jusitfy-between">
          <InputComponent
            width="w-full"
            label="First Name"
            value={firstName}
            type="text"
            placeholder="Enter Your First Name"
            onChange={(e) => {}}
          />
          <InputComponent
            width="w-full"
            label="Last Name"
            type="text"
            value={lastName}
            placeholder="Enter Your Last Name"
            onChange={(e) => {}}
          />
        </div>
        <InputComponent
          width="w-full"
          label="Bio"
          type="text"
          value={bio}
          placeholder="Enter Your Bio"
          onChange={(e) => {
            useUserStore.setState({ bio: e.target.value });
          }}
        />
        <InputComponent
          width="w-full"
          label="Location"
          type="text"
          value={location}
          placeholder="Enter Your Location"
          onChange={(e) => {
            useUserStore.setState({ location: e.target.value });
          }}
        />
        <InputComponent
          width="w-full"
          label="Email"
          type="text"
          value={email}
          placeholder="example@mail.com"
          onChange={(e) => {}}
        />
      </div>
      <div className="flex w-full justify-center my-10">
        <button className="w-[400px] bg-brand rounded-lg h-[50px] text-white font-cocogoose">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
