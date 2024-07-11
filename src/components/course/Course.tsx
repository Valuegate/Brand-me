"use client";
import React from "react";
import Footer from "@/components/resuable/Footer/Footer";
import NavBar from "@/components/resuable/NavBar/NavBar";
import CourseCard from "./CourseCard";
import Location from "@/assets/Case.png";
import Navigate from '@/assets/Vector(1).png';
import Security from '@/assets/security.png';
import HandStar from '@/assets/Hand_Stars.png';
import Hand from '@/assets/Vector.png';
import Person from '@/assets/person.png';
import Face from '@/assets/face.png';
import Union from '@/assets/Union.png';
import Bookmark from '@/assets/bookmark.png';
import Widget from '@/assets/Widget_Add.png';
import { useTranslation } from "react-i18next";

const OnlineCourse = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={3} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col">
        <h1 className="text-4xl md:text-2xl text-black text-center font-cocogoose px-[20%] md:px-0">
          {t("Welcome")}
        </h1>
        <p className="text-base text-black font-cocogoose-light font-bold md:text-center pt-6 px-[20%] md:px-0">
          {t("Comprehensive Course")}
        </p>

        <div className="mt-12">
          <h1 className="text-4xl md:text-2xl text-black text-center font-cocogoose">
            {t("Course Overview")}
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light md:text-center pt-3 px-[20%] md:px-0">
            {t("Course Overview Text")}
          </p>
        </div>

        <div className="mt-12 md:px-[5%]">
          <h1 className="text-4xl md:text-2xl text-black text-center font-cocogoose">
            {t("Course Objectives")}
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light flex justify-center pt-3">
            {t("Course Objectives Text")}
          </p>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={Location}
              text={t("Objective 1")}
            />
            <CourseCard
              image={Navigate}
              text={t("Objective 2")}
            />
            <CourseCard
              image={Security}
              text={t("Objective 3")}
            />
          </div>
        </div>

        <div className="mt-12 md:px-[5%]">
          <h1 className="text-4xl md:text-2xl text-black text-center font-cocogoose">
            {t("Unique Features")}
          </h1>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={HandStar}
              text={t("Feature 1")}
            />
            <CourseCard
              image={Hand}
              text={t("Feature 2")}
            />
            <CourseCard
              image={Person}
              text={t("Feature 3")}
            />
          </div>
        </div>

        <div className="mt-12 px-[5%]">
          <h1 className="text-4xl md:text-2xl text-black text-center font-cocogoose">
            {t("Target Group")}
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light flex justify-center pt-3">
            {t("Target Group Text")}
          </p>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={Face}
              text={t("Target Group 1")}
            />
            <CourseCard
              image={Union}
              text={t("Target Group 2")}
            />
            <CourseCard
              image={Bookmark}
              text={t("Target Group 3")}
            />
            <CourseCard
              image={Widget}
              text={t("Target Group 4")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineCourse;
