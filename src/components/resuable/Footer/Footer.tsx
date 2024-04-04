import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/brandlogo2.png';
import Link from 'next/link';
import Associa from "@/assets/logo_vr_marketing.png";
import Vaev from "@/assets/VAEV_Logo.png";
import Indepcie from "@/assets/INDEPCIE.png";
import Efektas from "@/assets/Logo.png";
import Erasmus from "@/assets/Garage_erasmus_logo.png";
import Innovation from "@/assets/innovation_education_lab.png";

const Footer = () => {
  return (
    <>
    <div className='mt-32'>
      <div className='w-full bg-brand flex md:flex-col justify-between px-24 md:px-[5%] border-none rounded-t-[80px] md:rounded-t-[25px] pt-10 md:pt-5'>
        <Link href={"/"}>
          <Image src={Logo} alt={'Footer Logo'} className='w-[150px] md:w-[100px] h-auto' />
        </Link>
        <div className='flex md:w-full w-[40%] justify-between '>
        <div className='flex flex-col gap-2 pt-6'>
          <h5 className='text-white text-base font-cocogoose'>Learn More</h5>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={''}>For Whom</Link>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={'/about'}>Our Mission</Link>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={'/results'}>Results</Link>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={'/how-to-use'}>How To Use</Link>
        </div>

        <div className='flex flex-col gap-2 pt-6'>
          <h5 className='text-white text-base font-cocogoose'>Contacts</h5>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={'/contact'}>Contact Us</Link>
          <Link className='text-white-80 text-sm font-cocogoose-light font-bold' href={''}>Members</Link>
        </div>
        </div>



        <div className="flex md:flex-col gap-4 mt-6 md:mt-10 md:w-full md:mb-10">
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between'>
                <Image src={Associa} alt={'Associacao logo'} className='w-[70px] h-[40px]' />
                <Image src={Vaev} alt={'VAEV logo'} className='w-[70px] h-[40px]' />
                <Image src={Indepcie} alt={'Indepcie logo'} className='w-[70px] h-[40px]' />
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between'>
                <Image src={Efektas} alt={'Efektas logo'} className='w-[100px] h-[40px]'/>
                <Image src={Erasmus} alt={'Erasmus logo'} className='w-[100px] h-[40px]'/>
                <Image src={Innovation} alt={'Innovation lab logo'} className='w-[100px] h-[40px]' />
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
