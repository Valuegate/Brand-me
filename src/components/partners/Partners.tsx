"use client";
import NavBar from "@/components/resuable/NavBar/NavBar";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Innovation from "@/assets/innovation_education_lab2.png";
import Efektas from "@/assets/Logotype_Efektas_Red.png";
import Erasmus from "@/assets/Garage_erasmus_logo1.png";
import Indepcie from "@/assets/logo INDEPCIE vectorizado2.png";
import Vaev from "@/assets/VAEV_Logo-removebg-preview2.png";
import Footer from "@/components/resuable/Footer/Footer";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface iPartner {
  image: StaticImageData;
  title: string;
  breakTitle?: string;
  subtitle?: string;
  description: string;
  preBold?: string;
  boldText?: string;
  link: string;
}

// ADD LINKS

const Partners = () => {
  const { t } = useTranslation();
  const partners: iPartner[] = [
    {
      image: Innovation,
      title: t("innovation_title"),
      breakTitle: "(iEL)",
      description:
        t("innovation_description"),
        link: "https://innoedulab.eu/en/",
    },
    {
      image: Efektas,
      title: t("efektas_title"),
      preBold:
        t("efektas_preBold"),
      boldText: "2016",
      description:
        t("efektas_description"),
        link: "https://efektasgroup.com/",
    },
    {
      image: Erasmus,
      title: t("garagerasmus_title"),
      breakTitle: t("garagerasmus_breakTitle"),
      preBold: t("garagerasmus_preBold"),
      boldText: t("garagerasmus_boldText"),
      description:
      t("garagerasmus_description"),
        link: "https://garagerasmus.org/",
    },
    {
      image: Indepcie,
      title: t("indepcie_title"),
      subtitle:
      t("indepcie_subtitle"),
      preBold: t("indepcie_preBold"),
      boldText: t("indepcie_boldText"),
      description:
      t("indepcie_description"),
        link: "https://indepcie.com/",
    },
    {
      image: Vaev,
      title: t("vaev_title"),
      breakTitle: t("vaev_breakTitle"),
      description:
      t("vaev_description"),
        link: "https://euresearch.at/",
    },
  ];

  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%]">
        <div className="mt-16 md:mt-6">
          <h1 className="text-4xl md:text-2xl text-black font-cocogoose">
          {t("Project Partners of BRAND ME")}
          </h1>
        </div>

        <div className="flex flex-col">
          {partners.map((partner, i) => {
            return (
              <section key={i} className="mt-10 bg-brand-30 border-none rounded-3xl">
                <div className="px-16 md:px-5 md:py-8 pt-[2rem] pb-[3rem]">
                  <div className="flex md:flex-col md:items-start items-center gap-8 pb-4">
                    <Image src={partner.image} alt={""} className="w-[180px] md:w-[60%] h-auto" />
                    <div
                      className={`${partner.subtitle && "flex flex-col gap-2"}`}
                    >
                      <span className="text-black text-lg font-cocogoose">
                        {partner.title}
                        {partner.breakTitle && (
                          <span>
                            <br />
                            {partner.breakTitle}
                          </span>
                        )}
                      </span>
                      {partner.subtitle && (
                        <p className="font-cocogoose-light font-bold">
                          {partner.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className=" pb-8 text-base text-black font-cocogoose-light font-bold">
                    {partner.preBold && <span>{partner.preBold}</span>}
                    {partner.boldText && (
                      <span className="font-cocogoose">{partner.boldText}</span>
                    )}
                    {partner.description}
                  </p>
                  <Link href={partner.link} target="__blank" className="text-white bg-light-blue px-5 md:w-full py-2 md:py-3 rounded-lg text-[20px] font-cocogoose">
                    {t("Learn More")}
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
