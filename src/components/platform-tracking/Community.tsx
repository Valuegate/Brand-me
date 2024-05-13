import React, { useState } from 'react';
import Image from 'next/image';
import Msg from '@/assets/text.png';
import Satellite from '@/assets/satellite.png';
import Pin from '@/assets/pin.png';
import { HiUserCircle } from 'react-icons/hi';
import CommentCard from './CommentCard';
import ListIcon from '@/assets/List.png';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Pallet from '@/assets/Pallete.png';
import Link from 'next/link';


const Community = () => {
    const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const topics = [
        {
            id: 1,
            name: 'UI/UX Design',
            subTopics: [
                { name: 'Discussion', image: '/text.png', link: '/discussion' },
                { name: 'Random', image: '/satellite.png', link: '/random' },
                { name: 'Class', image: '/house.png', link: '/class' },
            ],
        },
        {
            id: 2,
            name: 'Front-end Development',
            subTopics: [
                { name: 'Discussion', image: '/text.png', link: '/discussion' },
                { name: 'Random', image: '/satellite.png', link: '/random' },
                { name: 'Class', image: '/house.png', link: '/class' },
            ],
        },
        {
            id: 3,
            name: 'Backend Development',
            subTopics: [
                { name: 'Discussion', image: '/text.png', link: '/discussion' },
                { name: 'Random', image: '/satellite.png', link: '/random' },
                { name: 'Class', image: '/house.png', link: '/class' },
            ],
        },
    ];

    const toggleOpen = (id: number) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleSubTopicClick = (subTopic: string) => {
        // Handle sub-topic click
    };

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
            <div className="flex md:flex-col gap-8">
                <div className="w-[30%] md:w-full">
                    <div className='border-none shadow-lg rounded-lg px-6 py-6'>
                        <div className="flex items-center justify-between mb-5">
                            <h2 className='text-lg font-cocogoose'>Channels</h2>
                            <div className="relative">
                                <Image src={ListIcon} alt={'List icon'} onClick={toggleMenu} className='cursor-pointer' />
                                {isMenuOpen && (
                                    <div className="absolute right-0 top-8 bg-white shadow-lg w-[12rem] rounded-lg px-4 py-6">
                                        <ul className='flex flex-col gap-3 text'>
                                            <div className="cursor-pointer hover:bg-brand hover:px-2 hover:py-2 hover:rounded-lg hover:text-white">
                                                <Link href={'#'}>All activity</Link>
                                            </div>
                                            <div className="cursor-pointer hover:bg-brand hover:px-2 hover:py-2 hover:rounded-lg hover:text-white">
                                                <Link href={'#'}>Unreads only</Link>
                                            </div>
                                            <div className="cursor-pointer hover:bg-brand hover:px-2 hover:py-2 hover:rounded-lg hover:text-white">
                                                <Link href={'#'}>Mention only</Link>
                                            </div>
                                            <div className="cursor-pointer hover:bg-brand hover:px-2 hover:py-2 hover:rounded-lg hover:text-white">
                                                <Link href={'#'}>Pinned messages</Link>
                                            </div>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className=" mb-5">
                            {topics.map((topic) => (
                                <div key={topic.id}>
                                    <div className="flex justify-between items-center mt-10" onClick={() => toggleOpen(topic.id)}>
                                        <div className="flex items-center gap-4">
                                            <Image src={Pallet} alt={''} />
                                            <span className='text-lg font-cocogoose cursor-pointer'>{topic.name}</span>
                                        </div>
                                        {isOpen[topic.id] ? <HiChevronUp /> : <HiChevronDown />}
                                    </div>
                                    {isOpen[topic.id] && (
                                        <div className="ml-10">
                                            {topic.subTopics.map((subTopic, index) => (
                                                <div key={index} className="mt-4" onClick={() => handleSubTopicClick(subTopic.name)}>
                                                    <Link className='flex items-center gap-3' href={subTopic.link}>
                                                        <Image src={subTopic.image} alt={subTopic.name} width={15} height={15} />
                                                        <span className=''>{subTopic.name}</span>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <hr className='text-gray' />
                        <div className="mt-5 flex flex-col items-center">
                            <button className='bg-brand text-white text-base rounded-lg justify-center px-14 h-10 items-center'>Create Channel</button>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] md:w-full">
                    <div className="relative z-0">
                        <input
                            className="w-full border-[1px] border-solid border-white shadow-sm rounded px-5 py-2 pl-10 focus:outline-none focus:border-gray"
                            type="text"
                            placeholder="Write something..."
                        />
                        <HiUserCircle className="absolute left-3 top-3 text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex my-10 gap-6 md:gap-2 items-center">
                        <button className='bg-brand rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-white'>All</button>
                        <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Msg} alt={'text icon'} width={15} height={15} className='w-50px h-10px' />Discussion</button>
                        <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Satellite} alt={'Satellite icon'} width={15} height={15} className='w-50px h-10px' />Random</button>
                        <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'><Image src={Pin} alt={'Pin icon'} width={15} height={15} className='w-50px h-10px' />Pinned</button>

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
            </div>
        </>
    );
};

export default Community;