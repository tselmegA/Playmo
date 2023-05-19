import React from "react";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/u3mNunEz8jRC5F5FBwGwAYuMSMYbiVrBYU3xqWHR.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/EoZYb3e26Wg7IaaIWNhxNBlDC0IDmVaIo4g83LrG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/kHDsyNv72FdRmSKeEe8e7O9yA1ATwmfNW9cWYVkR.jpg ",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/gYZk5EOedGtajyWcTjER4WtPoOLd29Iuk3lGFT5v.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cBx006wHERznXxqyxSa3WyFnwyOaaXaXoNlOd3sG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/7h2AnyXqwIB1VYomJCmyubSSTpfLHnNdbH7agrDQ.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/MtNE7Kb18hKXIJl5x8BwKr4G0lxypkRXdeydqXPN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/wfyEsfSYQyl7SWp3Rk3sHDrDom9jBaO2Lm4kCZoX.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
];

export default function ScrollEight() {
  return (
    <div class="relative rounded-xl overflow-auto ">
      <div class="text-3xl font-bold p-2">Монгол кино</div>
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