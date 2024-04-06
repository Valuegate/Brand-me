export interface iNavItem {
  name: string;
  link: string;
}


export interface iMobileDrawerProp {
    openedDrawer: boolean,
    closeDrawer: () => void;
    navs: iNavItem[];
    index: number;
    loggedIn: boolean;
    logout: () => void;
}
