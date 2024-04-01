"use client";


import NavBar from "@/components/resuable/NavBar/NavBar";
import Image from "next/image";
import React from "react";
import Bulb from "@/assets/Lightbulb.png";
import Case from "@/assets/Case.png";
import MagicStick from "@/assets/MagicStick.png";
import Star from "@/assets/Star.png";
import Footer from "@/components/resuable/Footer/Footer";

const AboutUsPage = () => {
  return (
    < >
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      <div className="px-32">
        <section className="mt-16 bg-brand  border-none rounded-3xl">
          <div className="px-10 pt-[10rem] pb-[5rem]">
            <h1 className="text-4xl text-white font-cocogoose ">
              BRAND Me <br /> Mission
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
            <button className="">
              <h5 className="text-brand bg-light-blue px-5 py-2 rounded-lg text-[20px] font-cocogoose">
                Sign Up
              </h5>
            </button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-black font-cocogoose text-3xl">
            For Whom?
          </h2>
          <div className="flex pt-6 justify-center gap-1">
            <div className="flex flex-col gap-2">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Youth
              </span>
              <span className="bg-light-blue-30 text-brand font-cocogoose-light font-bold text-base leading-3 flex justify-center h-[50px] rounded-xl w-[20rem] px-2 items-center">
                Not in Education,
                <br />
                Employment, or Training.
              </span>
              <span className="bg-light-blue-30 text-brand font-cocogoose-light font-bold text-base flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Students.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Youth Workers
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] px-2 items-center">
                Educators.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Teachers.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Youth leaders.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="bg-brand text-white text-lg font-cocogoose  flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Institutions
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] px-2 items-center">
                Schools.{" "}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Public bodies.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Youth centers.
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold leading-3 flex justify-center h-[50px] rounded-xl w-[20rem] items-center">
                Non formal education <br /> providers.
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

          <div className="flex justify-center pt-12">
            <div className="flex flex-col gap-12">
              <div className="flex gap-8">
                <div className="bg-light-blue rounded-xl px-2 py-2">
                  <Image src={Bulb} alt={""} className="w-[50px] h-[50px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  Identify and define 12 essential digital-presentation skills
                  to support youth workers in training NEETs on personal
                  branding.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="bg-light-blue rounded-xl px-2 py-2">
                  <Image src={Case} alt={""} className="w-[50px] h-[50px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  Reduce employment mismatch by providing training to youth in
                  the NEET group
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex gap-8">
                <div className="bg-light-blue rounded-xl px-2 py-2">
                  <Image
                    src={MagicStick}
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  Create relevant educational resources that respond to the 12
                  skills and competences in personal branding strategies and
                  practices.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="bg-light-blue rounded-xl px-2 py-2">
                  <Image src={Star} alt={""} className="w-[50px] h-[50px]" />
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
          <div className="pl-10 py-[2rem]">
            <h1 className="text-4xl font-cocogoose text-center">
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
          <div className="pl-10 py-[2rem]">
            <h1 className="text-4xl text-white font-cocogoose text-center">
              Project Partners <br /> of BRAND ME
            </h1>

            <div className="pt-8">
              <h2 className="text-lg font-cocogoose text-white">
                Project Coordinator
              </h2>
              <p className="text-base font-cocogoose-light font-bold text-white py-2">
                Associação VR de Marketing
              </p>
              <p className="text-base font-cocogoose-light font-bold text-white w-[70%] pb-8">
                The VR Marketing Association, affiliated with Brand22
                organization, is a creativity agency focusing on digital
                marketing in Vila Real. Purpose: Fosters, encourages, supports,
                and promotes social projects in the North region, particularly
                in social incubation in partnership with Régia Douro Park.
                Provides support in disseminating and implementing knowledge
                related to marketing strategy, research, learning, training, and
                practice in marketing management.
              </p>
              <button className="text-light-blue bg-white px-5 py-2 rounded-lg text-[20px] font-cocogoose">
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