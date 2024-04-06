import React from 'react';
import GroupCard from './GroupCard';
import MemberCard from './MemberCard';


const Members = () => {

    const member = [
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
        { name: 'Adedimeji Ajayi', email: '@dimeji', date: 'Feb 23, 2024', message: 'This class will give you all the insights for great and successful user reseah you will learn the basics of UX research and come up.' },
      ];

    return (
        <>
            <div className="flex gap-8 md:flex-col">
                <div className="w-[70%] md:w-full">
                    <div className="flex mb-10 gap-12 md:gap-3 items-center">
                        <button className='bg-brand rounded-2xl px-6 h-8 md:px-2 text-sm font-cocogoose text-white'>All</button>
                        <button className='border-none font-cocogoose-light text-lg md:text-[13px] text-black flex items-center justify-center gap-1'>Members <span className='font-cocogoose text-lg md:text-[1rem]'>200</span></button>
                        <button className='border-none font-cocogoose-light text-lg md:text-[13px] text-black flex items-center justify-center gap-1'>Admins <span className='font-cocogoose text-lg md:text-[1rem]'>38</span></button>
                        <button className='border-none font-cocogoose-light text-lg md:text-[13px] text-black flex items-center justify-center gap-1'>Online <span className='font-cocogoose text-lg md:text-[1rem]'>100</span></button>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {member.map((member, i) => {
                            return (
                                <MemberCard
                                    key={i}
                                    name={member.name}
                                    date={member.date}
                                    email={member.email}
                                    message={member.message}
                                />
                            );
                         })}
                    </div>

                </div>
                <div className="w-[30%] md:w-full">
                    <GroupCard />
                </div>
            </div>
        </>
    );
};

export default Members;