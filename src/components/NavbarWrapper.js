"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { AuthProvider } from "@/utility/contextState.js/AuthContext";

export default function NavbarWrapper({ children }) {
  const pathName = usePathname();
  const hideHeaderOnPage = ["/login", "/register"];
  const hideHeader = hideHeaderOnPage.includes(pathName);

  return (
    <>
      {!hideHeader && <Navbar />}
     {children}
    </>
  );
}
