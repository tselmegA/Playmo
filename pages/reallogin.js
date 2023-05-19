import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#161616] flex justify-center items-center ">
      <Header hide={false} />
      <div className="w-[122vh] h-[68vh] mt-28 bg-[#2B2B2B] flex items-center flex-col rounded ">
        <div className="w-[122vh] h-[6vh] shadow-[0_2px_2px_2px_rgba(22,22,22,.5)] font-semibold flex justify-center text-2xl items-center flex-col">
          Нэвтрэх
        </div>
        <div className="flex flex-col mt-10 space-y-1">
          <div className=" font-extralight text-[#bdbdbd] text-sm">
            Имэйл хаяг
          </div>
          <input className="w-[48vh] h-[6vh] bg-[#353535] border border-[#484848] outline-none pl-3 rounded"></input>
        </div>
        <div className="flex flex-col mt-14 space-y-1">
          <div className=" font-extralight text-[#bdbdbd] text-sm">Нууц үг</div>
          <input className="w-[48vh] h-[6vh] bg-[#353535] border border-[#484848] outline-none pl-3 rounded"></input>
        </div>
        <button className="w-[48vh] h-[6vh] rounded flex justify-center items-center font-medium text-lg mt-12 bg-[#29b75a] ">
          Нэвтрэх
        </button>
        <div className="w-[48vh] h-[8vh]  bg-[#2b2b2b] flex justify-between items-center">
          <span className="text-[#29b358] font-extralight ">
            <a href="https://www.playmo.mn/password/email">Нууц үг сэргээх</a>
          </span>
          <span className="text-[#29b358] flex font-extralight">
            <a href="">Бүртгүүлэх</a>
          </span>
        </div>
        <span className="w-[48vh] h-[6vh] rounded flex justify-center items-center font-medium text-lg  bg-[#3c5997] ">
          <a href="https://www.facebook.com/login">Facebook нэвтрэх</a>
        </span>
      </div>
    </div>
  );
}
