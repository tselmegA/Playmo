import React from "react";
import Link from "next/link";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/EWn0fNt9HNPTKcQdr4V9lJmghKYABi5KOPOytZ2D.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/VpJ2mddWD1fXqFWubeYVQLSHEtIOc93Vov0cV7M5.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cJ2uJ4xjyYflxJ2rk29xtW4Garkju3HuDugegbCN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/Z2JKh448afZ8LmexqNULHPeAwIWUaeyJMSdDgJ5B.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/IspZgjucjdhbv0eDZdeqrOPPmoLpwkPqGKE6cRqw.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/xq0I5cs1V3lUaaVoP0vmA3ob3LFWgyNx8Z1TL3Og.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/RaaljIR4BbkickIeq9gsBtRiq6vesKbR2oEHRGMl.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/EWn0fNt9HNPTKcQdr4V9lJmghKYABi5KOPOytZ2D.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/VpJ2mddWD1fXqFWubeYVQLSHEtIOc93Vov0cV7M5.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cJ2uJ4xjyYflxJ2rk29xtW4Garkju3HuDugegbCN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/Z2JKh448afZ8LmexqNULHPeAwIWUaeyJMSdDgJ5B.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/IspZgjucjdhbv0eDZdeqrOPPmoLpwkPqGKE6cRqw.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/xq0I5cs1V3lUaaVoP0vmA3ob3LFWgyNx8Z1TL3Og.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/RaaljIR4BbkickIeq9gsBtRiq6vesKbR2oEHRGMl.jpg",
];

export default function ScrollSpecial() {
  return (
    <div class="relative rounded-xl overflow-auto bg-green-950">
      <div class="text-3xl font-bold p-2">Playmo Theatre</div>
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto pb-5">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            // alt={Image ${index + 1}}
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
          />
        ))}
      </div>
      <div class="">Шинээр нэмэгдсэн кинонуудыг түрээслэн үзээрэй.</div>
      <div class="text-green-500 mb-8">
        <a
          href="https://help.playmo.mn/article/herhen-kino-tureesleh-ve"
          target="_blank"
        >
          Яагаад тусдаа төлбөр гэж?
        </a>
      </div>
    </div>
  );
}
