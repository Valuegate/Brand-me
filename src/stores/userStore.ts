import { StaticImageData } from "next/image";
import { create } from "zustand";

export type User = {
  image: string | StaticImageData;
  firstName: string;
  surname: string;
  alias: string;
  role: string;
  joined: Date
};

export const useUserStore = create<User>((set) => ({
  image: "",
  firstName: "Alina",
  surname: "Molchan",
  alias: "@alinamolchanMM",
  role: "NLP Trainer",
  joined: new Date(),
}));
