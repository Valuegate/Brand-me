import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className='w-full bg-brand flex items-center justify-between  justify-items-center px-12 border-none rounded-b-[40px]'>
        <div>
          <Logo />
        </div>
        <div className='flex items-center gap-12'>
          <div className='flex items-center list-none text-white gap-10'>
            <Link href={'/about'}>About</Link>
            <Link href={'/partners'}>Partners</Link>
            <Link href={''}>Results</Link>
            <Link href={''}>Online Course</Link>
            <Link href={''}>Contact</Link>
            <Link href={''}>How To Use</Link>
          </div>
          <div className='flex gap-4'>
            <button className=''>
              <h5 className='text-white bg-brand-30 px-5 py-2 rounded-lg text-[20px] font-medium'>
                Login
              </h5>
            </button>

            <button className=''>
              <h5 className='text-brand bg-light-blue px-5 py-2 rounded-lg text-[20px] font-medium'>
                Sign Up
              </h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
