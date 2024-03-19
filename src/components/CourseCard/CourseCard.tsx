import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

export type iCourseCard = {
    image: StaticImageData;
    text: string;
  };

const CourseCard: FC<iCourseCard> = ({ image, text }) => {
    return (
        <>
        <div className='bg-light-blue-30 text-black py-4 px-8 rounded-3xl'>
            <div className="flex items-center gap-4">
                <div className='bg-light-blue rounded-xl px-2 py-2'>
                    <Image src={image} alt={''} width={100} height={100} className="w-[50px] h-[50px]"/>
                </div>
                <div>
                    <p className='text-base text-black font-medium w-[30rem]'>{text}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default CourseCard;