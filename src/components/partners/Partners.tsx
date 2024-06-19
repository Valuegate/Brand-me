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
  const partners: iPartner[] = [
    {
      image: Innovation,
      title: "Innovation Education Lab",
      breakTitle: "(iEL)",
      description:
        "Mission: Supporting young people, education activities, innovation in education and training, and encouraging volunteering. Comprises experienced project managers, youth workers, facilitators, and creative professionals with a mission to create innovation, empowerment, participation, inclusion, and social entrepreneurship among disadvantaged youth.",
        link: "https://innoedulab.eu/en/",
    },
    {
      image: Efektas,
      title: "Efektas Group",
      preBold:
        "A Lithuanian education & training organization focusing on personal-professional development since ",
      boldText: "2016",
      description:
        ". Expertise in developing soft skills through various educational methodologies, tools, and approaches. Aims to educate local and international individuals and organizations using coaching, non-formal learning, applied neuroscience, applied psychology, and innovative instruments.      ",
        link: "https://efektasgroup.com/",
    },
    {
      image: Erasmus,
      title: "garagErasmus",
      breakTitle: "Foundation (gE)",
      preBold: "Established in ",
      boldText: "2012 ",
      description:
        "as the first professional network of the Erasmus Generation, in coordination with the European Commission. Aims to create a stronger Europe through and with the Erasmus Generation, with a focus on youth employment, valorization of soft skills, non-formal education, and inter-generational capacity building among alumni.",
        link: "https://garagerasmus.org/",
    },
    {
      image: Indepcie,
      title: "INDEPCIE",
      subtitle:
        "(Institute for the personal development, entrepreneurship, coaching and Emotional Intelligence)",
      preBold: "Founded in ",
      boldText: "2018 ",
      description:
        ", focused on attitudinal training and improvement of human performance through coaching, Emotional Intelligence, soft skills, and Neuro Linguistic Programming (NLP). Specializes in developing techniques and strategies for individuals and organizations to achieve continuous improvement.",
        link: "https://indepcie.com/",
    },
    {
      image: Vaev,
      title: "gVienna Association of Educational Volunteers",
      breakTitle: "(V.A.E.V.)",
      description:
        "A non-profit, non-political organization aiming to empower people, promote peace, tolerance, and social equality through assisting individuals in acquiring knowledge and developing skills for professional and personal success. Focuses on providing community-based coaching, educational, and career opportunities for disadvantaged people, including immigrants, refugees, unemployed individuals, NEETs, and those from lower socio-economic backgrounds and with disabilities.",
        link: "https://gvienna.org/",
    },
  ];

  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%]">
        <div className="mt-16 md:mt-6">
          <h1 className="text-4xl md:text-2xl text-black font-cocogoose">
            Project Partners of BRAND ME
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
                    Learn More
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
