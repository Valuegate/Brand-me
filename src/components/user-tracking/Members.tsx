import React, { useState, useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import DropdownIcon from "@/icons/DropDownIcon";
import { convertDate } from "@/functions/dateFunctions";
import Image from "next/image";
import ProfileImage from "@/assets/ellipse609.png";
import { iMember } from "./types";
import { useDisclosure } from "@mantine/hooks";
import MemberModal from "./MemberModal";
import { Loader } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getAllUsers from "@/hooks/queries/useGetAllUsers";
import { globalKey } from "@/stores/globalStore";

const Members = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [opened, { open, close }] = useDisclosure(false);
  const [members, setMembers] = useState<iMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    setLoading(true);

    getAllUsers(
      token,
      (res: any) => {
        let data = res.data.map((us: any, i: number) => {
          return {
            id: us.id,
            email: us.email,
            name: `${us.first_name} ${us.last_name}`,
            image: us.image === null ? ProfileImage : us.image,
            date: new Date(us.date_joined),
          };
        });

        setMembers(data);
        setLoading(false)
      },
      (err: any) => {
        toast.error("An error occurred. Please try again");
        setLoading(false);
      }
    );
  }

  const viewMember = (val: number) => {
    setSelected(val);
    open();
  };

  return loading ? (
    <div className="w-full h-64 flex items-center justify-center">
      <Loader size={"36px"} />
    </div>
  ) : (
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
      {members.length > 0 ? (
        <>
          <div className="flex items-center justify-between font-cocogoose text-[16px] text-black px-5 py-5">
            <h2 className="w-[5%]">S/N</h2>
            <h2 className="w-[25%]">Member Name</h2>
            <h2 className="w-[25%]">Email</h2>

            <h2 className="w-[20%]">Joined Date</h2>

            <h2 className="w-[5%]">Actions</h2>
          </div>
          <div className="w-full flex flex-col md:hidden text-lg text-gray-10 px-5">
            {members.map((member, i) => {
              return (
                <div
                  key={i}
                  className={`flex w-full justify-between ${
                    i % 2 === 1
                  } h-[65px] items-center`}
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
                    <h2 className="">{member.name}</h2>
                  </div>
                  <h2 className="w-[25%] med-3 text-contrast-70">
                    {member.email}
                  </h2>

                  <h2 className="w-[20%] med-3 text-contrast-70">
                    {convertDate(member.date)}
                  </h2>

                  <div className="w-[5%] med-3 text-contrast-70 flex justify-end cursor-pointer">
                    <DropdownIcon
                      icon={<MdMoreVert size={"24px"} fill="#000000" />}
                      child={
                        <div className="flex flex-col shadow-custom bg-white rounded w-[180px] px-2 py-3">
                          <p
                            onClick={() => {
                              viewMember(i);
                            }}
                            className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300"
                          >
                            View Profile
                          </p>
                          <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                            Deactivate
                          </p>
                          <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                            Delete
                          </p>
                        </div>
                      }
                      custom={`absolute ${
                        i + 2 >= members.length ? "-top-8" : "top-8"
                      } -right-2 z-10`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </> 
      ) : (
        <div className="text-brand text-[24px] w-full h-[40vh] flex justify-center items-center font-cocogoose">
          An error occurred. Please refresh the page
        </div>
      )}
      <MemberModal
        opened={opened}
        close={close}
        member={selected === -1 ? null : members[selected]}
      />
    </>
  );
};

export default Members;
