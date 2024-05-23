export interface iAdmin {
    sn: number | string;
    name: string;
    email: string;
    date: Date;
    status: string;
  }

  export interface iMember {
    sn: number | string;
    name: string;
    email: string;
    courses: number;
    date: Date;
    status: string;
  }