import React, { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import MapImage from "@/assets/contact/map.svg";

import Innovation from "@/assets/innovation_education_lab2.png";
import Efektas from "@/assets/Logotype_Efektas_Red.png";
import Erasmus from "@/assets/Garage_erasmus_logo1.png";
import Indepcie from "@/assets/logo INDEPCIE vectorizado2.png";
import Vaev from "@/assets/VAEV_Logo-removebg-preview2.png";
import XOS from "@/assets/XOS.png";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface iPartner {
  image: StaticImageData;
  email: string;
}

const Map = () => {
  const { t } = useTranslation();
  const partners: iPartner[] = [
    {
      image: Innovation,
      email: "innedulab@gmail.com",
    },
    {
      image: Efektas,
      email: "info@efektasgroup.com",
    },
    {
      image: Erasmus,
      email: "nunzia.difrancesco@\ngaragerasmus.org",
    },
    {
      image: Indepcie,
      email: "josecarlos@indepcie.com",
    },
    {
      image: Vaev,
      email: "oz@vaev.at",
    },
    {
      image: XOS,
      email: "projects@vrmarketing.pt",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 mb-20">
      <div className="flex flex-col w-full items-center gap-3">
        <h1 className="text-black font-cocogoose text-4xl md:text-2xl">
          {t("Project Partners")}
        </h1>
        <h3 className="text-black font-cocogoose-light font-bold text-2xl md:text-xl">
          {t("Click To Message")}
        </h3>
      </div>

      <div className="w-full relative">
        <Image
          src={MapImage}
          alt="partners-map"
          className="w-full h-auto z-0"
        />
        <Marker mainClass="top-[41%] right-[32%]" partner={partners[1]} />
        <Marker mainClass="top-[67%] right-[25%]" partner={partners[0]} />
        <Marker mainClass="top-[65%] right-[45%]" partner={partners[4]} />
        <Marker mainClass="top-[80%] right-[49%]" partner={partners[2]} />
        <Marker mainClass="top-[83%] left-[2%]" partner={partners[5]} />
        <Marker mainClass="top-[85%] left-[10%]" partner={partners[3]} />
      </div>
    </div>
  );
};

const Marker: FC<{
  mainClass: string;
  partner: iPartner;
}> = ({ mainClass, partner }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className={`${mainClass} absolute cursor-pointer`}>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white relative`}
      />
      {hover && (
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className={`absolute z-5 size-10 bg-light-blue-75 w-[370px] md:w-[250px] h-auto px-12 md:px-5 py-10 md:py-4 flex flex-col items-center rounded-[30px] rounded-tl-none md:rounded-tl-[30px] top-2 left-2 md:-left-10 `}
        >
          <Image
            src={partner.image}
            alt="partner-image"
            className="w-[80%] md:w-[50%] h-auto"
          />

          <h2 className="mt-8 font-cocogoose text-brand text-[24px] md:text-[16px] md:leading-[18px] leading-[26px]">
          {t("Contact email:")}
          </h2>
          <a
            href={`mailto:${partner.email}`}
            className="mt-1 font-cocogoose hover:font-bold text-brand text-[20px] md:text-[16px] md:leading-[18px] text-center leading-[21px] underline"
          >
            {partner.email}
          </a>
        </div>
      )}
    </div>
  );
};

export default Map;
