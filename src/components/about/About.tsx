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
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();

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
              {t("brand_me_mission")}
            </h1>
            <p className="py-6 text-white text-base font-cocogoose-light font-bold">
              {t("brand_me_mission_content")}
            </p>
            <Link href={"/sign-up"} className="text-brand bg-light-blue px-5 md:w-full py-2 md:py-3 rounded-lg text-[20px] font-cocogoose">
              {t("sign_up")}
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-black font-cocogoose md:text-xl text-3xl">
          {t("for_whom")}
          </h2>
          <div className="flex md:flex-col pt-6 justify-center gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
              {t("youth")}
              </span>
              <span className="px-6 md:px-0 bg-light-blue-30 text-center text-brand font-cocogoose-light font-bold text-base leading-[20px] flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("not_in_education_employment_training")}
              </span>
              <span className="bg-light-blue-30 text-brand font-cocogoose-light font-bold text-base flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("students")}
              </span>
            </div>
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("youth_workers")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full px-2 items-center">
                {t("educators")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("teachers")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("youth_leaders")}
              </span>
            </div>
            <div className="flex flex-col gap-4 md:gap-3 md:w-full">
              <span className="bg-brand text-white text-lg font-cocogoose  flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("institutions")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full px-2 items-center">
                {t("schools")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("public_bodies")}
              </span>
              <span className="bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("youth_centers")}
              </span>
              <span className="px-6 md:px-0 text-center bg-light-blue-30 text-brand text-base font-cocogoose-light font-bold leading-5 flex justify-center h-[50px] rounded-xl w-[20rem] md:w-full items-center">
                {t("non_formal_education_providers")}
              </span>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-black font-cocogoose text-3xl">
            {t("objectives")}
          </h2>
          <p className="text-center text-black font-cocogoose-light font-bold text-base pt-4">
            {t("objectives_content")}
          </p>

          <div className="flex md:flex-col justify-center mt-12 w-full">
            <div className="flex flex-col gap-12 md:gap-6">
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Bulb} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%] md:w-[75%]">
                  {t("identify_define_skills")}
                </p>
              </div>
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Case} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black md:w-[75%] w-[60%]">
                  {t("reduce_employment_mismatch")}
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
                  {t("create_educational_resources")}
                </p>
              </div>
              <div className="flex gap-8 md:gap-4">
                <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
                  <Image src={Star} alt={""} className="w-[40px] h-[40px]" />
                </div>
                <p className="text-base font-cocogoose-light font-bold text-black  w-[60%]">
                  {t("inspire_youth")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-light-blue-30 text-brand border-none rounded-3xl">
          <div className="pl-10 py-[2rem] md:px-5 ">
            <h1 className="text-4xl md:text-2xl font-cocogoose text-center">
              {t("project_outputs")}
            </h1>
            <p className="text-base pt-2 font-cocogoose-light text-center">
            {t("project_outputs_content")}
            </p>
            <div className="pt-5 pb-8">
              <h5 className="text-base font-cocogoose pb-2">{t("bam_report")}</h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("objectives_survey_approach")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("survey_implementation_plan")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("survey_questions_translations")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("insights_recommendations")}
              </li>
            </div>

            <div className="pb-8">
              <h5 className="text-base font-cocogoose pb-2">
                {t("online_course_branding_skills")}
              </h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("hosting_training_materials")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("supportive_tool")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("self_assessment_tool")}
              </li>
            </div>

            <div className="">
              <h5 className="text-base font-cocogoose pb-2">{t("brand_me_manual")}</h5>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("concept_importance")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("skills_practices")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("digital_printable_versions")}
              </li>
              <li className="list-none text-base font-cocogoose-light font-bold">
                {t("accessible_project_partners")}
              </li>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-brand border-none rounded-3xl">
          <div className="pl-10 py-[2rem] md:px-5">
            <h1 className="text-4xl md:text-2xl text-white font-cocogoose md:text-center">
              {t("project_partners")}
            </h1>

            <div className="pt-8">
              <h2 className="text-lg font-cocogoose text-white">
                {t("project_coordinator")}
              </h2>
              <p className="text-base font-cocogoose-light font-bold text-white py-2">
                {t("association_vr_marketing")}
              </p>
              <p className="text-base font-cocogoose-light font-bold text-white w-[70%] md:w-full pb-8">
                {t("vr_marketing_content")}
              </p>
              <Link href={"https://vrmarketing.pt/"} target="__blank" className="text-light-blue bg-white px-5 md:w-full py-2 md:py-3 rounded-lg text-[20px] font-cocogoose">
                {t("learn_more")}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
