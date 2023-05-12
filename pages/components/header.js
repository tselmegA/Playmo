import Head from "next/head";
import React from "react";
import { useRouter} from "next/router";
import Image from "next/image";
import { useState } from "react";

  export default function Header() {
    const [opacity, setOpacity] = useState(false);
    const changeOpacity = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 8) setOpacity(true);
        else setOpacity(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeOpacity);
  };
  const router = useRouter();
  return(
    <div className= {opacity ? "h-16 fixed z-50 left-0 text-white top-0 bg-[#2B2B2B] w-screen flex items-center gap-20 px-8 duration-700" : " h-16 fixed left-0 text-white top-0 w-screen z-50 flex items-center gap-20 px-8 duration-700"}>
      <div className="w-64 h-10 bg-contain bg-no-repeat bg-[url('/Logo.png')]"></div>
      <button className="text-white text-xl font-semibold flex flex-row gap-2 " onClick={() => router.push("/")}>Төрөл
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-px w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 </button>
      
      <div className="w-full flex justify-end">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}