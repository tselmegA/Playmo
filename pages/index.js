import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-full  bg-black  items-center jutsify-center text-white grid grid-cols-4">
      <Header />
      <div className=" w-screen h-screen bg-cover bg-no-repeat bg-[url(https://i.ytimg.com/vi/_e9y729xeck/maxresdefault.jpg)]"></div>
    </div>
  );
};