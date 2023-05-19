import React from "react";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/I85dfHhFY8DQDJ2SUat1x38trOqZLvk4urvQJ142.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/Dd2U9BMR1HYp9iKOGyE2I8sSARfKDi8mDwjzWwKs.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/ZUhR3ST8f8zJ6AqjlbBDbAm9axZ3203OZqTyPBBy.jpg ",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/gYZk5EOedGtajyWcTjER4WtPoOLd29Iuk3lGFT5v.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cBx006wHERznXxqyxSa3WyFnwyOaaXaXoNlOd3sG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/7h2AnyXqwIB1VYomJCmyubSSTpfLHnNdbH7agrDQ.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/MtNE7Kb18hKXIJl5x8BwKr4G0lxypkRXdeydqXPN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/wfyEsfSYQyl7SWp3Rk3sHDrDom9jBaO2Lm4kCZoX.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
];

export default function ScrollFour() {
  return (
    <div class="relative rounded-xl overflow-auto ">
      <div class="text-3xl font-bold p-2">Насанд хүрэгчдийн дэлгүүр 🔞</div>
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