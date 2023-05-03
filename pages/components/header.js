import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-screen pt-32 bg-black flex items-center jutsify-center text-white grid grid-cols-4">
      <Header />
    </div>
  );
};