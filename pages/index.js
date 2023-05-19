import Head from "next/head";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import Header from "./components/header";
import { useRouter } from "next/router";
import Footer from "./components/footer";
import ScrollOne from "./components/scrollOne";
import ScrollTwo from "./components/scrollTwo";
import ScrollThree from "./components/scrollThree";
import ScrollFour from "./components/scrollFour";
import ScrollSpecial from "./components/scrollSpecial";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-screen h-[200vh]  bg-black  items-start text-white ">
      <Header />
      <div className="  w-screen h-[66vh] bg-cover flex bg-center bg-[url(https://api.playmo.mn/storage/images/media/banner/VHYcr7vt1XjIyPqTUaqPnqb5CyusB8IuPpVdgeTE.jpg)]">
        <div className="absolute z-0 left-0 top-0 w-1/3 h-[66vh] bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-screen z-0 h-[20vh] bg-gradient-to-b	absolute top-0  from-black to-transparent"></div>
        <div className="flex  z-40 justify-center flex-col  items-center  ">
          <img
            className="w-full"
            src="https://api.playmo.mn/storage/images/media/logo/md/zbnPZVqLD5leUFhDeFiFTtdtz0atf9f1PDPaZazC.png"
          />
          <div className="flex gap-10  items-center  ">
            <button
              onClick={() => router.push("/login")}
              className="w-[16vh] h-[6vh] rounded flex justify-center items-center font-medium text-lg  bg-[#29b75a]"
            >
              Шууд үзэх
            </button>
            <button className=" w-[12vh] h-[8vh] flex flex-col items-center justify-center hover:bg-[#ffffff] hover:bg-opacity-10">
              <ListIcon />
              <div className="text-xs">Жагсаалт</div>
            </button>
            <button className=" w-[10vh] h-[8vh] flex flex-col justify-center items-center hover:bg-[#ffffff] hover:bg-opacity-10 ">
              <InfoIcon />
              <div className="text-xs ">Тойм</div>
            </button>
          </div>
        </div>
      </div>
      <ScrollOne />
      <ScrollTwo />
      <ScrollThree />
      <ScrollSpecial />
      <ScrollFour />
      <Footer />
    </div>
  );
}

const ListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12  "
    >
      <path
        d="M17 19V11M3 11H13M3 7H13M3 15H9M13 15H21"
        stroke="white"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-9 h-9 "
    >
      <path
        id="Vector"
        d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
        stroke="white"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
