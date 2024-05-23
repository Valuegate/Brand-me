import React, { useState } from "react";
import { MdMoreVert } from 'react-icons/md';
import DropdownIcon from '@/icons/DropDownIcon';
import { convertDateWithSlashes } from '@/functions/dateFunctions';
import Image from 'next/image';
import ProfileImage from '@/assets/ellipse609.png';
import { iMember } from './types';
import { useDisclosure } from '@mantine/hooks';
import MemberModal from './MemberModal';

const Members = () => {
    const [selected, setSelected] = useState<number>(-1);
    const [opened, { open, close }] = useDisclosure(false);

    const members: iMember[] = [
        {
            sn: "01",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Online",
        },
        {
            sn: "02",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Offline",
        },
        {
            sn: "03",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Online",
        },
        {
            sn: "04",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Offline",
        },
        {
            sn: "05",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Online",
        },
        {
            sn: "06",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Offline",
        },
        {
            sn: "07",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Online",
        },
        {
            sn: "08",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Offline",
        },
        {
            sn: "09",
            name: " Alina Molchan",
            email: "alinamolchanMM@gmail.com",
            courses: 4,
            date: new Date(),
            status: "Online",
        },
    ];

    const viewMember = (val: number) => {
        setSelected(val);
        open();
    };


    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-16 text-black font-cocogoose text-lg">
                    <h2>S/N</h2>
                    <h2>Admin Name</h2>
                </div>
                <h2 className='text-black font-cocogoose text-lg'>Email</h2>
                <div className="flex gap-14 text-black font-cocogoose text-lg">
                    <h2>Courses</h2>
                    <h2>Joined Date</h2>
                    <h2>Status</h2>
                    <h2>Actions</h2>
                </div>
            </div>
            <div className="w-full flex flex-col md:hidden text-lg text-gray-10">
                {members.map((member, i) => {
                    return (
                        <div
                            key={i}
                            className={`flex w-full ${i % 2 === 1
                                } h-[65px] items-center px-2`}
                        >
                            <h2 className="w-[8%] med-3 text-contrast-70">
                                {member.sn}
                            </h2>
                            <div className="flex items-center gap-2 w-[30%] med-3 text-contrast-70 line-clamp-1">
                                <Image src={ProfileImage} alt={''} width={30} height={30} className='w-[30px] h-[30px] rounded-full' />
                                <h2 className="">
                                    {member.name}
                                </h2>
                            </div>
                            <h2 className="w-[30%] med-3 text-contrast-70">
                                {member.email}
                            </h2>
                            <h2 className="w-[10%] med-3 text-contrast-70">
                                {member.courses}
                            </h2>
                            <h2 className="w-[20%] med-3 text-contrast-70">
                                {convertDateWithSlashes(member.date)}
                            </h2>
                            <h2 className={`w-[12%] med-3`}>
                                <div
                                    className={`${member.status === "Online"
                                        ? "text-green-100"
                                        : member.status === "Offline"
                                            ? "text-gray-10"
                                            : "text-gray-10"
                                        } w-fit`}
                                >
                                    {member.status}
                                </div>
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
                                            </p><p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                                                Delete
                                            </p>
                                        </div>
                                    }
                                    custom={`absolute ${i + 2 >= members.length ? "-top-8" : "top-8"
                                        } -right-2 z-10`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <MemberModal
                opened={opened}
                close={close}
                member={selected === -1 ? null : members[selected]}
            />
        </>
    )
}

export default Members;