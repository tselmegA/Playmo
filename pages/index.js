import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home(){
  return (
    <div className="w-screen h-full pt-32 bg-black  items-center jutsify-center text-white grid grid-cols-4">
      <Header />
      <div className=" w-screen h-screen bg-cover bg-no-repeat bg-[url(https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/302538700_1486597948441808_6283954568846972158_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=vOtIMAVfQbYAX9PF85B&_nc_ht=scontent.fuln6-2.fna&oh=00_AfA1sfShI0F6ygAFCxDo7a9T9Onf_yZclgSN9mi9Me5YdA&oe=64594B2C)]"></div>
    </div>
  );
};