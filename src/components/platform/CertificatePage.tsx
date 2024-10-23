"use client";
import React, { ReactNode, useState, useEffect, Suspense } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import Certificate from "../resuable/Certficate";

import { useSearchParams, useRouter } from "next/navigation";
import { Loader } from "@mantine/core";
import { useGlobalStore } from "@/stores/globalStore";

const CertificatePage = () => {
  return <Suspense fallback={<Loader />}>
    <CertificatePageContent />
  </Suspense>
}


const CertificatePageContent = () => {
  const [child, setChild] = useState<ReactNode | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const target = searchParams.get("target");

  useEffect(() => {
    if (target === null) {
      router.back();
    } else {

      const payload: any = JSON.parse(Buffer.from(target!, "base64").toString("utf-8"));
      setChild(<Certificate courseName={payload.courseName} name={payload.name} numberOfModules={payload.numberOfModules} />)
    }

  }, [router])

  return (
    <div className="bg-white">
      <div className="fixed top-0 left-0 right-0 z-10">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      <div className="w-full flex flex-col gap-10 items-center">
        {child !== null && child}
        {child !== null && <button onClick={() => {
          useGlobalStore.setState({ downloadCertificate: true });
        }}
          className="bg-brand text-white font-cocogoose px-5 py-3 font-bold rounded-full">
          Download
        </button>}

      </div>
      <Footer />
    </div>
  )
}

export default CertificatePage