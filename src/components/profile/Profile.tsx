"use client";

import React from 'react'
import NavBar from '../resuable/NavBar/NavBar'
import Footer from '../resuable/Footer/Footer'

import { useUserStore } from '@/stores/userStore'

const Profile = () => {
    const profileImage = useUserStore((state) => state.image);
    const firstName = useUserStore((state) => state.firstName);
    const surname = useUserStore((state) => state.surname);
    const alias = useUserStore((state) => state.alias);


  return (
    <>
     <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1}/>
      </div>
      <div className="h-32" />
        <div className='flex flex-col w-full mb-20 px-[10%]'>

        </div>
      <Footer />
    </>
  )
}

export default Profile