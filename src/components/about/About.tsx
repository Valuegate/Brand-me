"use client";

import NavBar from "@/components/resuable/NavBar/NavBar";
import Image from "next/image";
import React from "react";
import Bulb from "@/assets/Lightbulb.png";
import Case from "@/assets/Case.png";
import MagicStick from "@/assets/MagicStick.png";
import Star from "@/assets/Star.png";
import Footer from "@/components/resuable/Footer/Footer";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%]">
        <section className="mt-16 md:mt-6 bg-brand  border-none rounded-3xl">
          <div className="px-10 md:px-5 pt-[10rem] md:py-10 pb-[5rem]">
            <h1 className="text-4xl md:text-center md:text-2xl text-white font-cocogoose ">
              BRAND Me Mission
            </h1>
            <p className="py-6 text-white text-base font-cocogoose-light font-bold">
              The BrandMe (BAM) project is dedicated to increasing employment
              opportunities for youth. Our mission is to develop educational
              resources and instruments that foster the participation of youth
              in the labor market, nurturing their professionalism, and
              equipping them with the skills to integrate and compete
              effectively in the job market. Additionally, the project aims to
              enhance the profiles of professionals in this sector, emphasizing
              the importance of early career development and progression.
            </p>
            <Link href={"/sign-up"} className="text-brand bg-light-blue px-5 md:w-full py-2 md:py-3 rounded-lg text-[20px] font-cocogoose">
              Sign Up
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-black font-cocogoose md:text-xl text-3xl">
            For Whom?
          </h2>
          <div className="flex md:flex-col pt-6 justify-center gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Youth
              </span>
              <span className="px-6 md:px-0 bg-light-blue-30 text-center text-brand font-cocogoose-light font-bold text-base leading-[20px] flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Not in Education, Employment, or Training.
              </span>
              <span className="bg-light-blue-30 text-brand font-cocogoose-light font-bold text-base flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Students.
              </span>
            </div>
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Youth Workers
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full px-2 items-center">
                Educators.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Teachers.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Youth leaders.
              </span>
            </div>
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose  flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Institutions
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full px-2 items-center">
                Schools.{" "}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Public bodies.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Youth centers.
              </span>
              <span className="px-6 md:px-0 text-center bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold leading-5 flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                Non formal education providers.
              </span>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-black font-cocogoose text-3xl">
            Objectives
          </h2>
          <p className="text-center text-black font-cocogoose-light font-bold text-base pt-4">
            The Brand Me (BAM) project aims to achieve the following objectives:
          </p>

          <div className="flex md:flex-col justify-center mt-12 w-full">
            <div className="flex flex-col gap-12 md:gap-6">
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Bulb} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%] md:w-[75%]">
                  Identify and define 12 essential digital-presentation skills
                  to support youth workers in training NEETs on personal
                  branding.
                </p>
              </div>
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Case} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black md:w-[75%] w-[60%]">
                  Reduce employment mismatch by providing training to youth in
                  the NEET group
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12 md:gap-6 md:mt-6 ">
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image
                    src={MagicStick}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  Create relevant educational resources that respond to the 12
                  skills and competences in personal branding strategies and
                  practices.
                </p>
              </div>
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Star} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  Inspire youth to continue developing their careers and
                  promoting themselves effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-light-blue-30 text-brand border-none rounded-3xl">
          <div className="pl-10 py-[2rem] md:px-5 ">
            <h1 className="text-4xl md:text-2xl font-cocogoose text-center">
              Project Outputs
            </h1>
            <p className="text-base pt-2 font-cocogoose-light text-center">
              The project will deliver the following outputs:
            </p>
            <div className="pt-5 pb-8">
              <h5 className="text-base font-cocogoose pb-2">BAM Report</h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Objectives and survey approach.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Survey implementation plan with a concrete strategy.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Survey questions and their translations in national languages.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Insights and recommendations from consortium organizations.
              </li>
            </div>

            <div className="pb-8">
              <h5 className="text-base font-cocogoose pb-2">
                Online Course of Branding Skills
              </h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Hosting training materials for the 12 modules and other tangible
                project resources
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Supportive tool for formal and non-formal activities.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Self-assessment tool about branding skills
              </li>
            </div>

            <div className="">
              <h5 className="text-base font-cocogoose pb-2">Brand Me Manual</h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Introduction to the concept and importance of personal branding
                and active career development.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Skills to be trained and practices for successful hiring.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Digital and printable versions available.
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                Accessible in project partners&apos; websites and BAM learning
                platform for educators.
              </li>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-brand border-none rounded-3xl">
          <div className="pl-10 py-[2rem] md:px-5">
            <h1 className="text-4xl md:text-2xl text-white font-cocogoose md:text-center">
              Project Partners of BRAND ME
            </h1>

            <div className="pt-8">
              <h2 className="text-lg font-cocogoose text-white">
                Project Coordinator
              </h2>
              <p className="text-base font-cocogoose-light font-bold text-white py-2">
                Associação VR de Marketing
              </p>
              <p className="text-base font-cocogoose-light font-bold text-white w-[70%] md:w-full pb-8">
                The VR Marketing Association, affiliated with Brand22
                organization, is a creativity agency focusing on digital
                marketing in Vila Real. Purpose: Fosters, encourages, supports,
                and promotes social projects in the North region, particularly
                in social incubation in partnership with Régia Douro Park.
                Provides support in disseminating and implementing knowledge
                related to marketing strategy, research, learning, training, and
                practice in marketing management.
              </p>
              <button className="text-light-blue bg-white px-5 md:w-full py-2 md:py-3 rounded-lg text-[20px] font-cocogoose">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
