import React from "react";
import Image from "next/image";
import logo from "@/assets/brand-me-logo.png"

const Logo = () => {
    return ( 
            <div className="w-[150px]">
                <Image src={logo} alt={"logo"} />
            </div>
     );
}
 
export default Logo;