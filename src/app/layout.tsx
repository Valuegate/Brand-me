import type { Metadata } from "next";
import localFont from '@next/font/local';
import "./globals.css";

const cocogooseRegular = localFont({
  src: "../assets/Cocogoose Regular.woff2",
  variable: '--font-cocogoose-regular'
})

const cocogooseThin = localFont({
  src: "../assets/Cocogoose Pro Thin.woff2",
  variable: '--font-cocogoose-thin'
})


export const metadata: Metadata = {
  title: {
    default: "Brand Me",
    template: "%s | Brand Me",
  },
  description: "Increasing employment opportunities for youths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cocogooseRegular.variable} ${cocogooseThin.variable} font-sans-serif`}>{children}</body>
    </html>
  );
}
