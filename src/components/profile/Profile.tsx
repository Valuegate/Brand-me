"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import { useUserStore } from "@/stores/userStore";
import Image from "next/image";
import Avatar from "@/assets/avatar.png";
import { BiStore } from "react-icons/bi";
import { CloseIcon, Loader } from "@mantine/core";
import { BsClock } from "react-icons/bs";
import { PiRobotFill } from "react-icons/pi";
import Efektas from "@/assets/Efektas_white.png";
import Link from "next/link";
import ProgressBar from "../resuable/ProgressBar";

import { convertDate } from "@/functions/dateFunctions";
import { iAccountProfileResponse } from '@/hooks/queries/useFetchAccountProfile';
import axios from 'axios';
import { globalKey } from '@/stores/globalStore';

import {baseUrl} from "@/services/base";
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const [account, setAccount] = useState<iAccountProfileResponse>({
    id: -1,
    email: "",
    first_name: "",
    last_name: "",
    date_joined: "",
    image: "",
    bio: "",
    location: "",
  })
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const role = useUserStore((state) => state.role);

  const [valid, setValid] = useState<boolean>(true);


  const validRoute = () => {
    let token = localStorage.getItem(globalKey);
    return token !== null;    
  }

  const fetchAccount = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;
    axios({
      method: "GET",
      url: `${baseUrl}/accounts/profile/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      setAccount(res.data as iAccountProfileResponse)
      setIsLoading(false)
      setIsSuccess(true)
    }).catch(err => {
      setIsLoading(false)
      setIsSuccess(false)
    })
  }

  useEffect(() => {
    if(!validRoute()) {
      setValid(false);
      window.location.assign("/login");
    } else {
      fetchAccount();
    }
  }, [])


  if(!valid) {
    return <></>
  }

  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      {!isLoading && isSuccess && (
        <div className="flex flex-col w-full mb-20 px-[10%] md:px-[5%] md:gap-10">
          <div className="flex md:flex-col md:gap-5 justify-between mb-6">
            <div className="flex flex-col gap-4 w-[60%] md:w-full">
              <div className="bg-light-blue-30 px-8 py-4 md:py-5 rounded-2xl">
                <div className="flex md:flex-col gap-8 items-center">
                  <div>
                    
                    <Image
                      src={account.image && account.image.length !== 0 ? account.image : Avatar}
                      alt={""}
                      className="size-[200px] md:size-[120px]"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-12">
                    <span>
                      <h2 className="text-brand text-[25px] leading-[20px] font-cocogoose mb-2 md:text-center">
                        {account.first_name} {' '} {account.last_name}
                      </h2>
                      <p className="text-brand text-[12px] leading-[13px] font-cocogoose mb-2 md:text-center">
                        {account.email}
                      </p>
                      <div className="flex items-center gap-1 md:justify-center">
                        <BiStore />
                        <p className="text-brand text-[12px] leading-[13px] font-cocogoose">
                          {role}
                        </p>
                      </div>
                      <div className="">
                        <span className="flex items-center md:justify-center gap-1 mt-2">
                          <PiRobotFill />
                          <p className="text-brand text-[15px] leading-[15px] font-cocogoose">
                            {t("joined")} <strong>{convertDate(new Date(account.date_joined))}</strong>
                          </p>
                        </span>
                      </div>
                    </span>
                    <Link href={"/settings"}>
                      <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                      {t("editProfile")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-light-blue-30 h-full flex justify-center px-8 py-4 md:py-5 rounded-2xl">
                {/* <h2 className="text-brand text-[25px] md:text-[18px] leading-[20px] font-cocogoose mb-2">
                  Membership
                </h2>
                <div className="flex items-center gap-2">
                  <div className="bg-brand px-2 py-2 rounded-xl">
                    <Image src={Efektas} alt={""} className="w-[50px] h-[50px]" />
                  </div>
                  <div>
                    <p className="text-brand text-[15px] leading-[15px] font-cocogoose-light">
                      Efektas Group
                    </p>
                    <p className="text-brand text-[15px] leading-[15px] font-cocogoose-light mt-3">
                      Private <strong>180</strong>members
                    </p>
                  </div>
                </div> */}
                <div className='flex justify-center items-center gap-2'>
                  <h2 className='text-brand font-cocogoose text-2xl'>{t("bio")}</h2>
                  <p className='text-brand font-cocogoose text-base'>
                {account.bio}
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-light-blue-30 px-8 py-4 md:px-5 rounded-2xl w-[35%] md:w-full">
              <h2 className="text-brand text-[25px] md:text-[18px] leading-[20px] font-cocogoose mb-2">
              {t("myCoursesStatistics")}
              </h2>
              <div className="mt-10">
                <div className="flex gap-2 flex-col">
                  <div>
                    <p className="text-brand text-[20px] leading-[20px] font-cocogoose">
                    {t("foundationCourse")}
                    </p>
                    <ProgressBar
                      backgroundColor="bg-brand-49"
                      valueColor="bg-brand"
                      hideText={false}
                      value={0.2}
                    />
                  </div>

                  <div>
                    <p className="text-brand text-[20px] leading-[20px] font-cocogoose">
                    {t("foundationCourse")}
                    </p>
                    <ProgressBar
                      backgroundColor="bg-brand-49"
                      valueColor="bg-brand"
                      hideText={false}
                      value={0.7}
                    />
                  </div>

                  <div>
                    <p className="text-brand text-[20px] leading-[20px] font-cocogoose">
                    {t("foundationCourse")}
                    </p>
                    <ProgressBar
                      backgroundColor="bg-brand-49"
                      valueColor="bg-brand"
                      hideText={false}
                      value={0.2}
                    />
                  </div>

                  <div>
                    <p className="text-brand text-[20px] leading-[20px] font-cocogoose">
                    {t("foundationCourse")}
                    </p>
                    <ProgressBar
                      backgroundColor="bg-brand-49"
                      valueColor="bg-brand"
                      hideText={false}
                      value={0.7}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-blue-30 px-8 py-4 md:py-5 rounded-2xl">
            <h2 className="text-brand text-[25px] md:text-[18px] leading-[20px] font-cocogoose mb-2">
            {t("myWeeklyActivity")}
            </h2>

            <div className="mt-8">
              <div className="flex md:flex-col md:items-start md:gap-5 justify-between">
                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    MON
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand-20 rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    TUE
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand-20 rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    WED
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    THU
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand-20 rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    FRI
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    SAT
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand rounded-2xl"></span>
                </div>

                <div className="flex flex-col gap-2 items-center md:items-start md:w-full">
                  <h2 className="text-brand text-[18px] leading-[10px] font-cocogoose mb-1">
                    SUN
                  </h2>
                  <span className="w-20 md:w-full h-6 bg-brand rounded-2xl"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading &&
        <div className="flex flex-col items-center justify-center h-[50vh] w-full">
          <Loader color="#1C274D" size={"36px"} />
        </div>
      }
      <Footer />
    </>
  );
};

export default Profile;
