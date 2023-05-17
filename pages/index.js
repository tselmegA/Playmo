import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-[200vh]  bg-black  items-start jutsify-center text-white grid grid-cols-4">
      <Header />
      <div className=" w-screen h-[800px] bg-cover bg-no-repeat bg-[url(https://i.ytimg.com/vi/_e9y729xeck/maxresdefault.jpg)]"></div>
    </div>
  );
};