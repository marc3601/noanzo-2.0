import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export interface ElementDescription {
  text: string;
}
export const metadata: Metadata = {
  title: "Budy dla psów - noanzo.pl",
  description:
    "Oferujemy budy dla psów wszystkich ras. Wykonane solidne i trwale z drewna o najwyższej jakości. Krótkie terminy realizacji zamówień.",
};

export const viewport: Viewport = {
  themeColor: "rgb(77, 40, 33)",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <div id='main_container' className='p-1 sm:p-3 container mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
