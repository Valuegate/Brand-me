import { StaticImageData } from "next/image";
import { create } from "zustand";

export type User = {
  image: string | StaticImageData;
  firstName: string;
  surname: string;
  alias: string;
  role: string;
  joined: Date;
  bio: string;
  email: string;
  location: string;
};

export const useUserStore = create<User>((set) => ({
  image: "",
  firstName: "Alina",
  surname: "Molchan",
  alias: "@alinamolchanMM",
  email: "alina@mail.com",
  role: "NLP Trainer",
  location: "India",
  joined: new Date(),
  bio: "Hi There, I am a new member to Brand Me",
}));
