import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@clerk/nextjs/server"

import Navbar from "./components/Navbar";
import providers from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AC|Material Mohamed Zahran",
  description: "Material Providing app for AC students",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const adminIds = process.env.NEXT_PUBLIC_ADMIN_IDS?.split(",");
  const {userId} = auth()   
  const isAdmin = adminIds?.includes(userId||" ");
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        

<>

        <Navbar userId={userId||" "} />
        <div  >

        {children}
        </div>
</>  
        </body>
    </html>
    </ClerkProvider>
  );
}