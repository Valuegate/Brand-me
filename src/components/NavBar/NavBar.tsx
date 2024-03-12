import React from 'react'
import Logo from '../Logo/Logo'

const NavBar = () => {
  return (
    <>
    <div className='w-full h-[166px] bg-brand-me flex items-center px-[105px]'>
        <div>
            <Logo />
        </div>
    </div>
    </>
  )
}

export default NavBar