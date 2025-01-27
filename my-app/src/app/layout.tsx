import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Image from "next/image";
//リンクコンポーネントの読み込み

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "2024 Web Application Exam",
  description: "課題作成",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`} >
        <div className="grid grid-rows-[62px_1fr_48px]  min-h-screen p-8 pb-20">
          <header className="p-3 flex justify-between items-center">
            {
              // リンクの作成 
              // リンク先："/" 
            }
              <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              />
            
            <ul className="flex justify-between items-center gap-4">
              <li>
                {
                  //リンクの指定
                  // クラス　："hover:underline hover:underline-offset-4"
                  // リンク先：'./aboutUs'
                }
                about us</li>
              <li>
                {
                  //リンクの指定
                  // クラス　："hover:underline hover:underline-offset-4"
                  // リンク先：'./aboutUs'
                }
                contact</li>
            </ul>
          </header>
        {children}

          <footer className="flex flex-wrap p-3 items-center justify-center">
            <span className="flex items-center gap-2 ">
              <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
              />
              2024 Web Application Exam
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
