'use client';
import NavBar from '@/components/resuable/NavBar/NavBar';
import Image from 'next/image';
import React from 'react';
import Innovation from '@/assets/innovation_education_lab2.png';
import Efektas from '@/assets/Logotype_Efektas_Red.png';
import Erasmus from '@/assets/Garage_erasmus_logo1.png';
import Indepcie from '@/assets/logo INDEPCIE vectorizado2.png';
import Vaev from '@/assets/VAEV_Logo-removebg-preview2.png';
import Footer from '@/components/resuable/Footer/Footer';

const Partners = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={1} />
      </div>
      <div className="h-32" />
      <div className='px-32'>
          <div className='mt-16'>
            <h1 className='text-4xl text-black font-extrabold'>
              Project Partners <br /> of BRAND ME
            </h1>
          </div>
          <section className='mt-10 bg-brand-30 border-none rounded-3xl'>
            <div className='pl-10 pt-[2rem] pb-[3rem]'>
              <div className='flex items-center gap-8 pb-4'>
                <Image
                  src={Innovation}
                  alt={''}
                  className='w-[150px] h-[40px]'
                />
                <span className='text-black text-lg font-bold'>
                  Innovation Education Lab (iEL)
                </span>
              </div>
              <p className='w-[80%] pb-8 text-base text-black font-medium'>
                Mission: Supporting young people, education activities,
                innovation in education and training, and encouraging
                volunteering. Comprises experienced project managers, youth
                workers, facilitators, and creative professionals with a mission
                to create innovation, empowerment, participation, inclusion, and
                social entrepreneurship among disadvantaged youth.
              </p>
              <button className='text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-bold'>
                Learn More
              </button>
            </div>
          </section>

          <section className='mt-10 bg-brand-30 border-none rounded-3xl'>
            <div className='pl-10 pt-[2rem] pb-[3rem]'>
              <div className='flex items-center gap-8 pb-4'>
                <Image src={Efektas} alt={''} className='w-[150px] h-[40px]' />
                <span className='text-black text-lg font-bold'>
                  Efektas Group
                </span>
              </div>
              <p className='w-[80%] pb-8 text-base text-black font-medium'>
                A Lithuanian education & training organization focusing on
                personal-professional development since 2016. Expertise in
                developing soft skills through various educational
                methodologies, tools, and approaches. Aims to educate local and
                international individuals and organizations using coaching,
                non-formal learning, applied neuroscience, applied psychology,
                and innovative instruments.
              </p>
              <button className='text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-bold'>
                Learn More
              </button>
            </div>
          </section>

          <section className='mt-10 bg-brand-30 border-none rounded-3xl'>
            <div className='pl-10 pt-[2rem] pb-[3rem]'>
              <div className='flex items-center gap-8 pb-4'>
                <Image src={Erasmus} alt={''} className='w-[150px] h-[40px]' />
                <span className='text-black text-lg font-bold'>
                  garagErasmus Foundation (gE)
                </span>
              </div>
              <p className='w-[80%] pb-8 text-base text-black font-medium'>
                Established in 2012 as the first professional network of the
                Erasmus Generation, in coordination with the European
                Commission. Aims to create a stronger Europe through and with
                the Erasmus Generation, with a focus on youth employment,
                valorization of soft skills, non-formal education, and
                inter-generational capacity building among alumni.
              </p>
              <button className='text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-bold'>
                Learn More
              </button>
            </div>
          </section>

          <section className='mt-10 bg-brand-30 border-none rounded-3xl'>
            <div className='pl-10 pt-[2rem] pb-[3rem]'>
              <div className='flex items-center gap-8 pb-4'>
                <Image src={Indepcie} alt={''} className='w-[100px] h-[40px]' />
                <div>
                  <span className='text-black text-lg font-bold'>INDEPCIE</span>
                  <p className='text-base font-medium text-black'>
                    (Institute for the personal development,<br/> entrepreneurship,
                    coaching and Emotional Intelligence)
                  </p>
                </div>
              </div>
              <p className='w-[80%] pb-8 text-base text-black font-medium'>
                Founded in 2018, focused on attitudinal training and improvement
                of human performance through coaching, Emotional Intelligence,
                soft skills, and Neuro Linguistic Programming (NLP). Specializes
                in developing techniques and strategies for individuals and
                organizations to achieve continuous improvement.
              </p>
              <button className='text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-bold'>
                Learn More
              </button>
            </div>
          </section>

          <section className='mt-10 bg-brand-30 border-none rounded-3xl'>
            <div className='pl-10 pt-[2rem] pb-[3rem]'>
              <div className='flex items-center gap-8 pb-4'>
                <Image src={Vaev} alt={''} className='w-[150px] h-[40px]' />
                <span className='text-black text-lg font-bold'>
                  Innovation Education Lab (iEL)
                </span>
              </div>
              <p className='w-[80%] pb-8 text-base text-black font-medium'>
                A non-profit, non-political organization aiming to empower
                people, promote peace, tolerance, and social equality through
                assisting individuals in acquiring knowledge and developing
                skills for professional and personal success. Focuses on
                providing community-based coaching, educational, and career
                opportunities for disadvantaged people, including immigrants,
                refugees, unemployed individuals, NEETs, and those from lower
                socio-economic backgrounds and with disabilities
              </p>
              <button className='text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-bold'>
                Learn More
              </button>
            </div>
          </section>
        </div>
        <Footer />
    </>
  );
};

export default Partners;
