import React from "react";
import { useTranslation } from 'next-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-0  flex flex-col gap-20 md:gap-5">
      <h1 className="text-4xl md:text-2xl text-black font-cocogoose">
        {t('results_title')}
      </h1>
      <p className="font-cocogoose-light text-black font-bold">
        {t('results_desc')}
      </p>
    </div>
  );
};

export default Banner;
