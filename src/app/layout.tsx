import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dashboard UnicoID",
  description: "Dashboard desenvolvido para fins de teste",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
