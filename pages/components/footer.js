import Foot from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
    const router = useRouter();
    return (
        <div className="w-screen h-32 bg-[#2b2b2b] flex items-center justify-between gap-20 px-8" >
        <button className="w-64 h-10 bg-contain bg-no-repeat bg-[url('/Logo.png')]"></button>
        <div className="flex flex-col">
            <div class="font-bold">Холбоо барих</div>
            <div class="">Имэйл: kkkkkkkk@gmail.com</div>
        </div>
        </div>
    );
}