import { StaticImageData } from "next/image";

export interface iAdmin {
    image: string | StaticImageData;
    name: string;
    email: string;
    date: Date;
    online: boolean;
  }

  export interface iMember {
    id: string | number,
    image: string | StaticImageData;
    name: string;
    email: string;
    date: Date;
  }