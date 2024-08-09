import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  metadataBase: new URL("https://facto-store.vercel.app"),
  title: "factor store",
  description: "Product configuration and order management application",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
