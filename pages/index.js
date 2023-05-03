import Head from "next/head";
import React from "react";
import { useRouter} from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return(
    <div className="fixed left-0 py-4 text-white top-0 bg-stone-800 w-screen flex gap-40 px-8">
      <Image src="https://play-lh.googleusercontent.com/yOFAv8nplAvlJyyL0mYwwFYIxaGIBRUCI1_mg1mS_bC_P7SpWpvdmoCBcF3odwiMFkM"  width={30} height={0}/>
      <span className="text-white" onClick={() => router.push("/")}>Төрөл</span>
    </div>
  );
}

export default Header;