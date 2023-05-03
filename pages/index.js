import Head from "next/head";
import React from "react";
import { useRouter} from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return(
    <div className="fixed left-0 py-4 text-white top-0 bg-stone-800 w-screen flex gap-40 px-8">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/2560px-Pornhub-logo.svg.png"  width={100} height={0}/>
      <span className="text-white" onClick={() => router.push("/")}>Төрөл</span>
    </div>
  );
}

export default Header;