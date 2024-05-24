import React, { useState, useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import DropdownIcon from "@/icons/DropDownIcon";
import { convertDateWithSlashes } from "@/functions/dateFunctions";
import { iAdmin } from "./types";
import Image from "next/image";
import ProfileImage from "@/assets/ellipse609.png";
import { Loader } from "@mantine/core";

const Admins = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [admins, setAdmins] = useState<iAdmin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setAdmins(
      Array(9).fill({
        image: ProfileImage,
        name: " Alina Molchan",
        email: "alinamolchanMM@gmail.com",
        date: new Date(),
        online: true,
      })
    );
    setLoading(false);
  }, []);

  const viewAdmin = (val: number) => {
    setSelected(val);
    open();
  };

  return loading ? (
    <div className="w-full h-64 flex items-center justify-center">
      <Loader size={"36px"} />
    </div>
  ) : (
    <div className="bg-white shadow-custom rounded-lg">
      <div className="flex items-center justify-between font-cocogoose text-[16px] text-black px-5 py-5">
        <h2 className="w-[5%]">S/N</h2>
        <h2 className="w-[25%]">Admin Name</h2>
        <h2 className="w-[25%]">Email</h2>
        <h2 className="w-[20%]">Joined Date</h2>
        <h2 className="w-[10%]">Status</h2>
        <h2 className="w-[5%]">Actions</h2>
      </div>

      <div className="w-full flex flex-col md:hidden text-lg text-gray-10 px-5">
        {admins.map((admin, i) => {
          return (
            <div
              key={i}
              className={`flex justify-between w-full ${
                i % 2 === 1
              } h-[65px] items-center px-2`}
            >
              <h2 className="w-[5%] med-3 text-contrast-70">{i + 1}</h2>
              <div className="flex items-center gap-2 w-[25%] med-3 text-contrast-70 line-clamp-1">
                <Image
                  src={ProfileImage}
                  alt={""}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h2 className="">{admin.name}</h2>
              </div>
              <h2 className="w-[25%] med-3 text-contrast-70">{admin.email}</h2>
              <h2 className="w-[20%] med-3 text-contrast-70">
                {convertDateWithSlashes(admin.date)}
              </h2>
              <h2 className={`w-[10%] med-3`}>
                <div
                  className={`${
                    admin.online ? "text-green-100" : "text-gray-10"
                  } w-fit`}
                >
                  {admin.online ? "Online" : "Offline"}
                </div>
              </h2>
              <div className="w-[5%] med-3 text-contrast-70 flex justify-end cursor-pointer">
                <DropdownIcon
                  icon={<MdMoreVert size={"24px"} fill="#000000" />}
                  child={
                    <div className="flex flex-col shadow-custom bg-white rounded w-[180px] px-2 py-3">
                      <p
                        onClick={() => {
                          viewAdmin(i);
                        }}
                        className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300"
                      >
                        Deactivate
                      </p>
                      <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                        Delete
                      </p>
                    </div>
                  }
                  custom={`absolute ${
                    i + 2 >= admins.length ? "-top-8" : "top-8"
                  } -right-2 z-10`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admins;
