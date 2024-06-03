import { Modal } from "@mantine/core";
import React, { FC } from "react";

import Image from "next/image";
import { iMember } from "./types";
import MemberImage from "@/assets/pp.png";
import Active from "@/assets/active.png";
import { convertDate } from "@/functions/dateFunctions";
import ProgressBar from "../resuable/ProgressBar";
import { MdDone } from "react-icons/md";

const MemberModal: FC<{
  opened: boolean;
  close: () => void;
  member: iMember | null;
}> = ({ opened, close, member }) => {
  return (
    <Modal.Root
      padding={"0px"}
      top={"0px"}
      opened={opened}
      centered
      onClose={close}
      size={"35vw"}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body>
          {member !== null && (
            <div className="flex justify-center items-center flex-col px-10 py-6">
              <div className="my-5 relative">
                <Image
                  src={member.image}
                  alt={""}
                  width={100}
                  height={100}
                  className="size-[100px] rounded-full"
                />
                {member.online && (
                  <Image
                    src={Active}
                    alt={""}
                    width={20}
                    height={20}
                    className="size-5 rounded-full absolute bottom-0 right-0"
                  />
                )}
              </div>
              <h2 className="text-lg font-cocogoose text-brand">
                {member.name}
              </h2>
              <p className="text-lg text-black">{member.email}</p>
              <p className="text-lg text-gray-10">
                Joined{" "}
                <span className="text-black text-lg">
                  {convertDate(member.date)}
                </span>
              </p>
              <div className="w-full bg-light-blue-30 mt-10 rounded flex flex-col p-5">
                <h2 className="text-brand text-[18px] font-cocogoose">
                  Courses Statistics
                </h2>
                <div className="mt-5 flex flex-col w-full">
                  <div className="flex w-full justify-between items-center">
                    <p className="font-cocogoose-light font-bold text-[16px] text-brand">
                      Foundation Course
                    </p>
                    <p
                      className={`font-cocogoose-light font-bold text-[16px] ${"text-error"}`}
                    >
                      30%
                    </p>
                  </div>
                  <ProgressBar
                    removeMargin={true}
                    valueColor="bg-brand"
                    backgroundColor="bg-brand-49"
                    value={0.3}
                    hideText={true}
                    text=""
                    height="h-3"
                  />
                </div>
                <div className="mt-5 flex flex-col w-full">
                  <div className="flex w-full justify-between items-center">
                    <p className="font-cocogoose-light font-bold text-[16px] text-brand">
                      UI/UX Course
                    </p>
                    <p
                      className={`font-cocogoose-light font-bold text-[16px] ${"text-role-orange"}`}
                    >
                      50%
                    </p>
                  </div>
                  <ProgressBar
                    removeMargin={true}
                    valueColor="bg-brand"
                    backgroundColor="bg-brand-49"
                    value={0.5}
                    hideText={true}
                    text=""
                    height="h-3"
                  />
                </div>
                <div className="mt-5 flex flex-col w-full">
                  <div className="flex w-full justify-between items-center">
                    <p className="font-cocogoose-light font-bold text-[16px] text-brand">
                      Frontend Development Course
                    </p>
                    <p
                      className={`font-cocogoose-light font-bold text-[16px] ${"text-green-100"}`}
                    >
                      90%
                    </p>
                  </div>
                  <ProgressBar
                    removeMargin={true}
                    valueColor="bg-brand"
                    backgroundColor="bg-brand-49"
                    value={0.9}
                    hideText={true}
                    text=""
                    height="h-3"
                  />
                </div>
              </div>
              <div className="w-full bg-light-blue-30 mt-10 rounded flex flex-col p-5">
                <h2 className="text-brand text-[18px] font-cocogoose">
                  Weekly Activity
                </h2>

                <div className="mt-5 flex justify-between">
                  {["MON", "TUE", "WED", "THR", "FRI", "SAT", "SUN"].map(
                    (day, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center justify-around bg-white rounded w-[12%] h-[60px]"
                        >
                          <p className="text-brand text-[16px] font-cocogoose-light font-bold">
                            {day}
                          </p>
                          <div className="size-5 bg-brand text-white flex justify-center items-center rounded">
                            <MdDone size={"16px"} fill="#FFFFFF" />
                          </div>
                        </div>
                        // </div>//
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default MemberModal;
