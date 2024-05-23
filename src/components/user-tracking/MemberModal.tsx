import { Modal } from "@mantine/core";
import React, { FC } from "react";

import Image from "next/image";
import { iMember } from './types';
import { IoMdClose } from 'react-icons/io';
import MemberImage from '@/assets/pp.png';
import Active from '@/assets/active.png';


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
        >
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Body>
                    {member !== null && (
                        <div className="px-10 py-6">
                            <div className="flex float-right">
                            <IoMdClose size={"26px"} onClick={close}  className="cursor-pointer"/>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <div className='my-5'>
                                    <Image src={MemberImage} alt={''} width={100} height={100} className='w-[100px] h-[100px] rounded-full relative' />
                                    <Image src={Active} alt={''} width={20} height={20} className='w-[20px] h-[20px] rounded-full absolute top-24 right-[182px]' />
                                </div>
                                <h2 className='text-lg font-cocogoose text-brand'>Alina Molchan</h2>
                                <p className='text-lg text-black'>alinamolchanMM@gmail.com</p>
                                <p className='text-base text-gray-10'>Joined <span className='text-black text-lg'>May 31, 2024</span></p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default MemberModal;