import React from "react";
import Image from "next/image";
import logo from "@/assets/brand-me-logo.png"

const Logo = () => {
    return ( 
            <div className="w-[221px] h-[111px]">
                <Image src={logo} alt={"logo"} />
            </div>
     );
}
 
export default Logo;