import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Header({ hide = true }) {
  const router = useRouter();
  const [opacity, setOpacity] = useState(false);
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);

  const haih = () => {
    if (search == false) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };
  const nevtreh = () => {
    if (login == false) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const changeOpacity = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 8) setOpacity(true);
      else setOpacity(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeOpacity);
  }
  useEffect(() => {
    if (!hide) {
      setOpacity(true);
    }
  }, []);
  return (
    <div
      className={
        opacity
          ? "h-16 fixed z-50 left-0 text-white top-0 bg-[#2B2B2B] w-screen flex items-center gap-20 px-8 duration-700"
          : " h-16 fixed left-0 text-white top-0 w-screen z-50 flex items-center gap-20 px-8 duration-700"
      }
    >
      <button className="w-64 h-10 bg-contain bg-no-repeat bg-[url('/Logo.png')]"></button>
      <button
        className="text-white text-lg font-semibold flex flex-row gap-2 "
        onClick={() => router.push("/")}
      >
        Төрөл
        <TurulIcon />
      </button>

      <div className="w-full flex justify-end  items-center">
        <input
          className={
            search
              ? "  flex items-center rounded p-2 w-[185px] h-12 bg-[#2B2B2B] mr-5 outline-none"
              : "w-32 h-24 bg-[#2B2B2B] hidden "
          }
          placeholder="Хайх..."
        />
        <button onClick={haih}>
          <SearchIcon />
        </button>
        <div className="relative">
          <button onClick={nevtreh}>
            <SumIcon />
          </button>
          <button
            onClick={() => router.push("/login")}
            className={
              login
                ? "absolute right-0 top-12 flex  justify-center border items-center rounded p-2 w-[140px] h-[55px] bg-[#353535] mr-5 gap-3 border-opacity-10"
                : "w-32 h-24 bg-[#353535] hidden "
            }
          >
            <NevtrehIcon />
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
}

const TurulIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="mt-px w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 mr-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

const SumIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 mr-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const NevtrehIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      viewBox="0 0 32 32"
      strokeWidth={1 / 2}
      stroke="currentColor"
      className="w-4 h-4 "
    >
      <path d="M16.642 20.669c-0.391 0.39-0.391 1.023-0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.39-0.39-1.023-0.39-1.414 0s-0.391 1.024 0 1.414l3.617 3.617h-19.264c-0.552 0-1 0.448-1 1s0.448 1 1 1h19.326zM30.005 0h-18c-1.105 0-2.001 0.895-2.001 2v9h2.014v-7.78c0-0.668 0.542-1.21 1.21-1.21h15.522c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-15.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.014 0.003v9.030c0 1.105 0.896 2 2.001 2h18c1.105 0 2-0.895 2-2v-28c-0.001-1.105-0.896-2-2-2z"></path>
    </svg>
  );
};
