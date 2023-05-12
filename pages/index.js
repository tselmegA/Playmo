import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-[200vh]  bg-black  items-start jutsify-center text-white grid grid-cols-4">
      <Header />
      <div className=" w-screen h-[80vh] bg-contain flex bg-no-repeat bg-[url(https://api.playmo.mn/storage/images/media/banner/Q2tkEXSJkAjLB5ycvodyeTdR9aoKsYJU482BezXk.jpg)] bg-opacity-50">
        <div className="w-1/2 h-[80vh] bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-screen h-[10vh] bg-gradient-to-bl from-black to-transparent"></div>
      </div>
    </div>
  );
};