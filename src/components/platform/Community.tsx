import React from 'react';

import Image from 'next/image';
import Msg from '@/assets/text.png';
import Satellite from '@/assets/satellite.png';
import Pin from '@/assets/pin.png';
import { HiUserCircle } from 'react-icons/hi';
import CommentCard from './CommentCard';
import GroupCard from './GroupCard';


const Community = () => {

    const comments = [
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
      ];

    return (
        <>
            <div className="flex gap-8">
                <div className="w-[70%]">
                    <div className="relative z-0">
                        <input
                            className="w-full border-[1px] border-solid border-white shadow-sm rounded px-5 py-2 pl-10 focus:outline-none focus:border-gray"
                            type="text"
                            placeholder="Write something..."
                        />
                        <HiUserCircle className="absolute left-3 top-3 text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex my-10 gap-6 items-center">
                        <button className='bg-brand rounded-2xl px-6 h-8 font-cocogoose text-white'>All</button>
                        <button className='bg-gray rounded-2xl px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Msg} alt={'text icon'} width={15} height={15} className='w-50px h-10px' />Discussion</button>
                        <button className='bg-gray rounded-2xl px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Satellite} alt={'Satellite icon'} width={15} height={15} className='w-50px h-10px' />Random</button>
                        <button className='bg-gray rounded-2xl px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Pin} alt={'Pin icon'} width={15} height={15} className='w-50px h-10px' />Pinned</button>

                    </div>

                    <div className='flex flex-col gap-4'>
                        {comments.map((comment, i) => {
                            return (
                                <CommentCard
                                    key={i}
                                    name={comment.name}
                                    date={comment.date}
                                    message={comment.message}
                                />
                            );
                        })}
                    </div>

                </div>
                <div className="w-[30%]">
                    <GroupCard />
                </div>
            </div>
        </>
    );
};

export default Community;