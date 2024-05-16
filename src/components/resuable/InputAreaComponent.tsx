import React, { ChangeEventHandler, FC } from "react";

export interface iInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const InputAreaComponent: FC<iInputProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className={`w-full flex flex-col gap-1`}>
      <p className="font-cocogoose text-[16px] text-brand ">
        {label}
      </p>
      <div className={`relative w-full`}>
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full h-[200px] focus:outline-none bg-[#FFFFFF00] font-cocogoose border-[3px] px-4 py-2 text-[18px] border-brand rounded-lg placeholder:text-brand-49 text-brand resize-none`}
        />
      </div>
    </div>
  );
};

export default InputAreaComponent;
