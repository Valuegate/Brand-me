"use client";

import React, {FC} from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';

interface iNavItem {
  name: string;
  link: string;
}

export type NavProp = {
  index: number
}

const NavBar:FC<NavProp> = ({index}) => {
  const navs: iNavItem[] = [
    {
      name: "About",
      link: "/about" 
    },
    {
      name: "Partners",
      link: "/partners" 
    },
    {
      name: "Results",
      link: "/results" 
    },
    {
      name: "Online Course",
      link: "/course" 
    },
    {
      name: "Contact",
      link: "/" 
    },
    {
      name: "How To Use",
      link: "/" 
    },
  ];

  return (
    <div className='w-full  bg-brand flex items-center justify-between justify-items-center px-12 border-none rounded-b-[40px]'>
        <div>
          <Logo />
        </div>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-10'>
            {
              navs.map((navItem, i) => {
                return (
                  <Link key={i} href={navItem.link} className={`${i === index ? "font-semibold" : "font-normal"} text-white text-[16px]`} >{navItem.name}</Link>
                );
              })
            }
          </div>
          <div className='flex gap-4'>
            <button className=''>
              <h5 className='text-white bg-brand-30 px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-normal'>
                Login
              </h5>
            </button>

            <button className=''>
              <h5 className='text-brand bg-light-blue px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-normal'>
                Sign Up
              </h5>
            </button>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
