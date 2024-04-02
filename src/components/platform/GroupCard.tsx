import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { GiPadlock } from 'react-icons/gi';
import ProfileImg from '@/assets/Rectangle_2001.png';
import Image from 'next/image';


const GroupCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <Image
                    src={ProfileImg}
                    alt=""
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        backgroundColor: 'var(--gray-5)',
                    }}
                />
                <CardContent>
                    <h2 className='text-black font-cocogoose text-lg'>Brand Me</h2>
                    <div className='flex gap-1 items-center'>
                        <GiPadlock className='text-gray-10' />
                        <p className='text-base text-gray-10'>Private Group</p>
                    </div>
                    <p className='text-base text-black'>This class will give you all the insights.</p>
                    <div className='mt-5'>
                        <hr className='text-gray-10' />
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <div className="flex flex-col items-center">
                            <h2 className='text-black font-cocogoose text-lg'>20k</h2>
                            <p className='text-base text-gray-10'>Members</p>
                        </div>
                        <div className='bg-gray-10 h-10 w-[2px]'></div>
                        <div className="flex flex-col items-center">
                            <h2 className='text-black font-cocogoose text-lg'>10</h2>
                            <p className='text-base text-gray-10'>Tutors</p>
                        </div>
                        <div className='bg-gray-10 h-10 w-[2px]'></div>
                        <div className="flex flex-col items-center">
                            <h2 className='text-black font-cocogoose text-lg'>1000</h2>
                            <p className='text-base text-gray-10'>Lessons</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default GroupCard;