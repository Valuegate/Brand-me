import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@mantine/core";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { globalKey } from "@/stores/globalStore";
import InputComponent from "../resuable/InputComponent";
import { editProfile } from "@/hooks/mutations/useEditProfile";
import { getBase64 } from "@/functions/fileFunction";

type CountryOption = {
  label: string;
  value: string;
};

const Profile = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [location, setLocation] = useState<CountryOption | null>(null);
  const [image, setImage] = useState<File | string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const countries = countryList().getData();

  useEffect(() => {
    const localData = window.localStorage.getItem(globalKey);
    if (localData) {
      const data = JSON.parse(localData);
      const full_name = data.full_name;
      const names = full_name.split(" ");
      setEmail(data.email);
      setFirstName(names[0]);
      setLastName(names[1]);
      setBio(data.bio || "");
      setLocation(data.location ? countries.find((c) => c.label === data.location) ?? null : null);
      setSelectedImage(data.image || "");
    }
  }, [countries]);

  const edit = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    setLoading(true);
    editProfile(
      {
        first_name: firstName,
        last_name: lastName,
        location: location ? location.label : "",
        bio: bio,
        image: image,
      },
      token,
      (res) => {
        toast.success("Successfully edited your profile");
        const localData = window.localStorage.getItem(globalKey);
        if (localData) {
          const data = JSON.parse(localData);
          data.full_name = `${firstName} ${lastName}`;
          data.bio = bio;
          data.location = location ? location.label : "";
          data.image = selectedImage;
          window.localStorage.setItem(globalKey, JSON.stringify(data));
        }
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
        toastClassName="custom-toast-container"
      />
      <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0 z-10">
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
              style={{ display: "none" }}
              accept="image/*"
              ref={inputRef}
              onChange={(e) => {
                if (e.target.files !== null) {
                  const file = e.target.files[0]!;
                  getBase64(e.target.files[0])
                    .then((res) => {
                      setImage(file);
                      setSelectedImage(res as string);
                    })
                    .catch(() => {
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
          <div className="flex md:flex-col md:gap-6 gap-10 justify-between">
            <InputComponent
              width="w-full"
              label="First Name"
              value={firstName}
              type="text"
              placeholder="Enter Your First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputComponent
              width="w-full"
              label="Last Name"
              type="text"
              value={lastName}
              placeholder="Enter Your Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <InputComponent
            width="w-full"
            label="Bio"
            type="text"
            value={bio}
            placeholder="Enter Your Bio"
            onChange={(e) => setBio(e.target.value)}
          />
          <div className="w-full">
            <label className="text-brand text-[16px] font-cocogoose mb-2">
              Location
            </label>
            <Select
              options={countries}
              value={location}
              onChange={(option) => setLocation(option as SingleValue<CountryOption>)}
              placeholder="Select Your Location"
              className="text-black"
            />
          </div>
          <InputComponent
            width="w-full"
            label="Email"
            type="text"
            value={email}
            placeholder="example@mail.com"
            onChange={() => {}}
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