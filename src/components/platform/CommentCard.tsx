import Image from 'next/image';
import React, { FC } from 'react';
import { PiPushPin } from 'react-icons/pi';
import Avatar from '@/assets/Ellipse_593.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Link from 'next/link';

interface iCommentCardProp {
    name: string;
    date: string;
    message: string;
    onLike: () => void;
  }

const CommentCard: FC<iCommentCardProp> = ({ name, date, message, onLike }) => {
    return (
        <>
            <div className='w-full border-none shadow-md rounded-lg'>
                <div className='flex justify-between px-4 py-4 rounded-t-lg bg-light-blue-30 text-black'>
                    <div className="flex gap-1 items-center">
                        <PiPushPin className='text-gray-10 h-5 w-5' />
                        <p className='text-lg font-cocogoose'>Pinned</p>
                    </div>
                    <p className='text-lg font-cocogoose'>Hide</p>
                </div>
                <div className="px-8 md:px-2 py-8">
                    <div className="flex items-center gap-3">
                        <Image src={Avatar} alt={''} width={50} height={50} />
                        <div>
                        <h2 className='text-black font-cocogoose text-lg'>{name}</h2>
                        <p className='text-base text-gray-10 font-semibold'>{date}</p>
                        </div>
                    </div>
                    <p className='text-black text-base md:text-[15px] font-cocogoose mt-4'>{message}</p>

                    <div className="flex items-center mt-5 md:flex-col justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                <ThumbUpIcon onClick={onLike} className='text-light-blue cursor-pointer'/>
                                <h4 className='text-gray-10 text-base'>28</h4>
                            </div>
                            <div className="flex gap-1">
                                <CommentIcon className='text-gray-10' />
                                <h4 className='text-gray-10 text-base'>28</h4>
                            </div>
                            <div className='flex items-center md:flex-col'>
                                <div className="flex items-center">
                                    <Image src={Avatar} alt={''} width={20} height={20} />
                                    <Image src={Avatar} alt={''} width={20} height={20} />
                                    <Image src={Avatar} alt={''} width={20} height={20} />
                                    <Image src={Avatar} alt={''} width={20} height={20} />
                                </div>
                                <h4 className='text-gray-10 text-base'>New comments 2 days ago</h4>
                            </div>
                        </div>
                        <Link href={''} className='md:mt-4'>
                        <h2 className='text-sm font-cocogoose text-light-blue'>View comments</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;
