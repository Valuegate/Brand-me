import { create } from "zustand";

type GlobalConfig = {
  loggedIn: boolean;
};

export const useGlobalStore = create<GlobalConfig>((set) => ({
  loggedIn: true,
}));
