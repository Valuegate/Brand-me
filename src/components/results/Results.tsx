"use client";
import NavBar from "@/components/resuable/NavBar/NavBar";
import React from "react";
import Banner from "./Banner";

import FlexComponent from "./FlexComponent";

import Bam1 from "@/assets/results/Bam_Report_1.svg";
import Bam2 from "@/assets/results/Bam_Report_2.svg";
import Bam3 from "@/assets/results/Bam_Report_3.svg";
import Bam4 from "@/assets/results/Bam_Report_4.svg";
import Bam5 from "@/assets/results/Bam_Report_5.svg";
import Bam6 from "@/assets/results/Bam_Report_6.svg";

import B1 from "@/assets/results/Branding_1.svg";
import B2 from "@/assets/results/Branding_2.svg";
import B3 from "@/assets/results/Branding_3.svg";
import B4 from "@/assets/results/Branding_4.svg";

import MD1 from "@/assets/results/Manual_1.svg";
import MD2 from "@/assets/results/Manual_2.svg";
import MD3 from "@/assets/results/Manual_3.svg";
import MD4 from "@/assets/results/Manual_4.svg";
import MD5 from "@/assets/results/Manual_5.svg";

import PD1 from "@/assets/results/Project_1.svg";
import PD2 from "@/assets/results/Project_2.svg";
import PD3 from "@/assets/results/Project_3.svg";
import PD4 from "@/assets/results/Project_4.svg";
import PD5 from "@/assets/results/Project_5.svg";
import Footer from "../resuable/Footer/Footer";

import { useGlobalStore } from "@/stores/globalStore";

const Results = () => {
  const loggedIn = useGlobalStore((state) => state.loggedIn);

  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={loggedIn ? 1 : 2} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col">
        <Banner />
        <FlexComponent
          reports={[
            {
              image: Bam1,
              text: "Create an accurate and relevant survey form.",
            },
            {
              image: Bam2,
              preBold: "Collect at least",
              boldText: "40",
              text: "replies per nation and compile them into a practical, easy-to-read report.",
            },
            {
              image: Bam3,
              preBold: "Defining",
              boldText: "12",
              text: "important areas for effective professional growth and personal brand construction.",
            },
            {
              image: Bam4,
              text: "Advice and experiences shared by organizations helping populations.",
            },
            {
              image: Bam5,
              text: "Uploading and sharing the report to the media and stakeholders.",
            },
            {
              image: Bam6,
              text: "Raising awareness for career growth and personal branding among young NEETs and students.",
            },
          ]}
          arrangeRight={true}
          title="BAM Report"
          description="The BAM Report provides real-time insights on NEETs'
              perspectives on education, career advice, development, and personal
              branding in Portugal, Spain, Italy, Austria, Romania, and Lithuania.
              Stakeholders in the youth sector benefit from this information."
          trailing="The research will collect data on target groups' prospective
              requirements in terms of employment, branding, professionalism, career
              development, and labour market. This study is critical for the creation
              of relevant and useful learning materials. The study will encourage
              individuals and organisations to look deeper into the issue of personal
              branding, resulting in the development of new initiatives, projects,
              activities, and resources to address local and European concerns."
        />
        <FlexComponent
          reports={[
            {
              image: B1,
              preBold: "Developing an e-learning program consisting of",
              boldText: "12",
              text: "modules to educate and support NEET participants and career advisors.",
            },
            {
              image: B2,
              text: "Translate content into partners' languages.",
            },
            {
              image: B3,
              text: "Creating online course infrastructure for engaging remote learners internationally.",
            },
            {
              image: B4,
              text: "Motivate kids to pursue careers and promote personal branding among young NEETs.",
            },
          ]}
          arrangeRight={false}
          title="Online Course of Personal Branding Skills"
          description="The online branding course will provide 12 training modules and additional project resources for comprehensive learning."
          trailing="The course will cover 12 critical skills for personal brand building and deployment, giving students a thorough grasp of how to apply what they've learned to advance their careers."
        />
        <FlexComponent
          reports={[
            {
              image: MD1,
              text: "Researching, developing, and creating the BAM Manual.",
            },
            {
              image: MD2,
              text: "Promoting and distributing the BAM Manual.",
            },
            {
              image: MD3,
              text: "Raising awareness of personal brand training opportunities and activities.",
            },
            {
              image: MD4,
              text: "Engaging target groups to apply the BAM Manual and gain feedback on changes.",
            },
            {
              image: MD5,
              text: "Making it accessible to the intended audience.",
            },
          ]}
          arrangeRight={true}
          title="BAM Manual"
          description="The BAM Manual will be prepared collaboratively by all stakeholders
          under the leadership and supervision of IEL. The goals of this work
          package are:"
          trailing="These objectives complement previous project results and serve as a
          valuable resource for the BAM project's overall execution. The BAM
          Manual will increase the project's influence on local and worldwide
          contexts and objectives by acting as an engagement tool for youth
          workers, leaders, educators, and other players in the youth career
          counselling and employment domains."
        />
        <FlexComponent
          reports={[
            {
              image: PD1,
              text: "Created project branding package.",
            },
            {
              image: PD2,
              text: "Social media posts in partners official pages.",
            },
            {
              image: PD3,
              text: "Training course for youth workers hosted in Italy.",
            },
            {
              image: PD4,
              preBold:
                "Multiplier Events in all partners' countries involving at least",
              boldText: "180",
              text: "participants.",
            },
            {
              image: PD5,
              text: "Dissemination campaign garagErasmus Foundation.",
            },
          ]}
          arrangeRight={false}
          title="Project Dissemination"
          description=""
          trailing="The project dissemination activities aim to ensure the widespread reach and impact of the project outcomes across different countries and target groups."
        />
      </div>
      <Footer />
    </>
  );
};

export default Results;
