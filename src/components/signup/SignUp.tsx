"use client";
import React from 'react'
import NavBar from '../resuable/NavBar/NavBar'
import Footer from '../resuable/Footer/Footer'
import Link from 'next/link';
import { TbMessage } from 'react-icons/tb';
import { GiPadlock } from 'react-icons/gi';

const SignUp = () => {

  return (
    <>
     <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1}/>
      </div><div className="h-32" />
      <div className="px-32">=

        <div className="mt-16 bg-light-blue border-none rounded-3xl">
            <div className='px-[16rem] py-[2rem]'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className='text-brand text-[30px] leading-[21.8px] font-cocogoose'>Sign Up</h2>
                    <Link className='text-brand text-[20px] underline leading-[15px] font-cocogoose' href={'/signup'}>Log In</Link>
                </div>
                <div className="flex items-center gap-8">
                    <div className='mt-8'><TbMessage className='w-[50px] h-[50px]' /></div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-brand font-cocogoose-light font-bold text-lg"
          >
            Email
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-brand rounded-lg bg-light-blue h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
                </div>

                <div className="flex items-center gap-8 mt-4">
                    <div className='mt-8'><GiPadlock className='w-[50px] h-[50px]' /></div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-brand font-cocogoose-light font-bold text-lg"
          >
            Password
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-brand rounded-lg bg-light-blue h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
                </div>

                <div className="flex items-center gap-8 mt-4">
                    <div className='mt-8'><GiPadlock className='w-[50px] h-[50px]' /></div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-brand font-cocogoose-light font-bold text-lg"
          >
            First Name
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-brand rounded-lg bg-light-blue h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
                </div>

                <div className="flex items-center gap-8 mt-4">
                    <div className='mt-8'><GiPadlock className='w-[50px] h-[50px]' /></div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            className="text-brand font-cocogoose-light font-bold text-lg"
          >
            Last Name
          </label>
          <input
            type="text"
            className="w-full focus:outline-none border-2 border-brand rounded-lg bg-light-blue h-16 text-white font-cocogoose-light pl-4 font-bold"
          />
        </div>
                </div>

                <div className='flex items-center justify-center mt-8'>
            <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
              Sign Up
            </button>
                </div>
            </div>
        </div>

        </div>
      <Footer />
    </>
  )
}

export default SignUp;