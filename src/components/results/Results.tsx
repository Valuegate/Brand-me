"use client";
import NavBar from "@/components/resuable/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";

import { useRouter } from "next/navigation"

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

import { globalKey } from "@/stores/globalStore";
import { useTranslation } from 'next-i18next';

import Pic4 from "@/assets/pic 4.png";
import Pic5 from "@/assets/pic 5.png";
import Pic6 from "@/assets/pic 6.png";
import Pic7 from "@/assets/pic 7.png";

import incrementDownloadCount from "@/hooks/queries/useIncrementDownloadCount";
import { Loader } from "@mantine/core";

const Results = () => {
  const { t, i18n } = useTranslation();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    let data = localStorage.getItem(globalKey);
    setLoggedIn(data !== null)
    setToken(data !== null ? JSON.parse(data).access_token : "");
  },
    []
  )


  const downloadBAMReport = () => {
    let link: string = "";
    switch (i18n.language) {
      case 'en':
        link = "https://drive.google.com/file/d/12Gt8uDgVRWiYPEMtaqBoGI3Z3nGkZPKT/view?usp=drivesdk";
        break;
      case 'de':
        break;
      case 'lt':
        link = "https://drive.google.com/file/d/12k1HYzKIhGagyC7icQGFoeR4TFdTXQev/view?usp=drivesdk";
        break;
      case 'it':
        link = "https://drive.google.com/file/d/13e2m-S5bMM_Sg6ECo3BVTDTQNaDe_9mx/view?usp=drivesdk";
        break;
      case 'es':
        link = "https://drive.google.com/file/d/12l6ik-ZAWXxExVR4FP9uwc_N3em3ULtb/view?usp=drivesdk";
        break;
      case 'pt':
        link = "https://drive.google.com/file/d/13RP6k9SLOMcflPJLGQTiVhyi09KnKfdf/view?usp=drivesdk";
        break;
      case 'ro':
        link = "https://drive.google.com/file/d/13SIdftOEcMfEKl_Pjv1nL4X7JenMkZfw/view?usp=drivesdk";
        break;
      default: break;
    }

    if (link !== "" && token !== "") {
      setLoading(true);
      incrementDownloadCount(token, (_) => {
        setLoading(false);
        window.open(link, "_blank");
      })
    }
  }

  return (
    <div className="bg-white">
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
              text: t("bam_reports.bam1_text"),
            },
            {
              image: Bam2,
              preBold: t("bam_reports.bam2_preBold"),
              boldText: t("bam_reports.bam2_boldText"),
              text: t("bam_reports.bam2_text"),
            },
            {
              image: Bam3,
              preBold: t("bam_reports.bam3_preBold"),
              boldText: t("bam_reports.bam3_boldText"),
              text: t("bam_reports.bam3_text"),
            },
            {
              image: Bam4,
              text: t("bam_reports.bam4_text"),
            },
            {
              image: Bam5,
              text: t("bam_reports.bam5_text"),
            },
            {
              image: Bam6,
              text: t("bam_reports.bam6_text"),
            },
          ]}
          arrangeRight={true}
          title={t("bam_report")}
          description={t("bam_desc")}
          trailing={t("bam_trailing")}
          image={Pic6}
        />
        <button onClick={downloadBAMReport} className="bg-brand text-white font-cocogoose text-lg w-[200px] rounded py-4 ">
          {
            loading ? <Loader color="white.6" /> : t("download")
          }
        </button>
        <FlexComponent
          reports={[
            {
              image: B1,
              preBold: t("branding_reports.b1_preBold"),
              boldText: t("branding_reports.b1_boldText"),
              text: t("branding_reports.b1_text"),
            },
            {
              image: B2,
              text: t("branding_reports.b2_text"),
            },
            {
              image: B3,
              text: t("branding_reports.b3_text"),
            },
            {
              image: B4,
              text: t("branding_reports.b4_text"),
            },
          ]}
          arrangeRight={false}
          title={t("branding_course")}
          description={t("branding_desc")}
          trailing={t("branding_trailing")}
          image={Pic7}
        />
        <FlexComponent
          reports={[
            {
              image: MD1,
              text: t("manual_reports.md1_text"),
            },
            {
              image: MD2,
              text: t("manual_reports.md2_text"),
            },
            {
              image: MD3,
              text: t("manual_reports.md3_text"),
            },
            {
              image: MD4,
              text: t("manual_reports.md4_text"),
            },
            {
              image: MD5,
              text: t("manual_reports.md5_text"),
            },
          ]}
          arrangeRight={true}
          title={t("bam_manual")}
          description={t("manual_desc")}
          trailing={t("manual_trailing")}
          image={Pic4}
        />
        <FlexComponent
          reports={[
            {
              image: PD1,
              text: t("dissemination_reports.pd1_text"),
            },
            {
              image: PD2,
              text: t("dissemination_reports.pd2_text"),
            },
            {
              image: PD3,
              text: t("dissemination_reports.pd3_text"),
            },
            {
              image: PD4,
              preBold:
                t("dissemination_reports.pd4_preBold"),
              boldText: t("dissemination_reports.pd4_boldText"),
              text: t("dissemination_reports.pd4_text"),
            },
            {
              image: PD5,
              text: t("dissemination_reports.pd5_text"),
            },
          ]}
          arrangeRight={false}
          title={t("project_dissemination")}
          description=""
          trailing={t("dissemination_desc")}
          image={Pic5}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Results;
