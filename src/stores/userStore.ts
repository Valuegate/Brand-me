import { StaticImageData } from "next/image";
import { create } from "zustand";

export type User = {
  image: string | StaticImageData;
  firstName: string;
  surname: string;
};

export const useUserStore = create<User>((set) => ({
  image: "",
  firstName: "Alina",
  surname: "Hassan",
}));
