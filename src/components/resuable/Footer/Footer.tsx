import Image from "next/image";
import React from "react";
import Logo from "@/assets/brandlogo2.png";
import Link from "next/link";
import Associa from "@/assets/VR.png";
import Vaev from "@/assets/VAEV.png";
import Indepcie from "@/assets/IN.jpg";
import Efektas from "@/assets/EFEK.png";
import Erasmus from "@/assets/ERAS.png";
import Innovation from "@/assets/IEL.png";

// ADD WHITE LOGOS FOR PARTNERS AND LINK TO THEM

const Footer = () => {
  return (
    <>
      <div className="mt-32">
        <div className="w-full bg-brand flex md:flex-col justify-between px-24 md:px-[5%] border-none rounded-t-[80px] md:rounded-t-[25px] pt-10 md:pt-5">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt={"Footer Logo"}
              className="w-[150px] md:w-[100px] h-auto"
            />
          </Link>
          <div className="flex md:w-full w-[30%] justify-between ">
            <div className="flex flex-col gap-2 pt-6">
              <h5 className="text-white text-base font-cocogoose">
                Learn More
              </h5>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={""}
              >
                For Whom
              </Link>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={"/about"}
              >
                Our Mission
              </Link>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={"/results"}
              >
                Results
              </Link>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={"/how-to-use"}
              >
                How To Use
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-6">
              <h5 className="text-white text-base font-cocogoose">Contacts</h5>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={"/contact"}
              >
                Contact Us
              </Link>
              <Link
                className="text-white-80 text-sm font-cocogoose-light font-bold"
                href={""}
              >
                Members
              </Link>
            </div>
          </div>

          <div className="w-[20%] flex flex-col gap-4 mt-6 items-start justify-between md:mt-10 md:w-full md:mb-10">
            <div className="flex justify-between w-full items-center">
              <Link href={"https://vrmarketing.pt/"} target="__blank">
                <Image
                  src={Associa}
                  alt={"Associacao logo"}
                  className="w-[70px] h-auto object-cover"
                />
              </Link>
              <Link href={"https://efektasgroup.com/"} target="__blank">
                <Image
                  src={Efektas}
                  alt={"Efektas logo"}
                  className="w-[100px] h-auto object-cover"
                />
              </Link>
            </div>

            <div className="flex justify-between w-full items-center">
              <Link href={"https://euresearch.at/"} target="__blank">
                <Image
                  src={Vaev}
                  alt={"VAEV logo"}
                  className="w-[70px] h-auto object-cover"
                />
              </Link>
              <Link href={"https://garagerasmus.org/"} target="__blank">
                <Image
                  src={Erasmus}
                  alt={"Erasmus logo"}
                  className="w-[100px] h-auto object-cover"
                />
              </Link>
            </div>

            <div className="flex justify-between w-full items-center">
              <Link href={"https://indepcie.com/"} target="__blank">
                <Image
                  src={Indepcie}
                  alt={"Indepcie logo"}
                  className="w-[70px] h-auto object-cover"
                />
              </Link>
              <Link href={"https://innoedulab.eu/en/"} target="__blank">
                <Image
                  src={Innovation}
                  alt={"Innovation lab logo"}
                  className="w-[100px] h-auto object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
