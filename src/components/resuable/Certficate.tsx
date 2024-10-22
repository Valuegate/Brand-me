"use client";

import React, { FC, useEffect } from 'react'

import Image from "next/image";
import Logo from "@/assets/brand-me-logo.png";

import Associa from "@/assets/VR.png";
import Vaev from "@/assets/VAEV.png";
import Indepcie from "@/assets/IN.png";
import Efektas from "@/assets/EFEK.png";
import Erasmus from "@/assets/ERAS.png";
import Innovation from "@/assets/IEL.png";
import CoFounded from "@/assets/CoFounded.png";
import { useGlobalStore } from '@/stores/globalStore';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const Certficate: FC<{ name: string, courseName: string, numberOfModules: number }> = ({ name, courseName, numberOfModules }) => {

  const shouldDownload = useGlobalStore((state) => state.downloadCertificate);

  const downloadCertficate = () => {
    const receiptElement = document.getElementById(
      "brand-me-certificate"
    ) as HTMLElement;

    if (receiptElement) {
      useGlobalStore.setState({ downloadCertificate: false });
      html2canvas(receiptElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 0.8);
        const pdf = new jsPDF({
          orientation: "l",
          unit: "px",
          format: [receiptElement.offsetWidth, receiptElement.offsetHeight],
        });
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          receiptElement.offsetWidth,
          receiptElement.offsetHeight
        );
        pdf.save(`BrandMe Completion Certificate.pdf`);
      });
    }
  };

  useEffect(() => {
    if (shouldDownload) {
      downloadCertficate();
    }
  }, [shouldDownload])

  return (
    <div id='brand-me-certificate' className='w-[900px] h-[640px] bg-[#1C274C] relative overflow-hidden font-cocogoose'>
      <div className='w-[1800px] h-[1280px] bg-custom-radial from-[#00AEEF33] to-[#1C274C33] absolute top-0 left-0' />
      <div className='w-full flex flex-col z-5 p-[20px]'>
        <Image src={Logo} alt='logo' className='w-[150px] h-auto object-cover' />
        <h1 className='px-[40px] text-[#00AEEF] text-center text-[60px] leading-[64px] font-bold'>Certficate Of Completion</h1>
        <h2 className='text-[#FFFFFFCC] font-bold text-center text-[24px] mt-5'>This certificate is offered to</h2>
        <h1 className='px-[40px] text-[#00AEEF] text-center text-[48px] leading-[52px] mt-5 font-bold'>{name}</h1>
        <p className='text-[#FFFFFFBF] font-cocogoose-light mt-10 px-[40px] text-center'>
          For completing &quot;BrandMe&quot; (<span className='font-bold'>{courseName}</span>)
          online course with <span className='font-bold'>{numberOfModules}</span> modules and
          successfully completing the evaluation test.
        </p>

        <div className='flex w-full justify-between items-center px-[40px]'>
          <Image
            src={CoFounded}
            alt={""}
            className="w-[110px] h-auto object-cover"
          />
          <Image
            src={Efektas}
            alt={"efektasLogo"}
            className="w-[110px] h-auto object-cover"
          />
          <Image
            src={Erasmus}
            alt={"erasmusLogo"}
            className="w-[110px] h-auto object-cover"
          />
          <Image
            src={Associa}
            alt={"associaLogo"}
            className="w-[70px] h-auto object-cover"
          />
          <Image
            src={Vaev}
            alt={"vaevLogo"}
            className="w-[70px] h-auto object-cover"
          />
          <div className='relative w-[60px]'>
            <Image
              src={Indepcie}
              alt={"IndecepieLogo"}
              className="w-full h-auto object-cover absolute -top-[75px] left-0"
            />
          </div>
          <Image
            src={Innovation}
            alt={"iELLogo"}
            className="w-[110px] h-auto object-cover"
          />

        </div>

        <p className='text-[#FFFFFFB2] mt-5 text-center text-[12px] leading-[12px] px-[40px]'>Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of
          the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA
          can be held responsible for them
        </p>
      </div>
    </div>
  )
}

export default Certficate