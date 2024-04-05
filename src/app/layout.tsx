import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";

const cocogooseRegular = localFont({
  src: "../assets/Cocogoose Regular.woff2",
  variable: "--font-cocogoose-regular",
});

const cocogooseThin = localFont({
  src: "../assets/Cocogoose Pro Thin.woff2",
  variable: "--font-cocogoose-thin",
});

export const metadata: Metadata = {
  title: {
    default: "Brand Me",
    template: "%s | Brand Me",
  },
  description: "Increasing employment opportunities for youths",
};

const myColor: MantineColorsTuple = [
  "#f0f2fa",
  "#dee1ed",
  "#b9c0dc",
  "#929ecd",
  "#7080bf",
  "#5c6eb8",
  "#5164b5",
  "#42549f",
  "#3a4b90",
  "#2e407f",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        className={`${cocogooseRegular.variable} ${cocogooseThin.variable} font-sans-serif`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
