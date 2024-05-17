import React, { useState, useEffect, useRef } from "react";

import { useUserStore } from "@/stores/userStore";
import Image from "next/image";

import InputComponent from "../resuable/InputComponent";

import { globalKey } from "@/stores/globalStore";

import { editProfile } from "@/hooks/mutations/useEditProfile";
import { Router } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBase64 } from "@/functions/fileFunction";
import { Loader } from "@mantine/core";

const Profile = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [image, setImage] = useState<File | string | null>(null);

  const [selectedImage, setSelectedImage] = useState<string>("");

  const [isLoading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

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

  const edit = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    setLoading(true);
    editProfile(
      {
        first_name: firstName,
        last_name: lastName,
        location: location,
        bio: bio,
        image: image,
      },
      token,
      (res) => {
        toast.success("Successfully edited your profile");
        window.location.assign("/profile");
        setLoading(false);
      },
      (err) => {
        toast.error("An error occurred. Please try again later");
        setLoading(false);
      }
    );
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
      <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0 ">
        <h2 className="text-brand text-[20px] font-cocogoose">Profile</h2>
        <div className="mt-5 flex gap-10 items-center">
          <div>
            {selectedImage === "" && (
              <div className="size-[60px] rounded-full bg-brand cursor-pointer" />
            )}
            {selectedImage !== "" && (
              <Image
                src={selectedImage}
                alt="image"
                className="size-[60px] rounded-full "
                width={60}
                height={60}
              />
            )}
            <input
              type="file"
              style={{
                display: "none",
              }}
              accept="image/*"
              ref={inputRef}
              onChange={(e) => {
                if (e.target.files !== null) {
                  let file = e.target.files[0]!;
                  getBase64(e.target.files[0])
                    .then((res) => {
                      setImage(file);
                      setSelectedImage(res as string);
                    })
                    .catch((err) => {
                      setSelectedImage("");
                      setImage(null);
                    });
                }
              }}
            />
          </div>
          <h3
            className="text-brand text-[16px] font-cocogoose hover:underline hover:font-bold cursor-pointer"
            onClick={() => {
              inputRef.current?.click();
            }}
          >
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <InputComponent
              width="w-full"
              label="Last Name"
              type="text"
              value={lastName}
              placeholder="Enter Your Last Name"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <InputComponent
            width="w-full"
            label="Bio"
            type="text"
            value={bio}
            placeholder="Enter Your Bio"
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <InputComponent
            width="w-full"
            label="Location"
            type="text"
            value={location}
            placeholder="Enter Your Location"
            onChange={(e) => {
              setLocation(e.target.value);
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
          <button
            onClick={edit}
            className="w-[400px] flex items-center gap-2 justify-center bg-brand rounded-lg h-[50px] text-white font-cocogoose"
          >
            {!isLoading && "Update Profile"}
            {isLoading && <Loader color="#FFFFFF" size={"24px"} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
