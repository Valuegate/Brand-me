import { Notification } from "@mantine/core";
import { create } from "zustand";

type GlobalConfig = {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  notifications: Notification[];
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
