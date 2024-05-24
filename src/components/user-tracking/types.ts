import { StaticImageData } from "next/image";

export interface iAdmin {
    image: string | StaticImageData;
    name: string;
    email: string;
    date: Date;
    online: boolean;
  }

  export interface iMember {
    image: string | StaticImageData;
    name: string;
    email: string;
    courses: number;
    date: Date;
    online: boolean;
  }