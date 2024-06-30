"use client";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import FadeMenu from "./FadeMenu";

interface NavbarProps {
  userId: string;
}

const Navbar: React.FC<NavbarProps> = ({ userId }) => {
  const adminIds = process.env.NEXT_PUBLIC_ADMIN_IDS?.split(",");
  const isAdmin = adminIds?.includes(userId);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dashboardItems = [
    {
      label: "Add New Course",
      href: "/dashboard/AddCourse",
    },
    {
      label: "Edit Courses",
      href: "/dashboard/courses",
    },
    
  ];

  return (
    <div>
      <nav>
        <ul className="flex items-center justify-between text-slate-100 font-bold text-lg gap-8 p-4">
          <div className="flex items-center gap-4 lg:justify-center">
            <li
              className={`${
                window.location.pathname === "/" ? "text-slate-300 " : ""
              } hover:text-slate-300 transition-all duration-500`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                window.location.pathname === "/courses" ? "text-slate-300 " : ""
              }hover:text-slate-300 transition-all duration-500 `}
            >
              <Link href="/courses">Courses</Link>
            </li>
            {isAdmin && (
              <li className="relative">
                
                <FadeMenu items={dashboardItems} label="DashBoard"/>
              </li>
            )}
          </div>
          <div className="flex items-center justify-center gap-4">
            <li className="w-8 h-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </li>
          <li>
            
         



          </li>
          </div>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
