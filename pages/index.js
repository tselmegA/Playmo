import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-[200vh]  bg-black  items-start jutsify-center text-white grid grid-cols-4">
      <Header />
      <div className="relative  w-screen h-[80vh] bg-contain flex bg-no-repeat bg-[url(https://api.playmo.mn/storage/images/media/banner/Q2tkEXSJkAjLB5ycvodyeTdR9aoKsYJU482BezXk.jpg)] bg-opacity-50">
        <div className="absolute z-0 left-0 top-0 w-1/2 h-[80vh] bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-screen z-0 h-[20vh] bg-gradient-to-b	absolute top-0  from-black to-transparent"></div>
      </div>
    </div>
  );
};