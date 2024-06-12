import { Modal } from "@mantine/core";
import React, { FC } from "react";

import Image from "next/image";
import { iMember } from "./types";
import { convertDate } from "@/functions/dateFunctions";


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
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default MemberModal;
