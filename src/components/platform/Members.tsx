import React from 'react';
import GroupCard from './GroupCard';
import { IoIosArrowRoundBack } from "react-icons/io";


const Members = () => {
    return (
        <>
            <div className="flex gap-8">
                <div className="w-[70%]">
                    <div
                        className="flex items-center gap-2 text-light-blue font-cocogoose-light font-bold text-[18px] cursor-pointer"
                        onClick={() => { }}
                    >
                        <IoIosArrowRoundBack size={"30px"} />
                        <p>Back</p>
                    </div>

                </div>
                <div className="w-[30%]">
                    <GroupCard />
                </div>
            </div>
        </>
    );
};

export default Members;