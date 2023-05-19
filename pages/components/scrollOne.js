import React from "react";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/7wPuIfJQ7Y4GCXWng870zXrD6ztkB7zyvGBsCnSV.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/ZUulS0r4jA6z5MwSQ2oLfWirncbmDzfQQ1Va5AZ3.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/AnfrOB81J7B4N9H2ODHLIaxXcg1oP0FdyWpfsvQb.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/kI9ACZXEUhBJKhnXP5haEX9Z6u7yJpqPrUJvEFpm.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/7wPuIfJQ7Y4GCXWng870zXrD6ztkB7zyvGBsCnSV.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/ViqwAfP5rtSPxi8gZQrvN9ShLKtDK3B5uF7cg4c0.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/n3hn6oRPzyXlN1RuUvyCoS7TCQvEaUCzDRTjLeoe.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/iGM0J4qeslzGHttXgSfNTRqJLyyCfQpW2pF8A95J.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/AnfrOB81J7B4N9H2ODHLIaxXcg1oP0FdyWpfsvQb.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/kI9ACZXEUhBJKhnXP5haEX9Z6u7yJpqPrUJvEFpm.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/ZUulS0r4jA6z5MwSQ2oLfWirncbmDzfQQ1Va5AZ3.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/AnfrOB81J7B4N9H2ODHLIaxXcg1oP0FdyWpfsvQb.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/kI9ACZXEUhBJKhnXP5haEX9Z6u7yJpqPrUJvEFpm.jpg",
];

export default function ScrollOne() {
  return (
    <div class="relative rounded-xl overflow-auto">
      <div class="text-3xl font-bold p-2">Одоо гарч буй</div>
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
