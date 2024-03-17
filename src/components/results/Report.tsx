import React from "react";

const Report = () => {
  return (
    <div className="w-full flex justify-between gap-20 items-start mt-20">
      <div className="w-[40%] bg-brand rounded-3xl h-full" />
      <div className="flex flex-col w-[60%]">
        <h1 className="text-3xl text-black font-bold">BAM Report</h1>
        <p className="w-[620px] mt-10">
          The BAM Report provides real-time insights on NEETs&apos; perspectives on
          education, career advice, development, and personal branding in
          Portugal, Spain, Italy, Austria, Romania, and Lithuania. Stakeholders
          in the youth sector benefit from this information.
        </p>
      </div>
    </div>
  );
};

export default Report;
