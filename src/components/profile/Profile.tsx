"use client";

import React from 'react'
import NavBar from '../resuable/NavBar/NavBar'
import Footer from '../resuable/Footer/Footer'
import { useUserStore } from '@/stores/userStore'
import Image from 'next/image';
import Avatar from '@/assets/avatar.png'
import { BiStore } from 'react-icons/bi';
import { CloseIcon } from '@mantine/core';
import { BsClock } from 'react-icons/bs';
import { PiRobotFill } from 'react-icons/pi';
import Efektas from '@/assets/Efektas_white.png'
import Link from 'next/link';

const Profile = () => {
    const profileImage = useUserStore((state: { image: any; }) => state.image);
    const firstName = useUserStore((state: { firstName: any; }) => state.firstName);
    const surname = useUserStore((state: { surname: any; }) => state.surname);
    const alias = useUserStore((state: { alias: any; }) => state.alias);


  return (
    <>
     <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1}/>
      </div>
      <div className="h-32" />
        <div className='flex flex-col w-full mb-20 px-[10%]'>
          <div className="flex justify-between mb-6">
            <div className='flex flex-col gap-4'>
              <div className="bg-light-blue-30 px-8 py-4 rounded-2xl">
                <div className="flex gap-8 items-center">
                <div>
                  <Image src={Avatar} alt={''} className='w-[200px] h-[200px]' />
                </div>
                <div className='flex flex-col gap-12'>
                  <span>
                  <h2 className='text-brand text-[25px] leading-[20px] font-cocogoose mb-2'>Alina Molchan</h2>
                  <p className='text-brand text-[12px] leading-[13px] font-cocogoose mb-2'>@alinamolchanMM</p>
                  <div className="flex items-center gap-1">
                    <BiStore />
                    <p className='text-brand text-[12px] leading-[13px] font-cocogoose'>NLP Trainer</p>
                  </div>
                  </span>
                  <Link href={'/settings'}>
                  <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                Edit Profile
              </button>
              </Link>
                </div>
                </div>

                <div className='mt-10'>
                  <span className='flex items-center gap-1'>
                    <BsClock />
                    <p className='text-brand text-[15px] leading-[15px] font-cocogoose-light'>Active <strong>41</strong> min ago</p>
                  </span>
                  <span className='flex items-center gap-1 mt-2'>
                    <PiRobotFill />
                    <p className='text-brand text-[15px] leading-[15px] font-cocogoose-light'>Joined May <strong>31,2023</strong></p>
                  </span>
                </div>
              </div>

              <div className="bg-light-blue-30 px-8 py-4 rounded-2xl">
              <h2 className='text-brand text-[25px] leading-[20px] font-cocogoose mb-2'>Membership</h2>
              <div className="flex items-center gap-2">
                <div className='bg-brand px-2 py-2 rounded-xl'>
                  <Image src={Efektas} alt={''} className='w-[50px] h-[50px]' />
                </div>
                <div>
                <p className='text-brand text-[15px] leading-[15px] font-cocogoose-light'>Efektas Group</p>
                <p className='text-brand text-[15px] leading-[15px] font-cocogoose-light mt-3'>Private <strong>180</strong>members</p>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-light-blue-30 px-8 py-4 rounded-2xl">
            <h2 className='text-brand text-[25px] leading-[20px] font-cocogoose mb-2'>My Courses Statistics</h2>
            <div className='mt-4'>
              <div className="flex gap-8 flex-col mx-4">
                <div>
                <p className='text-brand text-[20px] leading-[20px] font-cocogoose mb-2'>Foundation Course</p>
                <div>
                  <button className='bg-brand rounded-xl w-full h-10 text-white'>20%</button>
                </div>
                </div>

                <div>
                <p className='text-brand text-[20px] leading-[20px] font-cocogoose mb-2'>Foundation Course</p>
                <div>
                  <button className='bg-brand rounded-xl w-full h-10 text-white'>70%</button>
                </div>
                </div>

                <div>
                <p className='text-brand text-[20px] leading-[20px] font-cocogoose mb-2'>Foundation Course</p>
                <div>
                  <button className='bg-brand rounded-xl w-full h-10 text-white'>20%</button>
                </div>
                </div>

                <div>
                <p className='text-brand text-[20px] leading-[20px] font-cocogoose mb-2'>Foundation Course</p>
                <div>
                  <button className='bg-brand rounded-xl w-full h-10 text-white'>70%</button>
                </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-light-blue-30 px-8 py-4 rounded-2xl">
          <h2 className='text-brand text-[25px] leading-[20px] font-cocogoose mb-2'>My Weekly Activity</h2>

          <div className="mt-8">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>MON</h2>
              <span className='w-20 h-6 bg-brand-20 rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>TUE</h2>
              <span className='w-20 h-6 bg-brand-20 rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>WED</h2>
              <span className='w-20 h-6 bg-brand rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>THU</h2>
              <span className='w-20 h-6 bg-brand-20 rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>FRI</h2>
              <span className='w-20 h-6 bg-brand rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>SAT</h2>
              <span className='w-20 h-6 bg-brand rounded-2xl'></span>
              </div>

              <div className="flex flex-col gap-2 items-center">
              <h2 className='text-brand text-[18px] leading-[10px] font-cocogoose mb-1'>SUN</h2>
              <span className='w-20 h-6 bg-brand rounded-2xl'></span>
              </div>
            </div>
          </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Profile