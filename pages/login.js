import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#161616] flex justify-center items-center ">
      <div className="w-[58vh] h-[33vh] bg-[#2B2B2B] flex justify-center items-center rounded ">
        <div className="w-[50vh] h-[26vh]  bg-[#2B2B2B]">
          <div className="flex justify-center text-3xl mt-8 font-medium">
            Үзэхийн тулд нэвтэрнэ үү.
          </div>
          <button
            onClick={() => router.push("/reallogin")}
            className="w-[50vh] h-[6vh] rounded flex justify-center items-center font-medium text-lg mt-5 bg-[#29b75a] hover:bg-[#1f7d3f]"
          >
            Нэвтрэх
          </button>
          <button className="w-[50vh] h-[6vh] rounded flex justify-center text-[#29b75a] items-center font-medium border border-[#29b75a] text-lg mt-5 hover:bg-[#272626] bg-[#2B2B2B]">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}
