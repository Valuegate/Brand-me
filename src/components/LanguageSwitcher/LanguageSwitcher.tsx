import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';

import USFlag from '@/assets/flags/us.jpeg';
import GMFlag from '@/assets/flags/german.png';
import LTFlag from '@/assets/flags/lithuania.png';
import ITFlag from '@/assets/flags/italy.png';
import ESFlag from '@/assets/flags/spain.png';
import PTFlag from '@/assets/flags/portugal.jpg';
import ROFlag from '@/assets/flags/romania.png';

type LanguageCode = 'en' | 'de' | 'lt' | 'it' | 'es' | 'pt' | 'ro';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const changeLanguage = (lng: LanguageCode) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const getFlagImage = (languageCode: LanguageCode) => {
    switch (languageCode) {
      case 'en':
        return USFlag;
      case 'de':
        return GMFlag;
      case 'lt':
        return LTFlag;
      case 'it':
        return ITFlag;
      case 'es':
        return ESFlag;
      case 'pt':
        return PTFlag;
      case 'ro':
        return ROFlag;
      default:
        return '/assets/flags/default.png'; // Default flag image for unknown languages
    }
  };

  const LanguageOption: React.FC<{ value: LanguageCode; label: string }> = ({ value, label }) => (
    <div
      key={value}
      className="flex items-center text-white cursor-pointer hover:bg-white hover:text-brand hover:rounded-md"
      onClick={() => changeLanguage(value)}
    >
      <Image src={getFlagImage(value)} alt={`${label} Flag`} className="inline-block w-4 h-4 mr-2" width={50} height={50} />
      <span className="text-white hover:text-brand">{label}</span>
    </div>
  );

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex justify-end px-[1rem] sm:px-[1rem] pt-2 items-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text-brand flex items-center bg-white px-4 py-1 text-sm font-medium rounded-md"
        >
          <span>{t(i18n.language)}</span>
          <span className="ml-2"><IoMdArrowDropdown className={`w-6 h-6 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /></span>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-10 right-0 mt-2 bg-light-blue w-32 hover:text-brand px-2 py-4 rounded-md shadow z-10">
            <LanguageOption value="en" label="English" />
            <LanguageOption value="pt" label="Portuguese" />
            <LanguageOption value="ro" label="Romanian" />
            <LanguageOption value="lt" label="Lithuanian" />
            <LanguageOption value="it" label="Italian" />
            <LanguageOption value="es" label="Spanish" />
            <LanguageOption value="de" label="German" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
