import React from "react";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/SK38L1Ji7rXu1M4N633wHXV3g2z0T2z9B2TYcRux.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/jAOSlgOJ5m9bvPFWLGbb7f8lfJv1m4gMk4qQfuKf.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/DEjFQh2JwEQ2MrdDNZMCHozo6RqRRQbQGzoSBBXq.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/pQiNtOST0i0iCpzsLMUEVa7dXQoQRs6080nh3NJN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/Ht8HsB4eL6SxTJlhHk7QrX388z4XE8Z0Stvs1ktl.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/4yOiOCLrWJL8oIvIbX56vLKFwNgryR816JCbFs1a.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/8LY60C0xMisuYLheC2BRIFFlcN0JKcNGKu0ph6RQ.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/SK38L1Ji7rXu1M4N633wHXV3g2z0T2z9B2TYcRux.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/jAOSlgOJ5m9bvPFWLGbb7f8lfJv1m4gMk4qQfuKf.jpg",
];

export default function ScrollThree() {
  return (
    <div class="relative rounded-xl overflow-auto ">
      <div class="text-3xl font-bold p-2">Тун удахгүй</div>
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
    </div>
  );
}
