"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

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
