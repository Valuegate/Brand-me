import Image from 'next/image';
import React, { FC } from 'react';
import Avatar from '@/assets/Ellipse_593.png';
import { BiCalendar } from 'react-icons/bi';

interface iMemberCardProp {
    name: string;
    date: string;
    message: string;
    email: string;
}

const MemberCard: FC<iMemberCardProp> = ({ name, date, message, email }) => {
    return (
        <>
        <div>
            <div className="flex justify-between md:flex-col md:gap-3 items-center">
                <div className="flex items-center gap-3">
                    <Image src={Avatar} alt={''} width={50} height={50} />
                    <div>
                        <h2 className='text-black font-cocogoose text-lg'>{name}</h2>
                        <p className='text-base text-gray-10 font-semibold'>{email}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-gray-10 text-base font-cocogoose">
                    <span className='flex items-center gap-1'> <BiCalendar /> Joined</span>
                    <span>{date}</span>
                </div>
            </div>
            <p className='text-black text-lg font-semibold mt-4'>{message}</p>
            </div>
        </>
    )
}

export default MemberCard;