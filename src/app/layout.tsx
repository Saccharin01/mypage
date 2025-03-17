import type { Metadata } from "next";
import "./globals.css";
import { StaticProvider } from "./components/hooks/context/useLiteral";

export const metadata: Metadata = {
  title: "Saccharin01's portfolio",
  description: "조우식의 페이지 입니다.",
  keywords: ["조우식", "개발자", "웹 개발", "프로그래밍", "포트폴리오", "saccharin01"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <StaticProvider>
        <body className="h-full">
          <div className="min-h-screen w-full flex flex-col">
            <div className="flex-1 bg-gradient-to-tl from-[#6846ffde] via-[#b2a6ff] to-[#d3c8ff] px-2 lg:px-80 w-full">
              {children}
            </div>
          </div>
        </body>
      </StaticProvider>
    </html>
  );
}
