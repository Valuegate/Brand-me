import React, {ChangeEventHandler, FC} from 'react'

export interface iInputProps {
    label: string;
    placeholder: string;
    width: string;
    value: string;
    onChange: ChangeEventHandler,
  }
  
  const InputComponent: FC<iInputProps> = ({
    label,
    width,
    value,
    placeholder,
    onChange,
  }) => {
    return (
      <div className={`${width} flex flex-col gap-1`}>
        <p className="font-cocogoose-light font-bold text-[16px] text-brand ">
          {label}
        </p>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${width} focus:outline-none bg-[#FFFFFF00] font-cocogoose border-[3px] pl-4 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand`}
        />
      </div>
    );
  };
  
export default InputComponent