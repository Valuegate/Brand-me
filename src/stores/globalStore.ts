import { create } from "zustand";

export type GlobalConfig = {
  loggedIn: boolean;
  notifications: Notification[];
};

export const globalKey = "BRAND_ME_GLOBAL_KEY";
export const defaultBrandValues: GlobalConfig = {
  loggedIn: false,
  notifications: [],
};

type Notification = {
  image: string;
  title: string;
  content: string;
  date: Date;
  read: boolean;
};

export const useGlobalStore = create<GlobalConfig>((set) => ({
  loggedIn: false,
  logIn: () => {
    set({ loggedIn: true });
  },
  logOut: () => {
    set({ loggedIn: false });
  },
  notifications: [],
}));
