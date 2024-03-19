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

interface iPartner {
  image: StaticImageData;
  title: string;
  breakTitle?: string;
  subtitle?: string;
  description: string;
  preBold?: string;
  boldText?: string;
}

const Partners = () => {
  const partners: iPartner[] = [
    {
      image: Innovation,
      title: "Innovation Education Lab",
      breakTitle: "(iEL)",
      description:
        "Mission: Supporting young people, education activities, innovation in education and training, and encouraging volunteering. Comprises experienced project managers, youth workers, facilitators, and creative professionals with a mission to create innovation, empowerment, participation, inclusion, and social entrepreneurship among disadvantaged youth.",
    },
    {
      image: Efektas,
      title: "Efektas Group",
      preBold:
        "A Lithuanian education & training organization focusing on personal-professional development since ",
      boldText: "2016",
      description:
        ". Expertise in developing soft skills through various educational methodologies, tools, and approaches. Aims to educate local and international individuals and organizations using coaching, non-formal learning, applied neuroscience, applied psychology, and innovative instruments.      ",
    },
    {
      image: Erasmus,
      title: "garagErasmus",
      breakTitle: "Foundation (gE)",
      preBold: "Established in ",
      boldText: "2012 ",
      description:
        "as the first professional network of the Erasmus Generation, in coordination with the European Commission. Aims to create a stronger Europe through and with the Erasmus Generation, with a focus on youth employment, valorization of soft skills, non-formal education, and inter-generational capacity building among alumni.",
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
    },
    {
      image: Vaev,
      title: "gVienna Association of Educational Volunteers",
      breakTitle: "(V.A.E.V.)",
      description:
        "A non-profit, non-political organization aiming to empower people, promote peace, tolerance, and social equality through assisting individuals in acquiring knowledge and developing skills for professional and personal success. Focuses on providing community-based coaching, educational, and career opportunities for disadvantaged people, including immigrants, refugees, unemployed individuals, NEETs, and those from lower socio-economic backgrounds and with disabilities.",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={1} />
      </div>
      <div className="h-32" />
      <div className="px-32">
        <div className="mt-16">
          <h1 className="text-4xl text-black font-cocogoose">
            Project Partners <br /> of BRAND ME
          </h1>
        </div>

        <div className="flex flex-col">
          {partners.map((partner, i) => {
            return (
              <section className="mt-10 bg-brand-30 border-none rounded-3xl">
                <div className="px-16 pt-[2rem] pb-[3rem]">
                  <div className="flex items-center gap-8 pb-4">
                    <Image src={partner.image} alt={""} className="" />
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
                        <p className="font-cocogoose-light">
                          {partner.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className=" pb-8 text-base text-black font-cocogoose-light">
                    {partner.preBold && <span>{partner.preBold}</span>}
                    {partner.boldText && (
                      <span className="font-bold">{partner.boldText}</span>
                    )}
                    {partner.description}
                  </p>
                  <button className="text-white bg-light-blue px-5 py-2 rounded-lg text-[20px] font-cocogoose">
                    Learn More
                  </button>
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
