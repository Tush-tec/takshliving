// pages/_app.js
import { Geist, Geist_Mono } from "next/font/google";
import NavbarWrapper from "@/components/NavbarWrapper";
import ContextProvider from "@/components/ContextProvider";
import "@/styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={` antialiased`}>
      <ContextProvider>
        <NavbarWrapper>
          <Component {...pageProps} />
        </NavbarWrapper>
      </ContextProvider>
    </div>
  );
}
