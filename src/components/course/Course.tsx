"use client";
import React from "react";
import Footer from "@/components/resuable/Footer/Footer";
import NavBar from "@/components/resuable/NavBar/NavBar";
import CourseCard from "@/components/CourseCard/CourseCard";
import Location from "@/assets/Case.png";

const OnlineCourse = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={3} />
      </div>
      <div className="h-32" />
      <div className="px-32 flex flex-col">
        <h1 className="text-4xl text-black text-center font-cocogoose ">
          Welcome to the Online <br /> Course on Branding Skills <br /> for
          Career Development!
        </h1>
        <p className="text-base text-black font-cocogoose-light font-bold flex justify-center pt-6">
          This comprehensive course is designed to equip young learners,
          <br />
          educators, and professionals in the NEET (Not in Education,
          Employment, or <br /> Training) category with the essential skills and
          knowledge needed to thrive <br /> in today's competitive job market.
        </p>

        <div className="pt-12">
          <h1 className="text-4xl text-black text-center font-cocogoose">
            Course Overview
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light flex justify-center pt-3">
            The course comprises 12 modules, each addressing crucial skills and
            competencies <br /> in personal branding strategies and practices.
            From understanding the fundamentals <br /> of personal branding to
            effectively promoting oneself in the professional sphere, this
            course
            <br /> offers a holistic approach to career development and personal
            branding.
          </p>
        </div>

        <div className="pt-12">
          <h1 className="text-4xl text-black text-center font-cocogoose">
            Course Objectives
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light flex justify-center pt-3">
            By the end of this course, learners will:
          </p>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={Location}
              text={
                "Develop a deep understanding of the 12 essential digital-presentation skills crucial for personal brand development."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Acquire the knowledge and tools needed to navigate the job market and pursue their chosen career paths with confidence."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Gain insights into creating and growing a strong personal brand, setting them apart in todays competitive employment landscape."
              }
            />
          </div>
        </div>

        <div className="pt-12">
          <h1 className="text-4xl text-black text-center font-cocogoose">
            Unique Features <br /> and Benefits
          </h1>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={Location}
              text={
                "Engaging and interactive learning materials that cater to learners with diverse backgrounds and knowledge levels."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Accessible digital infrastructure designed to provide a user-friendly environment for seamless learning."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Self-assessment tools to evaluate and enhance branding skills, empowering learners to track their progress."
              }
            />
          </div>
        </div>

        <div className="pt-12">
          <h1 className="text-4xl text-black text-center font-cocogoose">
            Target Group
          </h1>
          <p className="text-base text-black font-bold font-cocogoose-light flex justify-center pt-3">
            This course is specifically tailored for:
          </p>
          <div className="flex items-center flex-col gap-8 pt-4">
            <CourseCard
              image={Location}
              text={
                "Young learners aged 16-29, including NEETs, recent graduates, and students in formal and non-formal education institutions."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Educators and youth leaders actively engaged in career guidance and youth employment initiatives."
              }
            />
            <CourseCard
              image={Location}
              text={
                "No prior knowledge or prerequisites are required to enroll in this course. All individuals with a passion for personal and professional growth are welcome to embark on this transformative learning journey."
              }
            />
            <CourseCard
              image={Location}
              text={
                "Join us in unlocking the potential of personal branding and active career development, and take the first step towards a successful and fulfilling professional future!"
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineCourse;
