import React from "react";
import { useRouter } from "next/router";
import { imagesData } from "./images";

export default function ScrollOne() {
  const router = useRouter()
  return (
    <div class="relative rounded-xl overflow-auto">
      <div class="text-3xl font-bold p-2">Одоо гарч буй</div>
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto pb-5">
        {imagesData.slice(0, 7).map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl.img}
            // alt={Image ${index + 1}}
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            onClick={(e) => router.push(`/ScrollOne/${imageUrl.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
