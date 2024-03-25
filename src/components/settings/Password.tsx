import React from 'react'

import InputComponent from "../resuable/InputComponent";


const Password = () => {
  return (
    <div className="w-full bg-light-blue-30 rounded-[30px] flex flex-col py-6 px-10">
      <h2 className="text-brand text-[20px] font-cocogoose">Password</h2>
      
      <div className="mt-12 flex flex-col gap-6">
    
        <InputComponent
          width="w-full"
          label="Current Password"
          value=""
          placeholder="********"
          onChange={(e) => {
                    
          }}
        />
        <InputComponent
          width="w-full"
          label="New Password"
          value=""
          placeholder="********"
          onChange={(e) => {
                    
          }}
        />
        <InputComponent
          width="w-full"
          label="Confirm New Password"
          value=""
          placeholder="********"
          onChange={(e) => {
                    
          }}
        />
      </div>
      <div className="flex w-full justify-center my-10">
        <button className="w-[400px] bg-brand rounded-lg h-[50px] text-white font-cocogoose">
          Update Password
        </button>
      </div>
    </div>
  );
}

export default Password