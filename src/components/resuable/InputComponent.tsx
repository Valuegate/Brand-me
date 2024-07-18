import React, { ChangeEventHandler, FC, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export interface iInputProps {
  label: string;
  placeholder: string;
  width: string;
  type: "text" | "password";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputComponent: FC<iInputProps> = ({
  label,
  width,
  value,
  placeholder,
  onChange,
  type,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={`${width} flex flex-col gap-1`}>
      <p className="font-cocogoose text-[16px] text-brand ">
        {label}
      </p>
      <div className={`relative ${width}`}>
        <input
          type={showPassword || type === "text" ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${width} focus:outline-none bg-[#FFFFFF00] font-cocogoose border-[3px] px-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand`}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoMdEyeOff size={"20px"} fill="#1C274D" />
            ) : (
              <IoMdEye size={"20px"} fill="#1C274D" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
